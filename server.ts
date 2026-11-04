/**
 * Production server: serves the built site from dist/ and handles the
 * contact form at POST /api/contact by emailing CONTACT_TO from MAIL_FROM.
 *
 * Two ways to send (picked by which env vars are set):
 *  - Microsoft Graph (recommended for Microsoft 365): GRAPH_TENANT_ID,
 *    GRAPH_CLIENT_ID, GRAPH_CLIENT_SECRET. No mailbox password needed.
 *  - SMTP: SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS.
 *
 * Config comes from environment variables (see .env.example).
 */
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import nodemailer from 'nodemailer';

const env = (name: string, fallback?: string): string => {
  const value = process.env[name] ?? fallback;
  if (value === undefined || value === '') throw new Error(`Missing required env var ${name}`);
  return value;
};

const PORT = Number(process.env.PORT ?? 3001);
const SMTP_PORT = Number(process.env.SMTP_PORT ?? 587);
const MAIL_FROM = env('MAIL_FROM', 'support@hypernym.io');
const CONTACT_TO = env('CONTACT_TO', 'sales@hypernym.io');

type Email = { replyTo: { name: string; address: string }; subject: string; text: string; html: string };
type Mailer = { name: string; send: (m: Email) => Promise<void>; verify: () => Promise<unknown> };

/** Microsoft Graph: app-only (client credentials) token, then POST /users/{from}/sendMail. */
function graphMailer(): Mailer {
  const tenant = env('GRAPH_TENANT_ID');
  const clientId = env('GRAPH_CLIENT_ID');
  const secret = env('GRAPH_CLIENT_SECRET');
  let cached: { token: string; expires: number } | undefined;

  const token = async () => {
    if (cached && cached.expires > Date.now() + 60_000) return cached.token;
    const r = await fetch(`https://login.microsoftonline.com/${tenant}/oauth2/v2.0/token`, {
      method: 'POST',
      body: new URLSearchParams({
        client_id: clientId,
        client_secret: secret,
        scope: 'https://graph.microsoft.com/.default',
        grant_type: 'client_credentials',
      }),
    });
    const data = (await r.json()) as { access_token?: string; expires_in?: number; error_description?: string };
    if (!r.ok || !data.access_token) throw new Error(`Graph token error: ${data.error_description ?? r.status}`);
    cached = { token: data.access_token, expires: Date.now() + (data.expires_in ?? 3600) * 1000 };
    return cached.token;
  };

  return {
    name: 'Microsoft Graph',
    verify: token,
    send: async (m) => {
      const r = await fetch(`https://graph.microsoft.com/v1.0/users/${encodeURIComponent(MAIL_FROM)}/sendMail`, {
        method: 'POST',
        headers: { Authorization: `Bearer ${await token()}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: {
            subject: m.subject,
            body: { contentType: 'HTML', content: m.html },
            toRecipients: [{ emailAddress: { address: CONTACT_TO } }],
            replyTo: [{ emailAddress: m.replyTo }],
          },
          saveToSentItems: true,
        }),
      });
      if (!r.ok) throw new Error(`Graph sendMail ${r.status}: ${await r.text()}`);
    },
  };
}

function smtpMailer(): Mailer {
  const transporter = nodemailer.createTransport({
    host: env('SMTP_HOST'),
    port: SMTP_PORT,
    secure: (process.env.SMTP_SECURE ?? String(SMTP_PORT === 465)) === 'true', // true = implicit TLS (465)
    requireTLS: SMTP_PORT !== 465 && process.env.SMTP_REQUIRE_TLS !== 'false', // force STARTTLS on 587
    auth: { user: env('SMTP_USER', MAIL_FROM), pass: env('SMTP_PASS') },
  });
  return {
    name: 'SMTP',
    verify: () => transporter.verify(),
    send: async (m) => {
      await transporter.sendMail({ from: { name: 'HyperNym Website', address: MAIL_FROM }, to: CONTACT_TO, ...m });
    },
  };
}

const mailer = process.env.GRAPH_TENANT_ID ? graphMailer() : smtpMailer();

const DIST = path.join(path.dirname(fileURLToPath(import.meta.url)), 'dist');
const MAX_BODY = 20_000;
const LIMITS = { name: 120, company: 160, email: 200, phone: 40, interest: 80, message: 5000 } as const;
type Field = keyof typeof LIMITS;

// Simple in-memory rate limit: 5 submissions per IP per 10 minutes.
const hits = new Map<string, number[]>();
const rateLimited = (ip: string) => {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < 10 * 60_000);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > 5;
};

const json = (res: http.ServerResponse, status: number, body: object) => {
  res.writeHead(status, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(body));
};

const readBody = (req: http.IncomingMessage) =>
  new Promise<string>((resolve, reject) => {
    let data = '';
    req.on('data', (chunk) => {
      data += chunk;
      if (data.length > MAX_BODY) {
        reject(new Error('Body too large'));
        req.destroy();
      }
    });
    req.on('end', () => resolve(data));
    req.on('error', reject);
  });

const escapeHtml = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!);

async function handleContact(req: http.IncomingMessage, res: http.ServerResponse) {
  const ip = (req.headers['x-forwarded-for'] as string | undefined)?.split(',')[0].trim() || req.socket.remoteAddress || '';
  if (rateLimited(ip)) return json(res, 429, { error: 'Too many requests' });

  let params: URLSearchParams;
  try {
    params = new URLSearchParams(await readBody(req));
  } catch {
    return json(res, 413, { error: 'Request too large' });
  }

  // Honeypot: real users never see or fill this field. Pretend success for bots.
  if (params.get('website')) return json(res, 200, { ok: true });

  const f = {} as Record<Field, string>;
  for (const key of Object.keys(LIMITS) as Field[]) {
    f[key] = (params.get(key) ?? '').trim().slice(0, LIMITS[key]);
  }
  // Single-line fields must not contain line breaks (prevents header injection).
  for (const key of ['name', 'company', 'email', 'phone', 'interest'] as Field[]) {
    f[key] = f[key].replace(/[\r\n]+/g, ' ');
  }

  if (!f.name || !f.company || !f.message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email)) {
    return json(res, 400, { error: 'Please fill in all required fields with a valid email.' });
  }

  const rows: [string, string][] = [
    ['Name', f.name],
    ['Company', f.company],
    ['Email', f.email],
    ['Phone', f.phone || '—'],
    ['Interested in', f.interest || '—'],
  ];

  try {
    await mailer.send({
      replyTo: { name: f.name, address: f.email },
      subject: `Website enquiry: ${f.name} (${f.company}) — ${f.interest || 'General'}`,
      text: `${rows.map(([k, v]) => `${k}: ${v}`).join('\n')}\n\nMessage:\n${f.message}`,
      html:
        `<table cellpadding="4">${rows.map(([k, v]) => `<tr><td><b>${k}</b></td><td>${escapeHtml(v)}</td></tr>`).join('')}</table>` +
        `<p><b>Message:</b></p><p style="white-space:pre-wrap">${escapeHtml(f.message)}</p>`,
    });
    return json(res, 200, { ok: true });
  } catch (err) {
    console.error('[contact] sendMail failed:', err);
    return json(res, 502, { error: 'Could not send message' });
  }
}

const MIME: Record<string, string> = {
  '.html': 'text/html; charset=utf-8', '.js': 'text/javascript', '.css': 'text/css', '.json': 'application/json',
  '.svg': 'image/svg+xml', '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.webp': 'image/webp',
  '.ico': 'image/x-icon', '.mp4': 'video/mp4', '.txt': 'text/plain', '.xml': 'application/xml', '.woff2': 'font/woff2',
};

function serveStatic(req: http.IncomingMessage, res: http.ServerResponse) {
  const urlPath = decodeURIComponent(new URL(req.url ?? '/', 'http://x').pathname);
  let file = path.normalize(path.join(DIST, urlPath));
  if (!file.startsWith(DIST)) return json(res, 403, { error: 'Forbidden' });
  if (!fs.existsSync(file) || fs.statSync(file).isDirectory()) file = path.join(DIST, 'index.html'); // SPA fallback
  res.writeHead(200, { 'Content-Type': MIME[path.extname(file).toLowerCase()] ?? 'application/octet-stream' });
  fs.createReadStream(file).pipe(res);
}

http
  .createServer((req, res) => {
    if (req.url?.startsWith('/api/contact')) {
      if (req.method !== 'POST') return json(res, 405, { error: 'Method not allowed' });
      handleContact(req, res).catch((err) => {
        console.error('[contact]', err);
        json(res, 500, { error: 'Server error' });
      });
      return;
    }
    serveStatic(req, res);
  })
  .listen(PORT, () => {
    console.log(`Server on http://localhost:${PORT} — contact form → ${CONTACT_TO} via ${MAIL_FROM} (${mailer.name})`);
    mailer.verify().then(
      () => console.log(`[contact] ${mailer.name} connection OK`),
      (err) => console.error(`[contact] ${mailer.name} connection FAILED:`, err.message),
    );
  });
