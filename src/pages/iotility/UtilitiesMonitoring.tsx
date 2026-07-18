import React from 'react';
import { Asset } from '../../components/Asset';
import { SectionHeader } from '../../components/SectionHeader';
import { CTABanner } from '../../components/CTABanner';
import { Bell, Gauge, BarChart3, PlugZap, Check } from 'lucide-react';

const UtilitiesMonitoring: React.FC = () => {
  return (
    <div>
      <section className="section-padding bg-bg-primary">
        <div className="container mx-auto px-5 sm:px-8 lg:px-[60px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column — Text */}
            <div>
              <SectionHeader
                eyebrow="IOTILITY · UTILITIES MONITORING"
                h2="Real-time visibility over every utility."
                subtext="Water. Gas. Electricity. Know exactly what is being consumed, where, and when — with instant alerts for anomalies, leaks and overconsumption."
              />
            </div>

            {/* Right Column — Image */}
           <div className="relative rounded-2xl overflow-hidden border border-border-subtle">
                                     <Asset
                                                     src="/SiteGraphics/hero/utility-720p.mp4"
                                                     description=""
                                                     dimensions="1920x1080"
                                                     className="w-full h-full object-cover !rounded-2xl !border-none opacity-100"
                                                   />
                                   </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-bg-primary">
        <div className="container mx-auto px-5 sm:px-8 lg:px-[60px]">
          <SectionHeader eyebrow="OPERATIONAL CONTROL" h2="From meter readings to action." subtext="Connect existing smart meters or deploy a right-sized sensing layer. IoTility normalises every reading and turns it into live operational and sustainability intelligence." />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              [PlugZap, 'Connect every source', 'Bring electricity, water, gas, solar and generator data into one operating view.'],
              [Gauge, 'Monitor in real time', 'Compare sites, buildings, floors, tenants, equipment and tariff periods.'],
              [Bell, 'Detect exceptions', 'Alert teams to leaks, spikes, abnormal baseload and overconsumption.'],
              [BarChart3, 'Improve performance', 'Benchmark intensity, verify savings and prioritise the next intervention.'],
            ].map(([Icon, title, body]: any) => <div key={title} className="p-7 rounded-2xl bg-bg-secondary border border-border-subtle"><Icon className="text-cyan-accent mb-6"/><h3 className="text-lg mb-3">{title}</h3><p className="text-sm text-text-secondary leading-relaxed">{body}</p></div>)}
          </div>
        </div>
      </section>

      <section className="section-padding bg-bg-secondary">
        <div className="container mx-auto px-5 sm:px-8 lg:px-[60px] grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <SectionHeader 
              h2="Plugs straight into Sustainex."
              subtext="Every reading Utilities Monitoring captures feeds automatically into Sustainex when both are active. One sensor network, two layers of value."
            />
          </div>
          <div className="grid grid-cols-3 gap-3 md:gap-4 lg:gap-6 mt-8 lg:mt-0">
            <UtilityMiniCard title="Water" icon="W" />
            <UtilityMiniCard title="Gas" icon="G" />
            <UtilityMiniCard title="Power" icon="E" />
          </div>
        </div>
      </section>

      <section className="section-padding bg-bg-primary">
        <div className="container mx-auto px-5 sm:px-8 lg:px-[60px] grid lg:grid-cols-2 gap-16">
          <div><SectionHeader eyebrow="USE CASES" h2="One utility layer across the estate." subtext="Suitable for multi-site portfolios and complex facilities where consumption, cost and accountability are currently fragmented." /></div>
          <div className="grid sm:grid-cols-2 gap-4">{['Commercial buildings','Hospitals and campuses','Factories and warehouses','Retail portfolios','Telecom sites','Residential communities','Data centres','Public infrastructure'].map(x => <div key={x} className="p-5 bg-bg-secondary border border-border-subtle rounded-xl flex gap-3 text-sm"><Check size={18} className="text-cyan-accent shrink-0"/>{x}</div>)}</div>
        </div>
      </section>

      <CTABanner h2="Make utility performance visible, accountable and actionable." />
    </div>
  );
};

const UtilityMiniCard = ({ title, icon }: { title: string; icon: string }) => (
  <div className="bg-bg-primary p-6 md:p-8 rounded-2xl border border-border-subtle text-center flex flex-col items-center justify-center h-full">
    <div className="text-cyan-accent font-bold text-2xl md:text-3xl mb-3 md:mb-4">{icon}</div>
    <div className="text-[10px] md:text-xs text-text-tertiary font-semibold uppercase tracking-wider">{title}</div>
  </div>
);

export default UtilitiesMonitoring;


