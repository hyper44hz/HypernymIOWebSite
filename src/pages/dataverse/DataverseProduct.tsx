import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, Database, Network, ShieldCheck, Sparkles } from 'lucide-react';
import { Asset } from '../../components/Asset';
import { CTABanner } from '../../components/CTABanner';

type ProductKey = 'agentic' | 'intelligence' | 'dashiq' | 'syncro';

const products = {
  agentic: {
    eyebrow: 'DATAVERSE · AGENTIC AI & ML',
    title: 'AI agents that work inside the enterprise—not outside its controls.',
    intro: 'Design, train and operate task-specific agents and machine-learning models against trusted enterprise data, with approvals, observability and governance built into every workflow.',
    image: '/SiteGraphics/products/ai-ml.jpg',
    outcomes: ['Automate multi-step knowledge work', 'Move models safely from pilot to production', 'Keep people in control of high-impact decisions', 'Deploy in cloud, private or hybrid environments'],
    capabilities: [
      ['Agent orchestration', 'Coordinate specialist agents, tools and business rules across complex tasks.'],
      ['Enterprise retrieval', 'Ground responses in governed documents, databases and real-time operational systems.'],
      ['Production ML', 'Develop, deploy and monitor forecasting, classification, anomaly and optimisation models.'],
      ['Responsible AI', 'Apply role-based access, evaluation, approvals, traceability and policy guardrails.'],
    ],
    flow: ['Enterprise data', 'Knowledge & models', 'AI agents', 'Human approval', 'Business action'],
    useCases: ['Customer-service copilots', 'Fraud and risk investigation', 'Network operations assistants', 'Document and case processing', 'Predictive maintenance', 'Demand and capacity forecasting'],
  },
  intelligence: {
    eyebrow: 'DATAVERSE · DATA INTELLIGENCE',
    title: 'Turn fragmented data into a governed intelligence foundation.',
    intro: 'Dataverse connects operational, customer, financial and IoT data into a reusable data layer that teams can trust for analytics, AI and real-time decisions.',
    image: '/SiteGraphics/products/data-.jpg',
    outcomes: ['Create one governed view across the enterprise', 'Reduce time spent finding and reconciling data', 'Serve analytics and AI from the same foundation', 'Improve quality, lineage and accountability'],
    capabilities: [
      ['Ingestion & integration', 'Connect APIs, databases, files, streams, SaaS tools and edge systems.'],
      ['Lakehouse architecture', 'Organise structured and unstructured data for scalable analytics and AI.'],
      ['Semantic layer', 'Define shared metrics, business entities and relationships once for every team.'],
      ['Governance & quality', 'Track lineage, ownership, access, freshness and quality from source to decision.'],
    ],
    flow: ['Source systems', 'Ingest & validate', 'Lakehouse', 'Semantic layer', 'Trusted intelligence'],
    useCases: ['Customer 360', 'Revenue assurance', 'Fraud intelligence', 'Network performance', 'Regulatory reporting', 'Operational forecasting'],
  },
  dashiq: {
    eyebrow: 'DATAVERSE · DASHIQ',
    title: 'Decision intelligence built for the people running the operation.',
    intro: 'DashIQ turns governed enterprise data into role-specific dashboards, proactive alerts and guided investigations—without making every question a data-team ticket.',
    image: '/SiteGraphics/products/dash-.jpg',
    outcomes: ['Give every role a shared operational picture', 'Detect exceptions before they become incidents', 'Move from metric to root cause in fewer steps', 'Deliver governed self-service analytics'],
    capabilities: [
      ['Executive command views', 'Track strategic outcomes, risk and performance across entities and markets.'],
      ['Operational workspaces', 'Give each team live queues, KPIs, alerts and drill-down paths for its work.'],
      ['Natural-language analysis', 'Ask governed questions and receive explainable answers with source context.'],
      ['Proactive intelligence', 'Trigger alerts, narratives and workflows when important conditions change.'],
    ],
    flow: ['Governed metrics', 'Role-based views', 'Anomaly detection', 'Guided analysis', 'Decision & action'],
    useCases: ['Executive performance', 'Fleet command centres', 'Utility consumption', 'Sales and churn', 'Service assurance', 'ESG performance'],
  },
  syncro: {
    eyebrow: 'DATAVERSE · SYNCRO',
    title: 'One governed automation layer across people, agents and systems.',
    intro: 'Syncro coordinates work across existing enterprise applications. It understands an objective, invokes the right tools and agents, requests approval where needed and records every action.',
    image: '/SiteGraphics/products/syncro-.png',
    outcomes: ['Automate work without replacing core systems', 'Reduce hand-offs and manual re-entry', 'Standardise complex operating procedures', 'Maintain a complete audit trail'],
    capabilities: [
      ['Workflow orchestration', 'Model long-running processes with decisions, exceptions, timers and approvals.'],
      ['Agent tool layer', 'Give agents controlled access to APIs, documents, databases and business actions.'],
      ['Human-in-the-loop', 'Route sensitive or uncertain steps to the right person with full context.'],
      ['Operational observability', 'Monitor every run, decision, tool call, failure and business outcome.'],
    ],
    flow: ['Business request', 'Plan & route', 'Agents + APIs', 'Approval gates', 'Audited outcome'],
    useCases: ['Case management', 'Employee onboarding', 'Procure-to-pay', 'Incident response', 'Compliance reviews', 'Customer fulfilment'],
  },
} as const;

const DataverseProduct: React.FC<{ product: ProductKey }> = ({ product }) => {
  const p = products[product];
  return <div>
    <section className="section-padding bg-bg-primary">
      <div className="container mx-auto px-5 sm:px-8 lg:px-[60px] grid lg:grid-cols-2 gap-14 items-center">
        <div><span className="text-[11px] font-bold tracking-[.2em] text-purple-accent">{p.eyebrow}</span><h1 className="mt-5 mb-6 text-4xl md:text-6xl leading-[1.05]">{p.title}</h1><p className="text-text-secondary text-lg leading-relaxed mb-9">{p.intro}</p><div className="flex flex-wrap gap-4"><Link to="/contact" className="btn-primary">Discuss your use case</Link><Link to="/dataverse" className="btn-secondary">View Dataverse</Link></div></div>
        <Asset src={p.image} description={p.eyebrow} dimensions="800x600" className="w-full aspect-[4/3] rounded-2xl" />
      </div>
    </section>

    <section className="py-16 bg-bg-secondary border-y border-border-subtle"><div className="container mx-auto px-5 sm:px-8 lg:px-[60px] grid sm:grid-cols-2 lg:grid-cols-4 gap-5">{p.outcomes.map(x => <div key={x} className="flex gap-3 text-sm text-text-secondary"><Check className="text-purple-accent shrink-0" size={18}/>{x}</div>)}</div></section>

    <section className="section-padding bg-bg-primary"><div className="container mx-auto px-5 sm:px-8 lg:px-[60px]"><span className="text-purple-accent text-xs font-bold tracking-[.2em]">CAPABILITIES</span><h2 className="mt-4 mb-12">Everything required for production—not another isolated pilot.</h2><div className="grid md:grid-cols-2 gap-6">{p.capabilities.map(([title, body], i) => <div key={title} className="p-8 md:p-10 rounded-2xl bg-bg-secondary border border-border-subtle"><div className="w-11 h-11 rounded-xl bg-purple-accent/10 text-purple-accent flex items-center justify-center mb-6">{[Sparkles, Database, Network, ShieldCheck].map((Icon, n) => n === i ? <Icon key={n} size={21}/> : null)}</div><h3 className="text-xl mb-3">{title}</h3><p className="text-text-secondary leading-relaxed">{body}</p></div>)}</div></div></section>

    <section className="section-padding bg-bg-secondary"><div className="container mx-auto px-5 sm:px-8 lg:px-[60px]"><div className="max-w-2xl mb-12"><span className="text-purple-accent text-xs font-bold tracking-[.2em]">HOW IT WORKS</span><h2 className="mt-4">A controlled path from enterprise data to measurable action.</h2></div><div className="grid md:grid-cols-5 gap-3">{p.flow.map((step, i) => <div key={step} className="relative bg-bg-primary border border-border-subtle rounded-xl p-5 min-h-32"><span className="text-purple-accent text-xs font-bold">0{i+1}</span><p className="mt-8 font-semibold">{step}</p>{i < p.flow.length - 1 && <ArrowRight className="hidden md:block absolute -right-5 top-1/2 z-10 text-purple-accent" size={24}/>}</div>)}</div></div></section>

    <section className="section-padding bg-bg-primary"><div className="container mx-auto px-5 sm:px-8 lg:px-[60px] grid lg:grid-cols-[.8fr_1.2fr] gap-14"><div><span className="text-purple-accent text-xs font-bold tracking-[.2em]">USE CASES</span><h2 className="mt-4">Start with a high-value problem. Build a reusable platform.</h2><p className="text-text-secondary mt-5 leading-relaxed">We prioritise outcomes, integration readiness, data quality and governance before selecting models or tools.</p></div><div className="grid sm:grid-cols-2 gap-4">{p.useCases.map(x => <div key={x} className="p-5 rounded-xl border border-border-subtle bg-bg-secondary flex items-center justify-between"><span>{x}</span><ArrowRight size={16} className="text-purple-accent"/></div>)}</div></div></section>
    <CTABanner h2="Build the intelligence layer your enterprise can rely on." subtext="We can begin with an architecture and use-case workshop, then move from validated foundation to production delivery." />
  </div>;
};

export default DataverseProduct;
