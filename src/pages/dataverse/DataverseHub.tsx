import React, { useEffect } from 'react';
import { Asset } from '../../components/Asset';
import { SectionHeader } from '../../components/SectionHeader';
import { CTABanner } from '../../components/CTABanner';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const DataverseHub: React.FC = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        const offset = 80;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  }, [hash]);

  return (
    <div>
      <section className="section-padding bg-bg-primary">
        <div className="container mx-auto px-5 sm:px-8 lg:px-[60px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column — Text */}
            <div>
              <SectionHeader
                eyebrow="DATAVERSE"
                h2="The data and AI platform for intelligent enterprises."
                subtext="Dataverse creates the governed data foundation, decision intelligence and agentic automation required to move enterprise AI from isolated experiments into production."
              />
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="btn-primary w-full sm:w-auto">Talk to our AI team</Link>
              </div>
            </div>

            {/* Right Column — Image */}
            <div className="relative rounded-2xl overflow-hidden border border-border-subtle">
                          <Asset
                                          src="/SiteGraphics/hero/ai-.mp4"
                                          description=""
                                          dimensions="1920x1080"
                                          className="w-full h-full object-cover !rounded-2xl !border-none opacity-100"
                                        />
                        </div>
          </div>
        </div>
      </section>

      {/* Proof Bar */}
      <div className="bg-bg-secondary py-10 md:py-12 border-y border-border-subtle overflow-hidden">
        <div className="container mx-auto px-5 sm:px-8 lg:px-[60px]">
          <div className="flex flex-col md:flex-row md:justify-center items-center gap-6 md:gap-12 text-[10px] md:text-xs font-semibold text-text-tertiary uppercase tracking-[0.15em] text-center">
            <span>Sovereign and enterprise-ready architecture</span>
            <span className="hidden md:block w-1.5 h-1.5 bg-purple-accent rounded-full"></span>
            <span>Designed for regulated, data-intensive operations</span>
            <span className="hidden md:block w-1.5 h-1.5 bg-purple-accent rounded-full"></span>
            <span>From data foundation to governed action</span>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <section className="section-padding bg-bg-primary">
        <div className="container mx-auto px-5 sm:px-8 lg:px-[60px]">
          <SectionHeader h2="The Dataverse product suite." center />
          
          <div className="space-y-16 md:space-y-32">
            <div id="agentic-ai">
              <DataverseLargeProduct 
                eyebrow="ENTERPRISE"
                title="Agentic AI & ML"
                body="We design, build and deploy agentic AI frameworks for complex enterprise environments. Intelligent agents that automate workflows, make decisions and execute tasks with minimal human intervention."
                features={["Multi-agent orchestration", "Real-time decision engines", "Custom ML model development", "Datalake architecture"]}
                visual="/SiteGraphics/products/ai-ml.jpg"
                accent="purple"
                to="/dataverse/agentic-ai-ml"
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <div id="data-intelligence">
                <DataverseSmallCard 
                  title="Data Intelligence"
                  body="Unify data from every source. Surface insights through ML models built for industry challenges like fraud, churn, and network performance."
                  visual="/SiteGraphics/products/data-.jpg"
                  to="/dataverse/data-intelligence"
                />
              </div>
              <div id="dashiq">
                <DataverseSmallCard 
                  eyebrow="SELF-SERVE"
                  title="DashIQ"
                  body="Beautiful operational dashboards that don't require a data scientist to configure. The accessible entry point to Dataverse."
                  visual="/SiteGraphics/products/dash-.jpg"
                  to="/dataverse/dashiq"
                />
              </div>
            </div>
            
            <div id="syncro">
              <DataverseLargeProduct 
                title="Syncro"
                body="Agentic AI product for enterprise automation. Syncro deploys as a configurable agent layer on top of your existing systems — connecting data sources and triggering workflows."
                features={["Cross-system automation", "Natural language tasks", "API and webhook integration", "Audit trail & compliance"]}
                visual="/SiteGraphics/products/syncro-.png"
                accent="purple"
                reversed
                to="/dataverse/syncro"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Built on Microsoft Callout */}
      <section className="container mx-auto px-5 sm:px-8 lg:px-[60px] mb-20 lg:mb-32">
        <div className="bg-[#111113] border border-[#27272A] rounded-2xl p-8 md:p-12 lg:p-16">
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10">
            <div className="flex-shrink-0">
              <Asset 
                src="/SiteGraphics/logos/certifications/microsoft-partner-data-ai.png" 
                description="Microsoft Partner Data & AI logo" 
                dimensions="120x40" 
                className="!w-32 md:!w-40 !bg-transparent !border-none !p-0 !min-h-0" 
              />
            </div>
            <div className="flex-grow text-center lg:text-left">
              <h3 className="text-[18px] md:text-xl font-medium text-text-primary mb-3">Microsoft Partner — Data & AI</h3>
              <p className="text-text-secondary text-[14px] md:text-[15px] leading-relaxed mb-6 max-w-2xl mx-auto lg:mx-0">
                Our Dataverse platform is built on Microsoft Azure infrastructure and certified as a Microsoft Data & AI solutions partner — bringing enterprise-grade cloud reliability, security and AI tooling to every deployment.
              </p>
              <Link to="/about" className="text-cyan-accent text-sm font-semibold hover:underline flex items-center justify-center lg:justify-start gap-2 group">
                Learn more about our technology stack <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Highlight */}
      <section className="container mx-auto px-5 sm:px-8 lg:px-[60px] py-20">
        <div className="bg-bg-secondary p-8 md:p-16 lg:p-20 border-l-4 border-purple-accent rounded-r-2xl overflow-hidden">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
             <div className="order-2 lg:order-1">
               <span className="text-purple-accent text-xs font-bold tracking-[.2em]">DELIVERY MODEL</span>
               <h2 className="mt-4 mb-6">Build the foundation once. Deliver valuable use cases in stages.</h2>
               <p className="text-text-secondary text-lg mb-8 leading-relaxed">We begin with data readiness, governance and a focused business outcome. The resulting platform is reusable—so each subsequent dashboard, model or agent can be delivered faster and governed consistently.</p>
               <div className="flex flex-wrap gap-2 mb-8 md:mb-10">
                 {["Discover", "Architect", "Deliver", "Operate"].map(t => (
                   <span key={t} className="px-3 py-1 bg-bg-tertiary text-[9px] md:text-[10px] font-bold text-text-tertiary border border-border-default rounded-full uppercase tracking-tighter">
                     {t}
                   </span>
                 ))}
               </div>
               <Link to="/contact" className="text-purple-accent font-semibold flex items-center gap-2 group">
                 Plan an architecture workshop <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
               </Link>
             </div>
             <div className="order-1 lg:order-2">
               <Asset src="/SiteGraphics/products/dataverse-platform-preview.jpg" description="Dataverse Platform Preview" dimensions="600x400" className="w-full aspect-[4/3] md:aspect-[3/2] rounded-xl" />
             </div>
           </div>
        </div>
      </section>

      <CTABanner h2="Ready to build your AI platform?" subtext="Our enterprise AI team will assess your data infrastructure and design a deployment architecture suited to your scale." />
    </div>
  );
};

const DataverseLargeProduct = ({ eyebrow, title, body, features, visual, reversed = false, to }: any) => (
  <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${reversed ? 'lg:flex-row-reverse' : ''}`}>
    <div className={reversed ? 'lg:order-2' : ''}>
      {eyebrow && <span className="text-[10px] font-bold text-purple-accent uppercase tracking-[0.2em] mb-4 block">{eyebrow}</span>}
      <h3 className="mb-6">{title}</h3>
      <p className="text-text-secondary mb-10 leading-relaxed text-[16px] md:text-[18px]">{body}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 mb-10">
        {features.map((f: string) => (
          <div key={f} className="flex items-center gap-3 text-sm text-text-secondary">
             <div className="w-1.5 h-1.5 bg-purple-accent rounded-full flex-shrink-0" />
             {f}
          </div>
        ))}
      </div>
      <Link to={to} className="btn-secondary w-full sm:w-auto text-center">Explore {title} →</Link>
    </div>
    <div className={`${reversed ? 'lg:order-1' : ''} mt-8 lg:mt-0`}>
      <Asset src={visual} description={title} dimensions="480x300" className="w-full aspect-[16/10] rounded-xl" />
    </div>
  </div>
);

const DataverseSmallCard = ({ eyebrow, title, body, visual, to }: any) => (
  <div className="bg-bg-secondary p-8 md:p-12 rounded-3xl border border-border-subtle group hover:border-purple-accent transition-all flex flex-col h-full">
    {eyebrow && <span className="text-[10px] font-bold text-purple-accent uppercase tracking-[0.2em] mb-4 block">{eyebrow}</span>}
    <h3 className="mb-6 group-hover:text-purple-accent transition-colors text-xl md:text-2xl">{title}</h3>
    <p className="text-text-secondary mb-10 leading-relaxed text-[14px] md:text-sm flex-grow">{body}</p>
    <Asset src={visual} description={title} dimensions="480x300" className="w-full aspect-[4/3] rounded-xl" />
    <Link to={to} className="mt-8 text-purple-accent text-sm font-semibold">Explore {title} →</Link>
  </div>
);

export default DataverseHub;


