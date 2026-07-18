import React from 'react';
import { Asset } from '../../components/Asset';
import { SectionHeader } from '../../components/SectionHeader';
import { CTABanner } from '../../components/CTABanner';

const Sustainex: React.FC = () => {
  return (
    <div>
      <section className="section-padding bg-bg-primary">
        <div className="container mx-auto px-[60px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column â€” Text */}
            <div>
              <SectionHeader
                eyebrow="IOTILITY Â· SUSTAINEX"
                h2="ESG intelligence. Built on data you already have."
                subtext="Sustainex turns your operational sensor data into audit-ready ESG and sustainability reporting. Works as a layer on any IoTility product â€” or standalone."
              />
            </div>

            {/* Right Column â€” Image */}
            <div className="relative rounded-2xl overflow-hidden border border-border-subtle">
                          <Asset
                                          src="/SiteGraphics/hero/sustain-1.mp4"
                                          description=""
                                          dimensions="1920x1080"
                                          className="w-full h-full object-cover !rounded-2xl !border-none opacity-100"
                                        />
                        </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-bg-secondary">
        <div className="container mx-auto px-[60px]">
          <SectionHeader h2="Three ways to use Sustainex." center />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <DeployModeCard 
              title="On top of IoTility"
              body="Already using Fleet Intelligence or TwinScape? Sustainex reads your existing sensor data automatically. No additional sensors required."
            />
            <DeployModeCard 
              title="With your existing systems"
              body="Already have a BMS or third-party sensors? Sustainex ingests data from any source via API. Get the same ESG dashboards without replacing hardware."
            />
            <DeployModeCard 
              title="From scratch"
              body="No existing sensor infrastructure? We deploy the right hardware and Sustainex turns that data into your first ESG report within weeks."
            />
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
};

const DeployModeCard = ({ title, body }: { title: string; body: string }) => (
  <div className="bg-bg-primary p-8 md:p-12 rounded-3xl border border-border-subtle hover:border-cyan-accent transition-all flex flex-col h-full">
    <h4 className="text-xl font-bold mb-6">{title}</h4>
    <p className="text-text-secondary text-[14px] md:text-sm leading-relaxed">{body}</p>
  </div>
);

export default Sustainex;


