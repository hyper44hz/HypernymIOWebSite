import React from 'react';
import { Asset } from '../../components/Asset';
import { SectionHeader } from '../../components/SectionHeader';
import { CTABanner } from '../../components/CTABanner';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const FleetIntelligence: React.FC = () => {
  return (
    <div>
      {/* Hero */}
      <section className="section-padding bg-bg-primary">
        <div className="container mx-auto px-6">
          <SectionHeader 
            eyebrow="IOTILITY · FLEET INTELLIGENCE"
            h2="Fleet management built for your industry."
            subtext="Not generic GPS tracking. Fleet Intelligence wraps around your specific operation — with workflows, alerts, driver tools and reporting built for how your industry actually works."
          />
          <div className="flex flex-col sm:flex-row gap-4 mb-12 md:mb-20 font-sans">
             <Link to="/contact" className="btn-primary w-full sm:w-auto">Get a Demo</Link>
          </div>
          <div className="relative rounded-2xl overflow-hidden border border-border-subtle">
            <Asset 
              src="/SiteGraphics/products/fleet-hero.jpg" 
              description="Fleet management dashboard showing vehicle map, driver status, alerts" 
              dimensions="1200x600" 
              className="w-full aspect-[2/1] md:aspect-[2.4/1] lg:aspect-[2.8/1]"
            />
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <div className="bg-bg-secondary border-y border-border-subtle py-10 md:py-12">
        <div className="container mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
          <StatsBarItem top="100+ SME Fleets" bottom="via MTN Nigeria" />
          <StatsBarItem top="11 Countries" bottom="Deployed" />
          <StatsBarItem top="Multi-industry" bottom="Workflows" />
          <StatsBarItem top="End-to-end" bottom="Hardware included" />
        </div>
      </div>

      {/* Industries */}
      <section className="section-padding bg-bg-primary">
        <div className="container mx-auto px-6">
          <SectionHeader 
            h2="Built for your industry."
            subtext="One platform, multiple operational models. Each vertical comes with pre-built workflows, alert configurations and reporting templates."
            center
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <IndustryCard 
              icon="/SiteGraphics/icons/vertical-schools.svg"
              title="Schools & Universities"
              body="Student entry and exit tracking linked to bus routes. Driver attendance cards. Parent notifications. Deployed for universities in the Middle East."
            />
            <IndustryCard 
              icon="/SiteGraphics/icons/vertical-rental.svg"
              title="Rental & Contractual"
              body="Built for the Middle East rental model — multi-driver vehicles, contractual billing cycles, and insurance-grade trip reporting."
            />
            <IndustryCard 
              icon="/SiteGraphics/icons/vertical-coldchain.svg"
              title="Cold Chain & Logistics"
              body="End-to-end cold chain monitoring. Temperature sensors, door open alerts, route deviation. Full chain of custody reporting."
            />
            <IndustryCard 
              icon="/SiteGraphics/icons/vertical-oil.svg"
              title="Oil & Fuel Transport"
              body="Fuel sensor integration, tanker load monitoring, seal breach alerts, and route compliance. Built for high-value operations."
            />
            <IndustryCard 
              icon="/SiteGraphics/icons/vertical-waste.svg"
              title="Waste Management"
              body="Route optimisation, bin fill sensors, collection confirmation and compliance reporting for private operators."
            />
            <IndustryCard 
              icon="/SiteGraphics/icons/vertical-transit.svg"
              title="Public Transit"
              body="Passenger count, schedule adherence, driver behaviour scoring and real-time fleet visibility."
            />
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="section-padding bg-bg-secondary">
        <div className="container mx-auto px-6">
          <SectionHeader 
            h2="Everything your fleet operation needs."
            center
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 lg:gap-x-20 gap-y-6 max-w-4xl mx-auto">
            <CapabilityItem>Real-time GPS & geofencing</CapabilityItem>
            <CapabilityItem>AI dashcams (front, dual, 360°) with NVR/DVR</CapabilityItem>
            <CapabilityItem>Driver behaviour scoring and alerts</CapabilityItem>
            <CapabilityItem>Fuel monitoring and theft detection</CapabilityItem>
            <CapabilityItem>Temperature and cold chain sensors</CapabilityItem>
            <CapabilityItem>Multi-driver support and driver cards</CapabilityItem>
            <CapabilityItem>End-user driver mobile app (iOS & Android)</CapabilityItem>
            <CapabilityItem>Maintenance scheduling and alerts</CapabilityItem>
          </div>
        </div>
      </section>

      {/* Hardware */}
      <section className="section-padding bg-bg-primary">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
           <div>
             <SectionHeader 
               h2="Hardware included. Vendor relationships handled."
               subtext="We source, configure and install the right hardware for your fleet — Teltonika trackers, Howen AI dashcams, JimiIoT sensors and more."
             />
           </div>
           <div className="mt-8 md:mt-0">
             <Asset 
               src="/SiteGraphics/hardware/fleet-hardware-lineup.jpg" 
               description="Product lineup of fleet hardware: GPS tracker, dashcam, fuel sensor" 
               dimensions="800x400" 
               className="w-full aspect-[2/1] rounded-2xl"
             />
           </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
};

const StatsBarItem = ({ top, bottom }: { top: string; bottom: string }) => (
  <div className="text-center md:text-left border-l border-border-subtle pl-6">
    <p className="text-text-primary font-bold text-lg mb-1">{top}</p>
    <p className="text-text-tertiary text-xs uppercase tracking-wider font-semibold">{bottom}</p>
  </div>
);

const IndustryCard = ({ icon, title, body }: { icon: string; title: string; body: string }) => (
  <div className="bg-bg-secondary p-10 rounded-2xl border border-border-subtle hover:border-cyan-accent transition-all">
    <Asset src={icon} description={title} dimensions="32x32" className="!w-8 !h-8 !bg-transparent !border-none !p-0 mb-8" />
    <h4 className="text-xl font-bold mb-4">{title}</h4>
    <p className="text-text-secondary text-sm leading-relaxed">{body}</p>
  </div>
);

const CapabilityItem = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-center gap-4 text-text-secondary group">
    <CheckCircle2 size={20} className="text-cyan-accent" />
    <span className="group-hover:text-text-primary transition-colors">{children}</span>
  </div>
);

export default FleetIntelligence;
