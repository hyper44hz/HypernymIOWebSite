import React, { useState } from 'react';
import { Mail, MapPin, Phone, Linkedin, Globe } from 'lucide-react';
import { Asset } from '../components/Asset';
import { Seo } from '../components/Seo';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState('submitting');
    const form = e.currentTarget;
    const formData = new FormData(form);
    const endpoint = import.meta.env.VITE_CONTACT_FORM_ENDPOINT as string | undefined;

    if (!endpoint) {
      const subject = encodeURIComponent(`HyperNym enquiry from ${formData.get('name')}`);
      const body = encodeURIComponent(
        `Name: ${formData.get('name')}\nCompany: ${formData.get('company')}\nEmail: ${formData.get('email')}\nPhone: ${formData.get('phone')}\nInterested in: ${formData.get('interest')}\n\n${formData.get('message')}`
      );
      window.location.href = `mailto:info@hypernymbiz.com?subject=${subject}&body=${body}`;
      setFormState('idle');
      return;
    }

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      });
      if (!response.ok) throw new Error('Submission failed');
      form.reset();
      setFormState('success');
    } catch {
      setFormState('error');
    }
  };

  return (
    <div className="section-padding bg-bg-primary">
      <Seo title="Contact HyperNym | Book a Demo" description="Talk to HyperNym about fleet intelligence, asset management, digital twins, sustainability or enterprise AI." />
      <div className="container mx-auto px-5 sm:px-8 lg:px-[60px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <p className="eyebrow mb-5">START A CONVERSATION</p>
            <h1 className="mb-8">Let's turn your operation into intelligence.</h1>
            <p className="text-text-secondary text-[16px] md:text-lg leading-relaxed mb-12 max-w-xl">
              Whether you're evaluating IoTility or planning an enterprise AI deployment, tell us what needs to work better. We will bring the right product and technical specialists into the conversation.
            </p>

            <div className="space-y-8 mb-12">
              <ContactItem icon={<MapPin size={24} />} title="London, UK" desc="Global House, Ashley Avenue, Epsom, KT18 5AD" />
              <ContactItem icon={<Phone size={24} />} title="+44 1372 232 115" href="tel:+441372232115" />
              <ContactItem icon={<Mail size={24} />} title="info@hypernymbiz.com" href="mailto:info@hypernymbiz.com" />
            </div>

            <div className="flex gap-4 mb-12">
              <SocialLink href="https://www.linkedin.com/company/hypernym/" label="HyperNym on LinkedIn" icon={<Linkedin size={20} />} />
              <SocialLink href="https://x.com/Hypernym_" label="HyperNym on X" icon={<span className="text-xl font-bold">𝕏</span>} />
            </div>

            <div className="p-6 md:p-8 bg-bg-secondary rounded-xl border-l-4 border-cyan-accent">
              <p className="text-text-secondary text-sm leading-relaxed">Enterprise and government enquiries are normally acknowledged within four business hours.</p>
            </div>
          </div>

          <div className="bg-bg-secondary p-7 sm:p-10 lg:p-12 rounded-3xl border border-border-subtle shadow-2xl relative overflow-hidden mt-8 lg:mt-0">
            {formState === 'success' ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-20 fade-up">
                <div className="w-16 h-16 bg-cyan-accent text-bg-primary rounded-full flex items-center justify-center mb-8"><Globe size={32} /></div>
                <h3 className="mb-4 text-2xl md:text-3xl">Message sent</h3>
                <p className="text-text-secondary">Our team will get back to you shortly.</p>
                <button onClick={() => setFormState('idle')} className="mt-8 text-cyan-accent font-semibold hover:underline">Send another message</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <FormInput name="name" label="Full name*" placeholder="John Doe" required />
                  <FormInput name="company" label="Company name*" placeholder="Company name" required />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <FormInput name="email" label="Work email*" type="email" placeholder="john@company.com" required />
                  <FormInput name="phone" label="Phone" type="tel" placeholder="+44..." />
                </div>
                <div className="space-y-2">
                  <label htmlFor="interest" className="form-label">Interested in</label>
                  <select id="interest" name="interest" className="form-control">
                    <option>Fleet Intelligence</option><option>Asset Management</option><option>TwinScape</option>
                    <option>Sustainex</option><option>Utilities Monitoring</option><option>Dataverse — Enterprise AI</option><option>General Enquiry</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="form-label">What are you trying to improve?*</label>
                  <textarea id="message" name="message" required rows={5} placeholder="Tell us about your operation, scale and priorities..." className="form-control resize-y" />
                </div>
                <button type="submit" disabled={formState === 'submitting'} className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed h-[60px] text-[16px] font-bold">
                  {formState === 'submitting' ? 'Sending…' : 'Request a conversation'}
                </button>
                {formState === 'error' && <p role="alert" className="text-sm text-red-300">We couldn't send your message. Please email <a className="underline" href="mailto:info@hypernymbiz.com">info@hypernymbiz.com</a>.</p>}
                <div className="pt-7 border-t border-border-subtle flex items-center justify-between gap-6">
                  <div className="flex items-center gap-4">
                    <Asset src="/SiteGraphics/about/iso-badge.svg" description="ISO 27001 certification" dimensions="40x40" className="!w-10 !h-10 !bg-transparent !border-none !p-0" />
                    <Asset src="/SiteGraphics/logos/certifications/ccs-supplier.png" description="Crown Commercial Service supplier" dimensions="60x24" className="!w-[60px] !h-[24px] !bg-transparent !border-none !p-0 !min-h-0" />
                  </div>
                  <p className="text-[10px] text-text-tertiary uppercase tracking-widest text-right">Trusted by governments<br />and enterprises</p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const ContactItem = ({ icon, title, desc, href }: { icon: React.ReactNode; title: string; desc?: string; href?: string }) => (
  <div className="flex gap-6 items-start"><div className="text-cyan-accent mt-1">{icon}</div><div>
    <h4 className="text-lg font-bold mb-1">{href ? <a className="hover:text-cyan-accent" href={href}>{title}</a> : title}</h4>
    {desc && <p className="text-text-secondary text-sm">{desc}</p>}
  </div></div>
);

const SocialLink = ({ icon, href, label }: { icon: React.ReactNode; href: string; label: string }) => (
  <a href={href} target="_blank" rel="noreferrer" aria-label={label} className="w-10 h-10 rounded-full border border-border-default flex items-center justify-center text-text-tertiary hover:text-cyan-accent hover:border-cyan-accent transition-all">{icon}</a>
);

const FormInput = ({ label, name, ...props }: React.InputHTMLAttributes<HTMLInputElement> & { label: string; name: string }) => (
  <div className="space-y-2"><label htmlFor={name} className="form-label">{label}</label><input id={name} name={name} className="form-control" {...props} /></div>
);

export default Contact;
