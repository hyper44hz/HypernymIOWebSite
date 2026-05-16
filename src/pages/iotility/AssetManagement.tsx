import React from 'react';
import { Asset } from '../../components/Asset';
import { SectionHeader } from '../../components/SectionHeader';
import { CTABanner } from '../../components/CTABanner';

const AssetManagement: React.FC = () => {
  return (
    <div>
      <section className="section-padding bg-bg-primary">
        <div className="container mx-auto px-6">
          <SectionHeader 
            eyebrow="IOTILITY · ASSET MANAGEMENT"
            h2="Know where every asset is. Always."
            subtext="Outdoor and indoor asset tracking that connects directly to your fleet operations. From industrial equipment in the field to medical devices in a hospital ward."
          />
          <div className="relative rounded-2xl overflow-hidden border border-border-subtle shadow-xl">
            <Asset 
              src="/SiteGraphics/products/asset-hero.jpg" 
              description="Asset management dashboard showing asset map and inventory list" 
              dimensions="1200x600" 
              className="w-full aspect-[2/1] md:aspect-[2.4/1]"
            />
          </div>
        </div>
      </section>

      <section className="section-padding bg-bg-secondary">
        <div className="container mx-auto px-6">
          <SectionHeader h2="Outdoor and indoor. One platform." center />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            <AssetModeCard 
              title="Field & Outdoor Assets"
              body="Track vehicles, trailers, containers, generators, construction equipment and any asset that moves between sites. Attach to Fleet Intelligence and know which asset is on which vehicle at all times."
              features={["GPS tracking", "Geofence alerts", "Maintenance scheduling"]}
              visual="/SiteGraphics/products/outdoor-asset-dashboard.jpg"
            />
            <AssetModeCard 
              title="Indoor & Facility Assets"
              body="BLE and RFID-based indoor tracking for hospitals, universities and large facilities. Know exactly which ward a medical device is in, which floor a laptop is on. No GPS required indoors."
              features={["BLE/RFID/UWB options", "Floor plan integration", "Zone-based alerts"]}
              visual="/SiteGraphics/products/indoor-asset-dashboard.jpg"
            />
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
};

const AssetModeCard = ({ title, body, features, visual }: { title: string; body: string; features: string[]; visual: string }) => (
  <div className="bg-bg-primary p-8 md:p-12 rounded-3xl border border-border-subtle hover:border-cyan-accent transition-all flex flex-col h-full">
    <h3 className="mb-6 text-xl md:text-2xl font-bold">{title}</h3>
    <p className="text-text-secondary text-[14px] md:text-sm mb-10 leading-relaxed flex-grow">{body}</p>
    <ul className="mb-12 space-y-4">
      {features.map(f => (
        <li key={f} className="flex items-center gap-3 text-xs md:text-sm text-text-secondary">
          <span className="w-1.5 h-1.5 bg-cyan-accent rounded-full flex-shrink-0"></span>
          {f}
        </li>
      ))}
    </ul>
    <Asset src={visual} description={title} dimensions="480x320" className="w-full aspect-[3/2] rounded-xl" />
  </div>
);

export default AssetManagement;
