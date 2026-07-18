import React from 'react';
import { Asset } from '../components/Asset';
import { SectionHeader } from '../components/SectionHeader';

const Careers: React.FC = () => {
  return (
    <div>
      <section className="section-padding bg-bg-primary">
        <div className="container mx-auto px-5 sm:px-8 lg:px-[60px]">
          <SectionHeader 
            h2="Build the infrastructure of the physical world."
            subtext="We're a small team doing work that matters — deploying AI and IoT systems for governments, telecoms and enterprises across three continents."
          />
          <Asset src="/SiteGraphics/about/careers-hero.jpg" description="Team working environment photo" dimensions="1200x400" className="w-full aspect-[2/1] md:aspect-[4/1] mb-12 md:mb-24 rounded-2xl" />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
             <CareerWhyCard title="Real impact" desc="Deployments that actually run in the physical world." />
             <CareerWhyCard title="Global work" desc="Operating across 11 countries and counting." />
             <CareerWhyCard title="Small team" desc="Your work is visible and high-stakes." />
             <CareerWhyCard title="Growing fast" desc="Expanding across new markets every year." />
          </div>
        </div>
      </section>

      <section className="section-padding bg-bg-secondary">
        <div className="container mx-auto px-5 sm:px-8 lg:px-[60px]">
          <SectionHeader h2="Open positions" center />
          <div className="max-w-2xl mx-auto p-8 md:p-12 lg:p-16 bg-bg-primary border border-border-subtle rounded-3xl text-center">
            <p className="text-text-secondary text-[16px] md:text-lg mb-8 leading-relaxed">We're always looking for exceptional people. Send your CV to careers@hypernymbiz.com with the role you're interested in.</p>
            <a href="mailto:careers@hypernymbiz.com" className="btn-primary w-full sm:w-auto inline-block">Send us your CV</a>
          </div>
        </div>
      </section>
    </div>
  );
};

const CareerWhyCard = ({ title, desc }: any) => (
  <div className="p-8 bg-bg-secondary rounded-2xl border border-border-subtle">
    <h4 className="text-xl font-bold mb-4">{title}</h4>
    <p className="text-text-secondary text-sm leading-relaxed">{desc}</p>
  </div>
);

export default Careers;


