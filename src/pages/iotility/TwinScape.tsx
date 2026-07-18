import React from 'react';
import { Asset } from '../../components/Asset';
import { SectionHeader } from '../../components/SectionHeader';
import { CTABanner } from '../../components/CTABanner';

const TwinScape: React.FC = () => {
  return (
    <div>
      <section className="section-padding bg-bg-primary">
        <div className="container mx-auto px-5 sm:px-8 lg:px-[60px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column — Text */}
            <div>
              <SectionHeader
                eyebrow="IOTILITY · TWINSCAPE"
                h2="Your building. Fully digital."
                subtext="TwinScape creates a complete digital twin of your facility — every floor, every room, every asset. See your building the way your BMS should have always shown it."
              />
            </div>

            {/* Right Column — Image */}
            <div className="relative rounded-2xl overflow-hidden border border-border-subtle">
                          <Asset
                                          src="/SiteGraphics/hero/twinscape-720p.mp4"
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 text-left">
            <TwinUseCase icon="/SiteGraphics/icons/usecase-hospital.svg" title="Hospitals" body="Track every medical device, wheelchair, bed and critical equipment across every ward. Instant location lookup." />
            <TwinUseCase icon="/SiteGraphics/icons/usecase-bank.svg" title="Banks & Corporate" body="Large multi-floor facilities with hundreds of assets. Give facilities managers complete visibility without leaving their desk." />
            <TwinUseCase icon="/SiteGraphics/icons/usecase-building.svg" title="Smart Buildings" body="Combine asset tracking with environmental monitoring — temperature, humidity, occupancy, energy load." />
          </div>
        </div>
      </section>
<section className="section-padding bg-bg-secondary">
        <div className="container mx-auto px-5 sm:px-8 lg:px-[60px] grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="mt-8 lg:mt-0">
             <Asset 
               src="/SiteGraphics/products/twinscape-explainer.jpeg" 
               description="Split view: physical building photo left, digital twin model right" 
               dimensions="800x450" 
               className="w-full aspect-[8/4.5] rounded-2xl"
             />
           </div>
           <div>
             <SectionHeader 
               h2="More than a floor plan."
               subtext="A digital twin is a live, interactive model of your physical space. Every sensor, every asset, every environmental reading — mapped to the exact location in your building in real time."
             />
           </div>
           
        </div>
      </section>
      <CTABanner />
    </div>
  );
};

const TwinUseCase = ({ icon, title, body }: { icon: string; title: string; body: string }) => (
  <div className="bg-bg-secondary p-8 md:p-10 rounded-2xl border border-border-subtle flex flex-col h-full">
    <Asset src={icon} description={title} dimensions="32x32" className="!w-8 !h-8 !bg-transparent !border-none !p-0 mb-8" />
    <h4 className="text-xl font-bold mb-4">{title}</h4>
    <p className="text-text-secondary text-[14px] md:text-sm leading-relaxed flex-grow">{body}</p>
  </div>
);

export default TwinScape;


