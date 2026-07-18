import React from 'react';
import { Asset } from '../../components/Asset';
import { SectionHeader } from '../../components/SectionHeader';
import { CTABanner } from '../../components/CTABanner';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const IoTilityHub: React.FC = () => {
  const products = [
    { title: "Fleet Intelligence", to: "/iotility/fleet-intelligence", desc: "Multi-industry fleet management with AI cameras and sensors" },
    { title: "Asset Management", to: "/iotility/asset-management", desc: "Indoor and outdoor asset tracking, linked to fleet" },
    { title: "TwinScape", to: "/iotility/twinscape", desc: "Digital twin for buildings, hospitals and large campuses" },
    { title: "Sustainex", to: "/iotility/sustainex", desc: "ESG and sustainability intelligence layer" },
    { title: "Utilities Monitoring", to: "/iotility/utilities-monitoring", desc: "Real-time water, gas and electricity consumption" }
  ];

  return (
    <div>
      {/* Hero */}
      <section className="section-padding bg-bg-primary">
        <div className="container mx-auto px-[60px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column â€” Text */}
            <div>
              <SectionHeader
                eyebrow="IOTILITY PLATFORM"
                h2="One platform. Every operation."
                subtext="Fleet intelligence, asset tracking, digital twin and sustainability â€” all under one login. Start with one product. Add more as you grow."
              />
              <div className="flex gap-4">
                <Link to="/contact" className="btn-primary w-full sm:w-auto">Get a Demo</Link>
              </div>
            </div>

            {/* Right Column â€” Image */}
            <div className="relative rounded-2xl overflow-hidden border border-border-subtle">
                                      <Asset
                                                      src="/SiteGraphics/hero/all-platform.mp4"
                                                      description=""
                                                      dimensions="1920x1080"
                                                      className="w-full h-full object-cover !rounded-2xl !border-none opacity-100"
                                                    />
                                    </div>
          </div>
        </div>
      </section>

      {/* SSO Bar */}
      <div className="bg-bg-secondary border-y border-border-subtle py-8 md:py-12">
        <div className="container mx-auto px-[60px] flex flex-col md:flex-row justify-between items-center gap-6">
          <h4 className="text-[20px] md:text-2xl font-bold text-center md:text-left">One login. One platform.</h4>
          <p className="text-text-secondary text-sm text-center md:text-right max-w-xl">
            Every IoTility product shares a single sign-on. Your team sees one unified dashboard â€” not five different systems.
          </p>
        </div>
      </div>

      {/* Products Grid */}
      <section className="section-padding bg-bg-primary">
        <div className="container mx-auto px-[60px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {products.map(p => (
              <Link key={p.title} to={p.to} className="group bg-bg-secondary p-8 md:p-10 rounded-2xl border border-border-subtle hover:border-cyan-accent transition-all flex flex-col h-full">
                <h4 className="text-xl font-bold mb-4 group-hover:text-cyan-accent transition-colors">{p.title}</h4>
                <p className="text-text-secondary text-[14px] md:text-sm mb-10 leading-relaxed flex-grow">{p.desc}</p>
                <div className="flex items-center gap-2 text-cyan-accent text-sm font-semibold mt-auto">
                  View product <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Connection Section */}
      <section className="section-padding bg-bg-secondary">
        <div className="container mx-auto px-[60px] grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div>
            <SectionHeader 
              h2="Products that talk to each other."
              subtext="Fleet Intelligence knows which vehicle your outdoor assets are on. TwinScape shows where your indoor assets are in the building. Sustainex reads the sensor data your other products already collect."
            />
          </div>
          <div className="mt-8 md:mt-0">
            <Asset 
              src="/SiteGraphics/products/dataverse-platform-preview.png" 
              description="Diagram showing how IoTility modules connect and share data" 
              dimensions="800x500" 
              className="w-full aspect-[8/5] rounded-2xl"
            />
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
};

export default IoTilityHub;


