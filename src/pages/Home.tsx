import React from 'react';
import { motion } from 'motion/react';
import { Asset } from '../components/Asset';
import { SectionHeader } from '../components/SectionHeader';
import { CTABanner } from '../components/CTABanner';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="overflow-x-hidden">
      {/* Section 1 — Hero */}
      <section className="relative min-h-[760px] lg:min-h-[820px] flex items-center justify-center bg-[#16091f] overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* <Asset 
            src="/SiteGraphics/hero/hero-bg-video.mp4" 
            description="Cinematic looping video: aerial IoT city view, fleet vehicles moving, data flowing through nodes" 
            dimensions="1920x1080" 
            className="w-full h-full object-cover !rounded-none !border-none opacity-40"
          /> */}
          <div className="absolute inset-0 bg-gradient-to-b from-bg-primary/40 via-bg-primary/70 to-bg-primary" />
        </div>

        <div className="container mx-auto px-5 sm:px-8 lg:px-[60px] relative z-10 py-20 lg:py-0 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column — Text */}
          <div className="pt-12 lg:pt-0 lg:-mt-[80px]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-6 md:mb-8"
            >
              <span className="inline-block px-4 py-1.5 rounded-full border border-border-default bg-bg-tertiary text-text-secondary text-[10px] md:text-[12px] font-medium tracking-wider uppercase">
                ISO 27001:2022 Certified &bull; Deployed in 11 Countries
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-text-primary mb-2"
            >
              From Sensor to Decision.
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="gradient-text mb-8 text-[28px] md:text-[36px] lg:text-[48px] font-semibold leading-tight tracking-tight"
            >
              The Intelligence Layer for Physical Operations
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-text-secondary text-[16px] md:text-lg lg:text-[18px] max-w-[520px] mb-10 leading-relaxed"
            >
              One connected platform for fleet, assets, buildings and sustainability—with enterprise AI built in.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row items-start gap-4 mb-40 lg:mb-0"
            >
              <Link to="/contact" className="btn-primary w-full sm:w-[180px]">Get a Demo</Link>
              <Link to="/iotility" className="btn-secondary w-full sm:w-[180px]">Explore IoTility &rarr;</Link>
            </motion.div>
          </div>

          {/* Right Column — Visual */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.5 }}
            className="hidden lg:flex items-center justify-center mb-24"
          >
            <div className="relative w-full max-w-[700px]">
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-accent-primary/30 to-transparent blur-xl" />
              <Asset
                src="/SiteGraphics/hero/hero-bg-video.mp4"
                description="Cinematic looping video: aerial IoT city view, fleet vehicles moving, data flowing through nodes"
                dimensions="1920x1080"
                className="w-full h-full object-cover !rounded-2xl !border-none opacity-100"
              />
            </div>
          </motion.div>
        </div>

        {/* Stats Strip */}
        <div className="absolute bottom-0 left-0 w-full bg-bg-secondary border-t border-border-subtle py-6 md:py-10">
          <div className="container mx-auto px-5 sm:px-8 lg:px-[60px] grid grid-cols-2 md:flex md:flex-row md:justify-around items-center gap-8 md:gap-4">
            <StatItem value="15,000+" label="Devices" />
            <StatItem value="8 Years" label="In operation" />
            <StatItem value="99%" label="Retention" />
            <StatItem value="11" label="Countries" />
            <div className="hidden lg:block">
              <Asset src="/SiteGraphics/about/iso-badge.svg" description="ISO 27001" dimensions="100x24" className="!w-[100px] !h-[35px] !p-0 !bg-transparent !border-none !min-h-0" />
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 — Trusted By */}
      <section className="bg-bg-primary section-padding border-b border-border-subtle overflow-hidden">
        <p className="text-center text-[11px] text-text-tertiary font-bold tracking-[0.12em] uppercase mb-12 px-6">
          TRUSTED BY LEADING ORGANISATIONS
        </p>
        <div className="relative w-full overflow-hidden">
          <div className="flex gap-16 animate-marquee items-center w-max">
            {[
              { src: "/SiteGraphics/logos/clients/vodafone.svg", alt: "Vodafone" },
              { src: "/SiteGraphics/logos/clients/mtn.svg", alt: "MTN" },
              { src: "/SiteGraphics/logos/clients/qatar-energy.svg", alt: "Qatar Energy" },
              { src: "/SiteGraphics/logos/clients/first-group.svg", alt: "First Group Dubai" },
              { src: "/SiteGraphics/logos/clients/bateel.svg", alt: "Bateel Qatar" },
              { src: "/SiteGraphics/logos/clients/sunoono.svg", alt: "Sunoono Qatar" },
              { src: "/SiteGraphics/logos/clients/doha-cables.svg", alt: "Doha Cables" },
              { src: "/SiteGraphics/logos/clients/nitb.svg", alt: "NITB Pakistan" },
              { src: "/SiteGraphics/logos/clients/ehcd.svg", alt: "EHCD" },
              { src: "/SiteGraphics/logos/clients/frani-t.svg", alt: "Farani Taylor" },
            ].concat([
              { src: "/SiteGraphics/logos/clients/vodafone.svg", alt: "Vodafone" },
              { src: "/SiteGraphics/logos/clients/mtn.svg", alt: "MTN" },
              { src: "/SiteGraphics/logos/clients/qatar-energy.svg", alt: "Qatar Energy" },
              { src: "/SiteGraphics/logos/clients/first-group.svg", alt: "First Group Dubai" },
              { src: "/SiteGraphics/logos/clients/bateel.svg", alt: "Bateel Qatar" },
              { src: "/SiteGraphics/logos/clients/sunoono.svg", alt: "Sunoono Qatar" },
              { src: "/SiteGraphics/logos/clients/doha-cables.svg", alt: "Doha Cables" },
              { src: "/SiteGraphics/logos/clients/nitb.svg", alt: "NITB Pakistan" },
              { src: "/SiteGraphics/logos/clients/ehcd.svg", alt: "EHCD" },
              { src: "/SiteGraphics/logos/clients/frani-t.svg", alt: "Farani Taylor" },
            ]).map((logo, i) => (
              <div key={i} className="flex-shrink-0 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300 h-[32px] flex items-center justify-center">
                <img src={logo.src} alt={logo.alt} className="h-full w-auto max-w-[120px] object-contain" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 — Two Pillars */}
      <section className="bg-bg-primary section-padding container mx-auto px-5 sm:px-8 lg:px-[60px]">
        <SectionHeader 
          eyebrow="THE HYPERNYM ECOSYSTEM"
          h2="Two platforms. One ecosystem."
          subtext="IoTility connects your physical world. Dataverse makes it intelligent. Together they create a unified path from field sensors to enterprise decisions."
          center
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <PillarCard 
            title="Operational Intelligence"
            subtitle="IoTility Platform"
            body="Fleet intelligence, asset tracking, and digital twins for buildings and industrial facilities, unified under one login."
            accent="cyan"
            link="/iotility"
            visual="/SiteGraphics/products/iotility-platform-preview.jpg"
          />
          <PillarCard 
            title="Enterprise AI Infrastructure"
            subtitle="Dataverse AI"
            body="Agentic AI frameworks and datalake deployments for governments, telecoms, and high-stakes operational environments."
            accent="purple"
            link="/dataverse"
            visual="/SiteGraphics/products/dataverse-platform-preview.png"
          />
        </div>
      </section>

      {/* Section 4 — IoTility Products */}
      <section className="bg-bg-secondary section-padding">
        <div className="container mx-auto px-5 sm:px-8 lg:px-[60px]">
          <SectionHeader 
            eyebrow="IOTILITY PLATFORM"
            h2="Every operation. One login."
            subtext="Modular by design. Unified by default. Add the products you need — they all speak to each other."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <ProductCard 
              icon="/SiteGraphics/icons/fleet-icon.svg"
              title="Fleet Intelligence"
              body="Not just GPS tracking. Industry-specific workflows for schools, rental fleets, cold chain logistics, oil transport, waste management and public transit."
              verticals="Schools &bull; Rental &bull; Cold Chain &bull; Oil Transport &bull; Waste &bull; Transit"
              to="/iotility/fleet-intelligence"
            />
            <ProductCard 
              icon="/SiteGraphics/icons/asset-icon.svg"
              title="Asset Management"
              body="Outdoor and indoor asset tracking that links directly to your fleet. Know what inventory is on which vehicle in real time."
              to="/iotility/asset-management"
            />
            <ProductCard 
              icon="/SiteGraphics/icons/twinscape-icon.svg"
              title="TwinScape"
              body="Full building digital twin for hospitals, banks and large campuses. Track and manage every asset within a spatial model of your facility."
              to="/iotility/twinscape"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[800px] mx-auto">
            <ProductCard 
              icon="/SiteGraphics/icons/sustainex-icon.svg"
              title="Sustainex"
              body="ESG and sustainability intelligence. Works as a layer on any IoTility product — or standalone via data ingestion from existing systems."
              to="/iotility/sustainex"
            />
            <ProductCard 
              icon="/SiteGraphics/icons/utilities-icon.svg"
              title="Utilities Monitoring"
              body="Real-time consumption tracking across water, gas and electricity. Feeds directly into Sustainex when active."
              to="/iotility/utilities-monitoring"
            />
          </div>
        </div>
      </section>

      {/* Section 5 — Dataverse Feature */}
      <section className="bg-bg-primary section-padding">
        <div className="container mx-auto px-5 sm:px-8 lg:px-[60px] grid md:grid-cols-2 gap-16 md:gap-20 items-center">
          <div>
            <SectionHeader 
              eyebrow="DATAVERSE"
              h2="Enterprise data and AI, engineered for production."
              subtext="Dataverse brings governed data, machine learning, decision intelligence and agentic automation together as one enterprise platform."
            />
            
            <div className="space-y-8 mb-12">
              <DataverseFeatureItem 
                title="Agentic AI Frameworks"
                desc="Intelligent agents that automate complex workflows with governance, auditability and human oversight."
              />
              <DataverseFeatureItem 
                title="Data Intelligence"
                desc="Unified data layer across sources. Fraud detection, churn prediction, network optimisation."
              />
              <DataverseFeatureItem 
                title="DashIQ"
                desc="Beautiful operational dashboards as the self-serve entry point. Mid-market to enterprise."
              />
            </div>

            <Link to="/dataverse" className="btn-secondary w-full sm:w-auto">Explore Dataverse &rarr;</Link>
          </div>
          <div className="relative mt-12 md:mt-0">
            <Asset 
              src="/SiteGraphics/products/dataverse-ai-visual.jpg" 
              description="Abstract AI/data visualisation graphic, dark purple tones, neural network aesthetic" 
              dimensions="560x480" 
              className="w-full aspect-[7/6]"
            />
            <div className="absolute -inset-4 bg-purple-accent/10 blur-3xl -z-10 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Section 6 — Case Studies */}
      <section className="bg-bg-secondary section-padding">
        <div className="container mx-auto px-5 sm:px-8 lg:px-[60px]">
          <SectionHeader eyebrow="CASE STUDIES" h2="Results that speak." />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16">
            <CaseStudyCard 
              logo="/SiteGraphics/logos/clients/mtn-case.svg"
              title="100+ SME Fleets Deployed Across Nigeria"
              body="Through our partnership with MTN Nigeria, we enabled real-time vehicle tracking and fuel monitoring for businesses with no previous visibility."
              tags={["Fleet Intelligence", "Nigeria"]}
            />
            <CaseStudyCard 
              logo="/SiteGraphics/logos/clients/vodafone-case.svg"
              title="Enterprise IoT Across Qatar's Organisations"
              body="Deployed IoTility across Qatar Energy, Bateel, and First Group through Vodafone Qatar — unifying fleet and asset intelligence."
              tags={["Fleet Intelligence", "Qatar"]}
            />
            <CaseStudyCard 
              logo="/SiteGraphics/logos/clients/nitb.svg"
              title="Sovereign AI Architecture for the Public Sector"
              body="Designed a national-scale agentic AI and datalake architecture for NITB, built around sovereign deployment and government-grade controls."
              tags={["Dataverse", "Pakistan"]}
            />
          </div>

          <div className="text-center">
            <Link to="/case-studies" className="btn-secondary w-full sm:w-auto">View all case studies &rarr;</Link>
          </div>
        </div>
      </section>

      {/* Section 7 — Hardware & Technology Partners */}
      <section className="bg-bg-primary section-padding border-y border-border-subtle">
        <div className="container mx-auto px-5 sm:px-8 lg:px-[60px] text-center">
          <p className="text-[11px] text-text-tertiary font-bold tracking-[0.12em] uppercase mb-12">
            GLOBAL HARDWARE & TECHNOLOGY PARTNERS
          </p>
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16">
            <div className="grid grid-cols-2 md:flex md:flex-wrap justify-center items-center gap-8 md:gap-12">
              <ClientLogo src="/SiteGraphics/logos/hardware/teltonika.svg" alt="Teltonika" />
              <ClientLogo src="/SiteGraphics/logos/hardware/mokosmart.svg" alt="MokoSmart" />
              <ClientLogo src="/SiteGraphics/logos/hardware/milesight.svg" alt="Milesight" />
              <ClientLogo src="/SiteGraphics/logos/hardware/bsjiot.svg" alt="BSJIOT" />
              <ClientLogo src="/SiteGraphics/logos/hardware/howen.svg" alt="Howen" />
              <ClientLogo src="/SiteGraphics/logos/hardware/jimiiot.svg" alt="JimiIoT" />
            </div>
            
            <div className="hidden lg:block w-[1px] h-12 bg-border-subtle"></div>

            <div className="flex flex-col items-center gap-4 w-full lg:w-auto">
              <span className="text-[11px] text-[#71717A] font-bold uppercase tracking-wider">Technology Partners</span>
              <div className="flex items-center justify-center grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all">
                <Asset src="/SiteGraphics/logos/certifications/microsoft-partner-data-ai.png" description="Microsoft Partner Data & AI logo" dimensions="120x40" className="!w-32 !bg-transparent !border-none !p-0 !min-h-0" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
};

const StatItem: React.FC<{ value: string; label: string }> = ({ value, label }) => (
  <div className="flex flex-row md:flex-row md:gap-3 items-center md:items-baseline justify-center">
    <div className="text-[18px] md:text-[20px] font-semibold text-text-primary mr-2 md:mr-0">{value}</div>
    <div className="text-text-tertiary text-[9px] md:text-[11px] font-semibold uppercase tracking-wider">{label}</div>
  </div>
);

const ClientLogo: React.FC<{ src: string; alt: string }> = ({ src, alt }) => (
  <div className="flex-shrink-0 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300 w-[120px] h-[32px] flex items-center justify-center">
    <Asset src={src} description={alt} dimensions="120x32" className="!p-0 !bg-transparent !border-none !min-h-0" />
  </div>
);

const PillarCard: React.FC<{
  title: string;
  subtitle: string;
  body: string;
  accent: 'cyan' | 'purple';
  link: string;
  visual: string;
}> = ({ title, subtitle, body, accent, link, visual }) => (
  <motion.div 
    whileHover={{ y: -4 }}
    className="card-premium flex flex-col h-full"
  >
    <div className={`text-[11px] font-bold ${accent === 'cyan' ? 'text-cyan-accent' : 'text-purple-accent'} uppercase tracking-[0.1em] mb-4`}>
      {subtitle}
    </div>
    <h3 className="text-[28px] font-semibold mb-4 leading-tight">{title}</h3>
    <p className="text-text-secondary text-[14px] leading-relaxed mb-8 flex-grow">{body}</p>
    <Link to={link} className={`text-[14px] font-semibold ${accent === 'cyan' ? 'text-cyan-accent' : 'text-purple-accent'} hover:underline flex items-center gap-2 group mb-8`}>
      Explore {subtitle.split(' ')[0]} &rarr;
    </Link>
    <Asset src={visual} description={`${title} platform preview`} dimensions="480x240" className="w-full aspect-[2/1]" />
  </motion.div>
);

const ProductCard: React.FC<{ icon: string; title: string; body: string; verticals?: string; to: string }> = ({ icon, title, body, verticals, to }) => (
  <Link to={to} className="group bg-bg-primary p-10 rounded-2xl border border-border-subtle hover:border-cyan-accent transition-all flex flex-col h-full hover:shadow-premium">
    <Asset src={icon} description={`${title} icon`} dimensions="56x56" className="!w-16 !h-16 !bg-transparent !border-none !p-0 mb-8" />
    <h4 className="text-xl font-semibold mb-4 group-hover:text-cyan-accent transition-colors">{title}</h4>
    <p className="text-text-secondary text-[14px] leading-relaxed mb-8">{body}</p>
    {verticals && (
      <div className="mt-auto mb-6">
        <p className="text-[10px] uppercase tracking-widest text-text-tertiary font-bold mb-2">Verticals</p>
        <p className="text-[11px] text-text-tertiary">{verticals}</p>
      </div>
    )}
    <div className="mt-auto flex items-center gap-2 text-cyan-accent text-sm font-semibold">
      Learn more &rarr;
    </div>
  </Link>
);

const DataverseFeatureItem: React.FC<{ title: string; desc: string }> = ({ title, desc }) => (
  <div className="flex gap-6">
    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-accent/10 flex items-center justify-center text-purple-accent">
      <ArrowRight size={16} />
    </div>
    <div>
      <h5 className="text-lg font-semibold text-text-primary mb-2">{title}</h5>
      <p className="text-text-secondary text-sm leading-relaxed">{desc}</p>
    </div>
  </div>
);

const CaseStudyCard: React.FC<{ logo: string; title: string; body: string; tags: string[] }> = ({ logo, title, body, tags }) => (
  <div className="bg-bg-primary p-10 rounded-2xl border border-border-subtle hover:border-cyan-accent transition-all flex flex-col h-full">
    <img src={logo} alt="Client logo" className="h-10 w-auto max-w-[140px] object-contain mb-8" />
    <h4 className="text-xl font-semibold mb-6">{title}</h4>
    <p className="text-text-secondary text-sm mb-10 leading-relaxed">{body}</p>
    <div className="mt-auto flex flex-wrap gap-2 mb-8">
      {tags.map(t => (
        <span key={t} className="px-3 py-1 bg-bg-tertiary text-[10px] font-semibold text-text-tertiary border border-border-default rounded-full">
          {t}
        </span>
      ))}
    </div>
    <Link to="/case-studies" className="text-cyan-accent text-sm font-semibold flex items-center gap-2 group">
      Read case study <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
    </Link>
  </div>
);

export default Home;


