import React from 'react';
import { Asset } from '../../components/Asset';
import { SectionHeader } from '../../components/SectionHeader';
import { CTABanner } from '../../components/CTABanner';

const UtilitiesMonitoring: React.FC = () => {
  return (
    <div>
      <section className="section-padding bg-bg-primary">
        <div className="container mx-auto px-6">
          <SectionHeader 
            eyebrow="IOTILITY · UTILITIES MONITORING"
            h2="Real-time visibility over every utility."
            subtext="Water. Gas. Electricity. Know exactly what is being consumed, where, and when — with instant alerts for anomalies, leaks and overconsumption."
          />
          <div className="relative rounded-2xl overflow-hidden border border-border-subtle shadow-xl">
            <Asset 
              src="/SiteGraphics/products/utilities-hero.jpg" 
              description="Utilities monitoring dashboard showing consumption graphs for water, gas, electricity" 
              dimensions="1200x600" 
              className="w-full aspect-[2/1] md:aspect-[2.4/1]"
            />
          </div>
        </div>
      </section>

      <section className="section-padding bg-bg-secondary">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
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

      <CTABanner />
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
