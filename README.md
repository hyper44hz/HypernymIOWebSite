# HyperNym Website

Marketing site for HyperNym — React 19 SPA covering the IoTility and Dataverse product lines.

## Stack

| Layer | Choice |
|---|---|
| Framework | React 19 + TypeScript 5.8 |
| Build | Vite 6 |
| Routing | React Router 7 |
| Styling | Tailwind CSS 4 (`@tailwindcss/vite`) |
| Animation | `motion` |
| Icons | `lucide-react` |

## Run locally

**Prerequisites:** Node.js 20+

```bash
npm install
cp .env.example .env   # fill in values
npm run dev            # http://localhost:3000
```

## Scripts

| Command | Does |
|---|---|
| `npm run dev` | Dev server on port 3000, bound to `0.0.0.0` |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Serve the built `dist/` |
| `npm run lint` | Typecheck via `tsc --noEmit` |
| `npm run clean` | Remove `dist/` and `server.js` |

## Environment

Copy `.env.example` to `.env`. Never commit `.env` — it is gitignored.

| Var | Purpose |
|---|---|
| `GEMINI_API_KEY` | Gemini API calls |
| `APP_URL` | Public URL of the deployment; used for self-referential links and API endpoints |
| `VITE_CONTACT_FORM_ENDPOINT` | Where the contact form POSTs (build-time). `/api/contact` = bundled `server.ts`; empty = mailto fallback |
| `GRAPH_TENANT_ID` / `GRAPH_CLIENT_ID` / `GRAPH_CLIENT_SECRET` | Microsoft 365 app registration used by `server.ts` to send via Microsoft Graph (preferred) |
| `SMTP_HOST` / `SMTP_PORT` / `SMTP_USER` / `SMTP_PASS` | SMTP fallback, used only when `GRAPH_TENANT_ID` is empty (M365: `smtp.office365.com:587`) |
| `MAIL_FROM` / `CONTACT_TO` | Sender (`support@hypernym.io`) and recipient (`sales@hypernym.io`) of contact-form emails |

### Contact form

- Dev: `npm run dev:api` (API on :3001, reads `.env`) alongside `npm run dev` — Vite proxies `/api` to it.
- Prod: `npm run build` then `npm start` — serves `dist/` and `/api/contact` on `$PORT`. Logs `... connection OK` on startup if credentials work.

## Structure

```
src/
  App.tsx              route table
  main.tsx             entry
  index.css            Tailwind entry
  components/          Layout, Navbar, Footer, CTABanner, SectionHeader, Asset
  pages/
    Home, About, CaseStudies, Careers, Contact, Privacy
    iotility/          IoTilityHub, FleetIntelligence, AssetManagement,
                       TwinScape, Sustainex, UtilitiesMonitoring
    dataverse/         DataverseHub
public/
  SiteGraphics/        images and hero video
```

## Routes

| Path | Page |
|---|---|
| `/` | Home |
| `/iotility` | IoTility hub |
| `/iotility/fleet-intelligence` | Fleet Intelligence |
| `/iotility/asset-management` | Asset Management |
| `/iotility/twinscape` | TwinScape |
| `/iotility/sustainex` | Sustainex |
| `/iotility/utilities-monitoring` | Utilities Monitoring |
| `/dataverse` | Dataverse hub |
| `/about` | About |
| `/case-studies` | Case Studies |
| `/careers` | Careers |
| `/contact` | Contact |
| `/privacy` | Privacy |
| `*` | Not-found fallback |

## Media assets

`public/SiteGraphics/` holds ~282 MB of imagery and hero video, including a 76 MB
`hero/utility.mp4`. GitHub warns above 50 MB per file and blocks above 100 MB. If more
video lands here, move the directory to Git LFS or a CDN before it becomes a problem.

## Notes

- `node_modules` shipped in the original archive was built on macOS. On Linux, run
  `npm install` to pull the correct platform binaries (`@rollup/rollup-linux-x64-gnu`).
- See `DEVELOPER_HANDOFF.md` for design and content handoff details.
