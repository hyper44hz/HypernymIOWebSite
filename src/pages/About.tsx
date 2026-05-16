import React from 'react';
import { Asset } from '../components/Asset';
import { SectionHeader } from '../components/SectionHeader';
import { CTABanner } from '../components/CTABanner';

const About: React.FC = () => {
  return (
    <div>
      <section className="section-padding bg-bg-primary">
        <div className="container mx-auto px-6">
          <SectionHeader 
            eyebrow="ABOUT HYPERNYM"
            h2="We build the infrastructure that runs real operations."
            subtext="Founded in the UK, deployed across 11 countries. Eight years of building IoT and AI systems for some of the most demanding operational environments."
          />
          <Asset src="/SiteGraphics/about/team-hero.jpg" description="Team or office photo, professional" dimensions="1200x500" className="w-full aspect-[12/5] mb-12 md:mb-24" />
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 py-10 md:py-16 border-y border-border-subtle">
             <AboutStat value="15,000+" label="Devices" />
             <AboutStat value="8 Years" label="Operation" />
             <AboutStat value="99%" label="Retention" />
             <AboutStat value="11" label="Countries" />
          </div>
        </div>
      </section>

      <section className="section-padding bg-bg-secondary">
        <div className="container mx-auto px-6">
          <SectionHeader h2="Why we exist." center />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20">
             <div className="p-8 md:p-12 bg-bg-primary rounded-3xl border border-border-subtle">
               <h4 className="text-xl md:text-2xl font-bold mb-6 text-cyan-accent">Vision</h4>
               <p className="text-text-secondary text-[16px] md:text-lg leading-relaxed">"A world where every physical operation — every fleet, every facility, every asset — runs with the precision and intelligence of a software system."</p>
             </div>
             <div className="p-8 md:p-12 bg-bg-primary rounded-3xl border border-border-subtle">
               <h4 className="text-xl md:text-2xl font-bold mb-6 text-purple-accent">Mission</h4>
               <p className="text-text-secondary text-[16px] md:text-lg leading-relaxed">"To build the IoT and AI infrastructure that makes that possible, starting with the markets that global platforms overlook."</p>
             </div>
          </div>
        </div>
      </section>
      
      {/* Certifications & Partnerships */}
      <section className="py-24 bg-bg-primary border-t border-border-subtle">
        <div className="container mx-auto px-6">
          <SectionHeader h2="Certifications & Partnerships" center />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            <CredentialItem 
              logo="/SiteGraphics/about/iso-badge.svg"
              title="ISO 27001:2022"
              desc="Information security certified"
            />
            <CredentialItem 
              logo="/SiteGraphics/logos/certifications/ccs-supplier.png"
              title="Crown Commercial Service Supplier"
              desc="UK public sector approved supplier"
            />
            <CredentialItem 
              logo="/SiteGraphics/logos/certifications/microsoft-partner-data-ai.png"
              title="Microsoft Partner — Data & AI"
              desc="Azure and AI solutions partner"
            />
            <CredentialItem 
              logo="/SiteGraphics/icons/globe-icon.svg"
              title="Deployed in 11 Countries"
              desc="Global operational footprint"
            />
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
};

const CredentialItem = ({ logo, title, desc }: any) => (
  <div className="flex flex-col items-center text-center">
    <div className="h-16 flex items-center justify-center mb-6">
      <Asset src={logo} description={title} dimensions="120x40" className="!max-h-full !w-auto !bg-transparent !border-none !p-0 !min-h-0" />
    </div>
    <h4 className="text-text-primary text-sm font-bold uppercase tracking-wider mb-2">{title}</h4>
    <p className="text-[#A1A1AA] text-xs font-medium">{desc}</p>
  </div>
);

const AboutStat = ({ value, label }: any) => (
  <div className="text-center">
    <div className="text-2xl md:text-3xl font-bold text-text-primary mb-1">{value}</div>
    <div className="text-[10px] md:text-xs text-text-tertiary font-semibold uppercase tracking-widest">{label}</div>
  </div>
);

export default About;
