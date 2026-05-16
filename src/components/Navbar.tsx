import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Asset } from './Asset';
import { motion, AnimatePresence } from 'motion/react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location]);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 h-[72px] flex items-center ${isScrolled ? 'nav-blur' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 flex items-center justify-between h-full">
        <Link to="/" className="flex-shrink-0">
          <Asset 
            src="/SiteGraphics/logos/hypernym-white.png" 
            description="HyperNym Logo" 
            dimensions="160x32" 
            className="!p-0 !bg-transparent !border-none !w-[140px] md:!w-[160px] !h-[28px] md:!h-[32px] !min-h-0"
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8">
          {/* IoTility Dropdown */}
          <div 
            className="relative h-[72px] flex items-center"
            onMouseEnter={() => setActiveDropdown('iotility')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="flex items-center gap-1 text-[14px] font-medium text-text-primary hover:text-cyan-accent transition-colors">
              IoTility <ChevronDown size={14} className={`transition-transform duration-200 ${activeDropdown === 'iotility' ? 'rotate-180' : ''}`} />
            </button>
            <AnimatePresence>
              {activeDropdown === 'iotility' && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-[72px] left-[-200px] w-[600px] bg-bg-secondary border border-border-subtle p-8 rounded-2xl shadow-2xl z-50"
                >
                  <div className="mb-6">
                    <h4 className="text-text-primary font-semibold">IoTility Platform</h4>
                    <p className="text-text-tertiary text-xs">One login. Every operation.</p>
                  </div>
                  <div className="grid grid-cols-2 gap-6">
                    <DropdownItem 
                      to="/iotility/fleet-intelligence" 
                      title="Fleet Intelligence" 
                      desc="Multi-industry fleet management with AI cameras"
                    />
                    <DropdownItem 
                      to="/iotility/asset-management" 
                      title="Asset Management" 
                      desc="Indoor and outdoor asset tracking"
                    />
                    <DropdownItem 
                      to="/iotility/twinscape" 
                      title="TwinScape" 
                      desc="Digital twin for buildings and hospitals"
                    />
                    <DropdownItem 
                      to="/iotility/sustainex" 
                      title="Sustainex" 
                      desc="ESG and sustainability intelligence layer"
                    />
                    <DropdownItem 
                      to="/iotility/utilities-monitoring" 
                      title="Utilities Monitoring" 
                      desc="Real-time consumption tracking"
                    />
                  </div>
                  <div className="mt-8 pt-6 border-t border-border-subtle flex justify-between items-center">
                    <span className="text-[10px] text-text-tertiary uppercase tracking-widest font-semibold">ISO 27001:2022 Certified</span>
                    <Link to="/iotility" className="text-cyan-accent text-xs font-semibold hover:underline">View all products →</Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div 
            className="relative h-[72px] flex items-center"
            onMouseEnter={() => setActiveDropdown('dataverse')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="flex items-center gap-1 text-[14px] font-medium text-text-primary hover:text-cyan-accent transition-colors">
              Dataverse <ChevronDown size={14} className={`transition-transform duration-200 ${activeDropdown === 'dataverse' ? 'rotate-180' : ''}`} />
            </button>
            <AnimatePresence>
              {activeDropdown === 'dataverse' && (activeDropdown === 'dataverse' && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-[72px] left-[-100px] w-[350px] bg-bg-secondary border border-border-subtle p-8 rounded-2xl shadow-2xl z-50"
                >
                  <div className="mb-6">
                    <h4 className="text-text-primary font-semibold">Dataverse</h4>
                    <p className="text-text-tertiary text-xs">Enterprise AI infrastructure.</p>
                  </div>
                  <div className="flex flex-col gap-4">
                    <DropdownItem to="/dataverse#agentic-ai" title="Agentic AI & ML" desc="Datalake and AI agent frameworks" />
                    <DropdownItem to="/dataverse#data-intelligence" title="Data Intelligence" desc="Unified data layer & fraud detection" />
                    <DropdownItem to="/dataverse#dashiq" title="DashIQ" desc="Self-serve operational dashboards" />
                    <DropdownItem to="/dataverse#syncro" title="Syncro" desc="Agentic AI for automation" />
                  </div>
                  <div className="mt-6 pt-4 border-t border-border-subtle">
                     <span className="text-[10px] text-text-tertiary uppercase tracking-widest font-semibold tracking-[0.05em]">Deployed for governments and telecoms</span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <Link to="/about" className="text-[14px] font-medium text-text-primary hover:text-cyan-accent transition-colors">About</Link>
          <Link to="/case-studies" className="text-[14px] font-medium text-text-primary hover:text-cyan-accent transition-colors">Case Studies</Link>
          <Link to="/careers" className="text-[14px] font-medium text-text-primary hover:text-cyan-accent transition-colors">Careers</Link>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden lg:flex items-center gap-2 mr-2">
            <Asset 
              src="/SiteGraphics/logos/certifications/ccs-supplier.png" 
              description="Crown Commercial Service Supplier logo" 
              dimensions="80x32" 
              className="!w-[80px] !h-[32px] !p-0 !bg-transparent !border-none !min-h-0" 
            />
            <span className="text-[12px] text-[#A1A1AA] font-medium leading-none">CCS Supplier</span>
          </div>
          <Link to="/contact" className="btn-primary hidden md:flex">
            Get a Demo
          </Link>
          <button 
            className="lg:hidden text-text-primary p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="lg:hidden fixed inset-0 top-[72px] bg-bg-primary z-[100] flex flex-col overflow-y-auto"
          >
            <div className="p-6 flex flex-col">
              <MobileNavItem 
                title="IoTility" 
                isOpen={activeDropdown === 'iotility'} 
                onClick={() => setActiveDropdown(activeDropdown === 'iotility' ? null : 'iotility')}
                items={[
                  { to: "/iotility", label: "Platform Overview" },
                  { to: "/iotility/fleet-intelligence", label: "Fleet Intelligence" },
                  { to: "/iotility/asset-management", label: "Asset Management" },
                  { to: "/iotility/twinscape", label: "TwinScape" },
                  { to: "/iotility/sustainex", label: "Sustainex" },
                  { to: "/iotility/utilities-monitoring", label: "Utilities Monitoring" },
                ]}
              />
              
              <MobileNavItem 
                title="Dataverse" 
                isOpen={activeDropdown === 'dataverse'} 
                onClick={() => setActiveDropdown(activeDropdown === 'dataverse' ? null : 'dataverse')}
                items={[
                  { to: "/dataverse", label: "Dataverse Overview" },
                  { to: "/dataverse#agentic-ai", label: "Agentic AI & ML" },
                  { to: "/dataverse#data-intelligence", label: "Data Intelligence" },
                  { to: "/dataverse#dashiq", label: "DashIQ" },
                  { to: "/dataverse#syncro", label: "Syncro" },
                ]}
              />

              <Link to="/about" className="h-[56px] flex items-center text-[18px] font-medium border-b border-border-subtle">About</Link>
              <Link to="/case-studies" className="h-[56px] flex items-center text-[18px] font-medium border-b border-border-subtle">Case Studies</Link>
              <Link to="/careers" className="h-[56px] flex items-center text-[18px] font-medium border-b border-border-subtle">Careers</Link>
              
              <div className="mt-10">
                <Link to="/contact" className="btn-primary w-full text-[16px] h-[56px]">Get a Demo</Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const MobileNavItem: React.FC<{ 
  title: string; 
  isOpen: boolean; 
  onClick: () => void; 
  items: { to: string; label: string }[] 
}> = ({ title, isOpen, onClick, items }) => (
  <div className="border-b border-border-subtle overflow-hidden">
    <button 
      onClick={onClick}
      className="w-full h-[56px] flex items-center justify-between text-[18px] font-medium text-text-primary"
    >
      {title}
      <ChevronDown size={20} className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
    </button>
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="flex flex-col gap-1 pb-4"
        >
          {items.map((item) => (
            <Link 
              key={item.to} 
              to={item.to} 
              className="h-[48px] flex items-center text-[16px] text-text-secondary hover:text-cyan-accent px-4"
            >
              {item.label}
            </Link>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

const DropdownItem: React.FC<{ to: string; title: string; desc: string }> = ({ to, title, desc }) => (
  <Link to={to} className="group/item">
    <h5 className="text-sm font-medium text-text-primary group-hover/item:text-cyan-accent transition-colors">{title}</h5>
    <p className="text-[11px] text-text-tertiary group-hover/item:text-text-secondary transition-colors">{desc}</p>
  </Link>
);
