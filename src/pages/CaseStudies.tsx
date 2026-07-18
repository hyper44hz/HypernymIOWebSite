import React from 'react';
import { Asset } from '../components/Asset';
import { SectionHeader } from '../components/SectionHeader';
import { CTABanner } from '../components/CTABanner';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const CaseStudies: React.FC = () => {
  return (
    <div className="pt-20">
      <section className="section-padding bg-bg-primary">
        <div className="container mx-auto px-5 sm:px-8 lg:px-[60px]">
          
          <SectionHeader 
            h2="Real deployments. Real results."
            subtext="Selected operational deployments and architecture engagements across fleet, asset and enterprise data environments."
          />
          
          <div className="space-y-24 md:space-y-32">

            <CaseStudyFull 
              logo="/SiteGraphics/logos/clients/mtn-case.svg"
              image="/SiteGraphics/about/fleet.jpg"
              title="100+ SME Fleets Deployed Across Nigeria"
              body="Through our partnership with MTN Nigeria, we deployed Fleet Intelligence across over 100 SME customers — bringing real-time vehicle tracking, driver safety and fuel monitoring."
              results={[
                "99% uptime for fleet managers",
                "30% reduction in fuel theft",
                "Safety scoring for 500+ drivers"
              ]}
              tags={["Fleet Intelligence", "Nigeria", "Telecom Partnership"]}
            />

            <CaseStudyFull 
              logo="/SiteGraphics/logos/clients/vodafone-case.svg"
              image="/SiteGraphics/about/vodafone.jpg"
              title="Enterprise IoT Across Qatar's Leading Organisations"
              body="Deployed IoTility across Qatar Energy, Bateel, First Group and Sunoono through Vodafone Qatar."
              results={[
                "Unified multi-org dashboard",
                "Real-time asset visibility",
                "Cross-country fleet management"
              ]}
              tags={["Fleet Intelligence", "Asset Management", "Qatar"]}
            />

            <CaseStudyFull 
              logo="/SiteGraphics/logos/clients/nitb.svg"
              image="/SiteGraphics/about/nitb.jpg"
              title="Sovereign AI Architecture for the Public Sector"
              body="Designed a national-scale agentic AI and datalake architecture for NITB, centred on sovereign deployment and government-grade controls."
              results={[
                "Sovereign data architecture",
                "Agentic AI operating model",
                "Government-grade control design"
              ]}
              tags={["Dataverse", "Agentic AI", "Government"]}
            />

          </div>

          <div className="mt-24 md:mt-32 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <CaseStudySmall title="Doha Cables: Outdoor Asset Management" body="Cable drum tracking across industrial sites." />
            <CaseStudySmall title="Hospital: Indoor Medical Tracking" body="Real-time location of medical devices." />
            <CaseStudySmall title="University: Campus Asset Intelligence" body="Device tracking across campus environment." />
          </div>

        </div>
      </section>

      <CTABanner 
        h2="Have a project in mind?" 
        subtext="Let's build something world-class together." 
        btnText="Let's Talk" 
      />
    </div>
  );
};

const CaseStudyFull = ({ logo, title, body, results, tags, image }: any) => (
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
    
    <div>
      <Asset 
        src={logo} 
        description="Client Logo" 
        dimensions="80x32" 
        className="!w-20 !h-8 !border-none !bg-transparent !p-0 mb-8" 
      />
      
      <h3 className="mb-6">{title}</h3>
      
      <p className="text-text-secondary text-[16px] md:text-lg lg:text-[18px] leading-relaxed mb-10">
        {body}
      </p>

      <div className="mb-10">
        <h4 className="text-sm font-bold uppercase tracking-widest text-text-tertiary mb-6">
          Key Results
        </h4>

        <div className="space-y-4">
          {results.map((r: string) => (
            <div key={r} className="flex gap-4">
              <div className="w-1.5 h-1.5 rounded-full bg-cyan-accent mt-2 flex-shrink-0" />
              <p className="text-text-primary font-medium text-[15px] md:text-base">
                {r}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {tags.map((t: string) => (
          <span 
            key={t} 
            className="px-3 py-1 bg-bg-secondary text-[10px] font-bold text-text-tertiary border border-border-default rounded-full uppercase"
          >
            {t}
          </span>
        ))}
      </div>
    </div>

    {/* ✅ DIFFERENT IMAGE PER SECTION */}
    <div className="bg-bg-secondary border border-border-subtle rounded-3xl h-[300px] md:h-[400px] flex items-center justify-center p-6 mt-8 lg:mt-0">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-contain rounded-xl"
      />
    </div>

  </div>
);

const CaseStudySmall = ({ title, body }: any) => (
  <div className="bg-bg-secondary p-8 md:p-10 rounded-2xl border border-border-subtle hover:border-cyan-accent transition-all flex flex-col h-full">
    <h4 className="text-xl font-bold mb-4">{title}</h4>
    <p className="text-text-secondary text-sm leading-relaxed mb-8 flex-grow">
      {body}
    </p>
    <Link to="/contact" className="mt-auto text-cyan-accent text-xs font-semibold flex items-center gap-2 group">
      Discuss a similar project <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
    </Link>
  </div>
);

export default CaseStudies;

