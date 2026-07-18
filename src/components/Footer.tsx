import React from 'react';
import { Link } from 'react-router-dom';
import { Asset } from './Asset';
import { Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-bg-primary border-t border-border-subtle pt-24 pb-12">
      <div className="container mx-auto px-5 sm:px-8 lg:px-[60px]">
        <div className="flex flex-col lg:flex-row justify-between gap-12 mb-16 md:mb-20 items-center lg:items-start text-center lg:text-left">
          <div className="max-w-xs mx-auto lg:mx-0">
             <Link to="/">
               <Asset 
                 src="/SiteGraphics/logos/hypernym-white.png" 
                 description="HyperNym Logo" 
                 dimensions="160x32" 
                 className="!p-0 !bg-transparent !border-none !w-[140px] md:!w-[160px] !h-[28px] md:!h-[32px] !min-h-0 mb-6 mx-auto lg:mx-0"
               />
             </Link>
             <p className="text-text-secondary text-sm">From Sensor to Decision. The intelligence layer for physical operations.</p>
          </div>
          
          <div className="flex flex-wrap justify-center lg:justify-end items-center gap-6 md:gap-8 max-w-2xl">
            <Asset src="/SiteGraphics/logos/hardware/teltonika.svg" description="Teltonika logo" dimensions="120x30" className="!w-20 md:!w-24 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all" />
            <Asset src="/SiteGraphics/logos/hardware/mokosmart.svg" description="MokoSmart logo" dimensions="120x30" className="!w-20 md:!w-24 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all" />
            <Asset src="/SiteGraphics/logos/hardware/milesight.svg" description="Milesight logo" dimensions="120x30" className="!w-20 md:!w-24 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all" />
            <Asset src="/SiteGraphics/logos/hardware/bsjiot.svg" description="BSJIOT logo" dimensions="120x30" className="!w-20 md:!w-24 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all" />
            <Asset src="/SiteGraphics/logos/hardware/howen.svg" description="Howen logo" dimensions="120x30" className="!w-20 md:!w-24 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all" />
            <Asset src="/SiteGraphics/logos/hardware/jimiiot.svg" description="JimiIoT logo" dimensions="120x30" className="!w-20 md:!w-24 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all" />
            <div className="hidden lg:block w-[1px] h-8 bg-border-subtle"></div>
            <Asset src="/SiteGraphics/logos/certifications/microsoft-partner-data-ai.png" description="Microsoft Partner Data & AI logo" dimensions="120x40" className="!w-24 md:!w-28 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all" />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-20 text-center sm:text-left">
          {/* Column contents remain same */}
          <div>
            <h5 className="text-text-primary font-semibold mb-6">IoTility Platform</h5>
            <ul className="space-y-3">
              <FooterLink to="/iotility/fleet-intelligence">Fleet Intelligence</FooterLink>
              <FooterLink to="/iotility/asset-management">Asset Management</FooterLink>
              <FooterLink to="/iotility/twinscape">TwinScape</FooterLink>
              <FooterLink to="/iotility/sustainex">Sustainex</FooterLink>
              <FooterLink to="/iotility/utilities-monitoring">Utilities Monitoring</FooterLink>
            </ul>
          </div>
          
          <div>
            <h5 className="text-text-primary font-semibold mb-6">Dataverse</h5>
            <ul className="space-y-3">
              <FooterLink to="/dataverse">Agentic AI & ML</FooterLink>
              <FooterLink to="/dataverse">Data Intelligence</FooterLink>
              <FooterLink to="/dataverse">DashIQ</FooterLink>
              <FooterLink to="/dataverse">Syncro</FooterLink>
            </ul>
          </div>

          <div>
            <h5 className="text-text-primary font-semibold mb-6">Company</h5>
            <ul className="space-y-3">
              <FooterLink to="/about">About</FooterLink>
              <FooterLink to="/case-studies">Case Studies</FooterLink>
              <FooterLink to="/careers">Careers</FooterLink>
              <FooterLink to="/contact">Contact</FooterLink>
              <FooterLink to="/privacy">Privacy Policy</FooterLink>
            </ul>
          </div>

          <div className="flex flex-col items-center sm:items-start">
            <h5 className="text-text-primary font-semibold mb-6">Contact</h5>
            <div className="space-y-4 text-text-secondary text-sm">
              <div className="flex gap-3 justify-center sm:justify-start">
                <MapPin size={16} className="text-cyan-accent flex-shrink-0" />
                <span>Global House, Ashley Avenue, Epsom, KT18 5AD, United Kingdom</span>
              </div>
              <div className="flex gap-3 justify-center sm:justify-start">
                <Phone size={16} className="text-cyan-accent flex-shrink-0" />
                <span>+44 1372 232 115</span>
              </div>
              <div className="flex gap-3 justify-center sm:justify-start">
                <Mail size={16} className="text-cyan-accent flex-shrink-0" />
                <span>info@hypernymbiz.com</span>
              </div>
              <div className="flex gap-4 pt-4 justify-center sm:justify-start">
                <a aria-label="HyperNym on LinkedIn" href="https://www.linkedin.com/company/hypernym/" target="_blank" rel="noreferrer" className="text-text-tertiary hover:text-cyan-accent"><Linkedin size={20} /></a>
                <a aria-label="HyperNym on X" href="https://x.com/Hypernym_" target="_blank" rel="noreferrer" className="text-text-tertiary hover:text-cyan-accent"><span className="text-xl font-bold">𝕏</span></a>
                <a aria-label="HyperNym on Instagram" href="https://www.instagram.com/hypernymybiz/" target="_blank" rel="noreferrer" className="text-text-tertiary hover:text-cyan-accent font-semibold italic">IG</a>
                <a aria-label="HyperNym on Facebook" href="https://www.facebook.com/Hypernymltd/" target="_blank" rel="noreferrer" className="text-text-tertiary hover:text-cyan-accent font-semibold italic">FB</a>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border-subtle flex flex-col lg:flex-row justify-between items-center gap-8 text-center lg:text-left">
          <p className="text-text-tertiary text-xs order-last lg:order-first">© 2026 HyperNym Ltd. All Rights Reserved.</p>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="px-4 py-1.5 border border-border-default rounded-full inline-flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
              <span className="text-[10px] text-text-secondary font-semibold uppercase tracking-wider whitespace-nowrap">ISO 27001:2022 Certified</span>
            </div>
            <div className="px-4 py-1.5 border border-border-default rounded-full inline-flex items-center gap-2">
              <Asset src="/SiteGraphics/logos/certifications/ccs-supplier.png" description="CCS Logo" dimensions="20x20" className="!w-4 !h-4 !bg-transparent !border-none !p-0 !min-h-0" />
              <span className="text-[10px] text-text-secondary font-semibold uppercase tracking-wider whitespace-nowrap">CCS Supplier</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FooterLink: React.FC<{ to: string; children: React.ReactNode }> = ({ to, children }) => (
  <li>
    <Link to={to} className="text-text-secondary text-sm hover:text-cyan-accent transition-colors">
      {children}
    </Link>
  </li>
);


