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
        <div className="container mx-auto px-6">
          <SectionHeader 
            eyebrow="DATAVERSE"
            h2="Enterprise AI infrastructure. Deployed, not promised."
            subtext="We build and deploy AI platforms for governments, telecoms and enterprises. Datalake architecture, agentic AI frameworks, ML pipelines — delivered end to end."
          />
          <div className="flex flex-col sm:flex-row gap-4 mb-12 md:mb-20">
            <Link to="/contact" className="btn-primary w-full sm:w-auto">Talk to our AI team</Link>
          </div>
          <div className="relative rounded-2xl overflow-hidden border border-border-subtle shadow-2xl">
            <Asset 
              src="/SiteGraphics/products/dataverse-hero.jpg" 
              description="Abstract AI data flow visualisation, dark purple tones, neural network aesthetic" 
              dimensions="1200x600" 
              className="w-full aspect-[2/1] md:aspect-[2.4/1]"
            />
          </div>
        </div>
      </section>

      {/* Proof Bar */}
      <div className="bg-bg-secondary py-10 md:py-12 border-y border-border-subtle overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:justify-center items-center gap-6 md:gap-12 text-[10px] md:text-xs font-semibold text-text-tertiary uppercase tracking-[0.15em] text-center">
            <span>Deployed for NITB — Government of Pakistan</span>
            <span className="hidden md:block w-1.5 h-1.5 bg-purple-accent rounded-full"></span>
            <span>Telecom AI deployments across Africa</span>
            <span className="hidden md:block w-1.5 h-1.5 bg-purple-accent rounded-full"></span>
            <span>Financial sector fraud detection</span>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <section className="section-padding bg-bg-primary">
        <div className="container mx-auto px-6">
          <SectionHeader h2="The Dataverse product suite." center />
          
          <div className="space-y-16 md:space-y-32">
            <div id="agentic-ai">
              <DataverseLargeProduct 
                eyebrow="ENTERPRISE"
                title="Agentic AI & ML"
                body="We design, build and deploy agentic AI frameworks for complex enterprise environments. Intelligent agents that automate workflows, make decisions and execute tasks with minimal human intervention."
                features={["Multi-agent orchestration", "Real-time decision engines", "Custom ML model development", "Datalake architecture"]}
                visual="/SiteGraphics/products/agentic-ai-visual.jpg"
                accent="purple"
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <div id="data-intelligence">
                <DataverseSmallCard 
                  title="Data Intelligence"
                  body="Unify data from every source. Surface insights through ML models built for industry challenges like fraud, churn, and network performance."
                  visual="/SiteGraphics/products/data-intelligence-visual.jpg"
                />
              </div>
              <div id="dashiq">
                <DataverseSmallCard 
                  eyebrow="SELF-SERVE"
                  title="DashIQ"
                  body="Beautiful operational dashboards that don't require a data scientist to configure. The accessible entry point to Dataverse."
                  visual="/SiteGraphics/products/dashiq-dashboard.jpg"
                />
              </div>
            </div>
            
            <div id="syncro">
              <DataverseLargeProduct 
                title="Syncro"
                body="Agentic AI product for enterprise automation. Syncro deploys as a configurable agent layer on top of your existing systems — connecting data sources and triggering workflows."
                features={["Cross-system automation", "Natural language tasks", "API and webhook integration", "Audit trail & compliance"]}
                visual="/SiteGraphics/products/syncro-visual.jpg"
                accent="purple"
                reversed
              />
            </div>
          </div>
        </div>
      </section>

      {/* Built on Microsoft Callout */}
      <section className="container mx-auto px-6 mb-20 lg:mb-32">
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
      <section className="container mx-auto px-6 py-20">
        <div className="bg-bg-secondary p-8 md:p-16 lg:p-20 border-l-4 border-purple-accent rounded-r-2xl overflow-hidden">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
             <div className="order-2 lg:order-1">
               <Asset src="/SiteGraphics/logos/clients/nitb.svg" description="NITB Logo" dimensions="120x40" className="!w-20 md:!w-24 !bg-transparent !border-none !p-0 mb-6 md:mb-8" />
               <p className="text-text-primary text-lg md:text-xl font-medium mb-6 md:mb-8 leading-relaxed">
                 "Deployed a national-scale agentic AI platform and datalake for NITB — the National Information Technology Board of Pakistan. Built to serve government-grade data requirements at national scale."
               </p>
               <div className="flex flex-wrap gap-2 mb-8 md:mb-10">
                 {["Agentic AI", "Datalake", "Government"].map(t => (
                   <span key={t} className="px-3 py-1 bg-bg-tertiary text-[9px] md:text-[10px] font-bold text-text-tertiary border border-border-default rounded-full uppercase tracking-tighter">
                     {t}
                   </span>
                 ))}
               </div>
               <Link to="/case-studies" className="text-purple-accent font-semibold flex items-center gap-2 group">
                 Read the case study <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
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

const DataverseLargeProduct = ({ eyebrow, title, body, features, visual, accent, reversed = false }: any) => (
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
      <Link to="/contact" className="btn-secondary w-full sm:w-auto text-center">Talk to our enterprise team →</Link>
    </div>
    <div className={`${reversed ? 'lg:order-1' : ''} mt-8 lg:mt-0`}>
      <Asset src={visual} description={title} dimensions="480x300" className="w-full aspect-[16/10] rounded-xl" />
    </div>
  </div>
);

const DataverseSmallCard = ({ eyebrow, title, body, visual }: any) => (
  <div className="bg-bg-secondary p-8 md:p-12 rounded-3xl border border-border-subtle group hover:border-purple-accent transition-all flex flex-col h-full">
    {eyebrow && <span className="text-[10px] font-bold text-purple-accent uppercase tracking-[0.2em] mb-4 block">{eyebrow}</span>}
    <h3 className="mb-6 group-hover:text-purple-accent transition-colors text-xl md:text-2xl">{title}</h3>
    <p className="text-text-secondary mb-10 leading-relaxed text-[14px] md:text-sm flex-grow">{body}</p>
    <Asset src={visual} description={title} dimensions="480x300" className="w-full aspect-[4/3] rounded-xl" />
  </div>
);

export default DataverseHub;
