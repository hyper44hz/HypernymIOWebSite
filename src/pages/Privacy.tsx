import React from 'react';

const Privacy: React.FC = () => {
  return (
    <div className="section-padding bg-bg-primary min-h-screen">
      <div className="container mx-auto px-6 max-w-3xl">
        <h1 className="mb-8 md:mb-12">Privacy Policy</h1>
        <div className="space-y-12 text-text-secondary leading-relaxed text-[16px] md:text-lg">
          <section>
            <h4 className="text-text-primary text-lg md:text-xl font-bold mb-4">1. Data Collected</h4>
            <p>HyperNym collects the minimum amount of information required to provide our services and communications. This includes contact details provided via forms, and operational sensor data for IoTility platform users.</p>
          </section>
          
          <section>
            <h4 className="text-text-primary text-lg md:text-xl font-bold mb-4">2. How we use it</h4>
            <p>Information is used exclusively to deliver the platform features you've requested, respond to enquiries, and improve our technology. We do not sell your data.</p>
          </section>

          <section>
            <h4 className="text-text-primary text-lg md:text-xl font-bold mb-4">3. Third Parties</h4>
            <p>We work with trusted infrastructure providers (like Google Cloud) to host our data. These partners are strictly vetted for security compliance including ISO 27001.</p>
          </section>

          <section>
            <h4 className="text-text-primary text-lg md:text-xl font-bold mb-4">4. Your Rights</h4>
            <p>You have the right to access, correct, or request the deletion of your personal data at any time. For such requests, please contact our Data Protection Officer.</p>
          </section>

          <div className="pt-12 border-t border-border-subtle text-sm md:text-base">
             <p className="mb-2 uppercase font-bold tracking-wider">HyperNym Ltd</p>
             <p className="mb-2 text-text-tertiary">Global House, Ashley Avenue, Epsom, KT18 5AD, United Kingdom</p>
             <p className="text-cyan-accent font-medium">info@hypernymbiz.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
