import React, { useState } from 'react';
import { Mail, MapPin, Phone, Linkedin, Globe } from 'lucide-react';
import { Asset } from '../components/Asset';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    setTimeout(() => {
      setFormState('success');
    }, 1500);
  };

  return (
    <div className="section-padding bg-bg-primary">
      <div className="container mx-auto px-[60px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <h1 className="mb-8">Let's talk.</h1>
            <p className="text-text-secondary text-[16px] md:text-lg lg:text-[18px] leading-relaxed mb-12">
              Whether you're evaluating IoTility for your fleet, exploring Dataverse for an enterprise AI project, or just want to understand what's possible â€” we're here.
            </p>

            <div className="space-y-8 mb-12">
               <ContactItem icon={<MapPin size={24} />} title="London, UK" desc="Global House, Ashley Avenue, Epsom, KT18 5AD" />
               <ContactItem icon={<Phone size={24} />} title="+44 1372 232 115" />
               <ContactItem icon={<Mail size={24} />} title="info@hypernymbiz.com" />
            </div>

            <div className="flex gap-4 mb-12">
               <LinkIcon icon={<Linkedin size={20} />} />
               <LinkIcon icon={<span className="text-xl font-bold">ð•</span>} />
            </div>

            <div className="p-6 md:p-8 bg-bg-secondary rounded-xl border-l-4 border-cyan-accent">
               <p className="text-text-secondary text-sm leading-relaxed">"For enterprise and government enquiries, our team typically responds within 4 business hours."</p>
            </div>
          </div>

          <div className="bg-bg-secondary p-8 md:p-12 lg:p-16 rounded-3xl border border-border-subtle shadow-2xl relative overflow-hidden mt-8 lg:mt-0">
            {formState === 'success' ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-20 animate-fadeUp">
                <div className="w-16 h-16 bg-cyan-accent text-bg-primary rounded-full flex items-center justify-center mb-8">
                   <Globe size={32} />
                </div>
                <h3 className="mb-4 text-2xl md:text-3xl">Message Sent</h3>
                <p className="text-text-secondary">Our team will get back to you shortly.</p>
                <button onClick={() => setFormState('idle')} className="mt-8 text-cyan-accent font-semibold hover:underline">Send another message</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <FormInput label="Full Name*" placeholder="John Doe" required />
                  <FormInput label="Company Name*" placeholder="Pied Piper" required />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                   <FormInput label="Email*" type="email" placeholder="john@example.com" required />
                   <FormInput label="Phone" placeholder="+1..." />
                </div>
                <div className="space-y-2">
                   <label className="text-xs font-bold uppercase tracking-widest text-text-tertiary">Interested In</label>
                   <select className="w-full bg-bg-primary border border-border-default rounded-lg px-4 py-3.5 text-text-primary focus:border-cyan-accent outline-none appearance-none cursor-pointer">
                      <option>Fleet Intelligence</option>
                      <option>Asset Management</option>
                      <option>TwinScape</option>
                      <option>Sustainex</option>
                      <option>Utilities Monitoring</option>
                      <option>Dataverse - Agentic AI</option>
                      <option>General Enquiry</option>
                   </select>
                </div>
                <div className="space-y-2">
                   <label className="text-xs font-bold uppercase tracking-widest text-text-tertiary">Message*</label>
                   <textarea required rows={5} placeholder="Tell us about your project..." className="w-full bg-bg-primary border border-border-default rounded-lg px-4 py-3.5 text-text-primary focus:border-cyan-accent outline-none"></textarea>
                </div>
                <button 
                  type="submit" 
                  disabled={formState === 'submitting'}
                  className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed py-6 text-bg-primary h-[64px] text-[16px] font-bold"
                >
                  {formState === 'submitting' ? 'Sending...' : 'Send Message'}
                </button>
                <div className="pt-8 border-t border-border-subtle flex flex-col sm:flex-row items-center justify-between gap-6">
                   <div className="flex items-center gap-4">
                     <Asset src="/SiteGraphics/about/iso-badge.svg" description="ISO Badge" dimensions="40x40" className="!w-10 !h-10 !bg-transparent !border-none !p-0" />
                     <Asset src="/SiteGraphics/logos/certifications/ccs-supplier.png" description="CCS Badge" dimensions="60x24" className="!w-[60px] !h-[24px] !bg-transparent !border-none !p-0 !min-h-0" />
                   </div>
                   <p className="text-[10px] text-text-tertiary uppercase tracking-widest text-center sm:text-right">Trusted by governments & enterprises globally.</p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const ContactItem = ({ icon, title, desc }: any) => (
  <div className="flex gap-6 items-start">
    <div className="text-cyan-accent mt-1">{icon}</div>
    <div>
      <h4 className="text-lg font-bold mb-1">{title}</h4>
      {desc && <p className="text-text-secondary text-sm">{desc}</p>}
    </div>
  </div>
);

const LinkIcon = ({ icon }: any) => (
  <button className="w-10 h-10 rounded-full border border-border-default flex items-center justify-center text-text-tertiary hover:text-cyan-accent hover:border-cyan-accent transition-all">
    {icon}
  </button>
);

const FormInput = ({ label, ...props }: any) => (
  <div className="space-y-2">
    <label className="text-xs font-bold uppercase tracking-widest text-text-tertiary">{label}</label>
    <input 
      className="w-full bg-bg-primary border border-border-default rounded-lg px-4 py-3 text-text-primary focus:border-cyan-accent outline-none transition-colors" 
      {...props} 
    />
  </div>
);

export default Contact;


