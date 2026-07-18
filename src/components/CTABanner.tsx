import React from 'react';
import { Link } from 'react-router-dom';

export const CTABanner: React.FC<{ h2?: string; subtext?: string; btnText?: string; secondaryLink?: string }> = ({ 
  h2 = "Ready to see it in action?", 
  subtext = "Book a 30-minute demo. We'll show you exactly how IoTility or Dataverse applies to your operation — no generic slides, no pressure.",
  btnText = "Book a Demo",
  secondaryLink = "Or explore the platform yourself →"
}) => {
  return (
    <section className="container mx-auto px-5 sm:px-8 lg:px-[60px] py-20">
      <div className="bg-gradient-to-br from-cyan-accent to-purple-accent rounded-3xl p-12 md:p-20 text-center relative overflow-hidden">
        <div className="relative z-10 max-w-[800px] mx-auto">
          <h2 className="text-bg-primary mb-6">{h2}</h2>
          <p className="text-bg-primary/70 text-lg md:text-xl font-medium mb-10">
            {subtext}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link to="/contact" className="btn-primary !bg-bg-primary !text-text-primary min-w-[180px]">
              {btnText}
            </Link>
            <Link to="/iotility" className="text-bg-primary font-semibold hover:opacity-80 transition-opacity">
              {secondaryLink}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};


