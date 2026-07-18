/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Layout } from './components/Layout';
import Home from './pages/Home';
import IoTilityHub from './pages/iotility/IoTilityHub';
import FleetIntelligence from './pages/iotility/FleetIntelligence';
import AssetManagement from './pages/iotility/AssetManagement';
import TwinScape from './pages/iotility/TwinScape';
import Sustainex from './pages/iotility/Sustainex';
import UtilitiesMonitoring from './pages/iotility/UtilitiesMonitoring';
import DataverseHub from './pages/dataverse/DataverseHub';
import DataverseProduct from './pages/dataverse/DataverseProduct';
import AssetDetail from './pages/iotility/AssetDetail';
import About from './pages/About';
import CaseStudies from './pages/CaseStudies';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import NotFound from './pages/NotFound';
import { Seo } from './components/Seo';

export default function App() {
  const { pathname } = useLocation();
  const seo = seoByPath[pathname] ?? {
    title: 'HyperNym | Operational Intelligence & Enterprise AI',
    description: 'HyperNym connects fleets, assets, buildings and enterprise data through IoTility operational intelligence and Dataverse AI.',
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Layout>
      <Seo
        title={seo.title}
        description={seo.description}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        
        {/* IoTility Hub and Sub-products */}
        <Route path="/iotility" element={<IoTilityHub />} />
        <Route path="/iotility/fleet-intelligence" element={<FleetIntelligence />} />
        <Route path="/iotility/asset-management" element={<AssetManagement />} />
        <Route path="/iotility/asset-management/outdoor" element={<AssetDetail mode="outdoor" />} />
        <Route path="/iotility/asset-management/indoor" element={<AssetDetail mode="indoor" />} />
        <Route path="/iotility/twinscape" element={<TwinScape />} />
        <Route path="/iotility/sustainex" element={<Sustainex />} />
        <Route path="/iotility/utilities-monitoring" element={<UtilitiesMonitoring />} />
        
        {/* Dataverse Hub */}
        <Route path="/dataverse" element={<DataverseHub />} />
        <Route path="/dataverse/agentic-ai-ml" element={<DataverseProduct product="agentic" />} />
        <Route path="/dataverse/data-intelligence" element={<DataverseProduct product="intelligence" />} />
        <Route path="/dataverse/dashiq" element={<DataverseProduct product="dashiq" />} />
        <Route path="/dataverse/syncro" element={<DataverseProduct product="syncro" />} />
        
        {/* Company Pages */}
        <Route path="/about" element={<About />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Privacy />} />
        
        {/* Fallback */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

const seoByPath: Record<string, { title: string; description: string }> = {
  '/': { title: 'HyperNym | Operational Intelligence & Enterprise AI', description: 'Connect fleets, assets, buildings and enterprise data through IoTility operational intelligence and Dataverse AI.' },
  '/iotility': { title: 'IoTility Operational Intelligence Platform | HyperNym', description: 'Unify fleet intelligence, asset tracking, digital twins, utilities and sustainability under one operational platform.' },
  '/iotility/fleet-intelligence': { title: 'Fleet Intelligence Platform | HyperNym', description: 'AI-enabled fleet operations, driver safety, fuel intelligence and industry-specific workflows in one platform.' },
  '/iotility/asset-management': { title: 'Indoor & Outdoor Asset Management | HyperNym', description: 'Track equipment, inventory and high-value assets across vehicles, facilities and field operations.' },
  '/iotility/asset-management/outdoor': { title: 'Outdoor Asset Tracking | HyperNym', description: 'Track mobile and field assets with GPS, geofences, utilization intelligence and maintenance workflows.' },
  '/iotility/asset-management/indoor': { title: 'Indoor Asset Tracking | HyperNym', description: 'Locate critical equipment inside hospitals, campuses, warehouses and facilities using BLE, RFID or UWB.' },
  '/iotility/twinscape': { title: 'TwinScape Digital Twin Platform | HyperNym', description: 'Create a live operational model of buildings, campuses and facilities with sensors, assets and environmental intelligence.' },
  '/iotility/sustainex': { title: 'Sustainex ESG & Sustainability Intelligence | HyperNym', description: 'Turn operational data into measurable emissions, energy and audit-ready sustainability intelligence.' },
  '/iotility/utilities-monitoring': { title: 'Utilities Monitoring Platform | HyperNym', description: 'Monitor water, gas and electricity consumption in real time with anomaly and overconsumption alerts.' },
  '/dataverse': { title: 'Dataverse Enterprise AI Infrastructure | HyperNym', description: 'Deploy sovereign datalakes, agentic AI frameworks, machine learning pipelines and decision intelligence.' },
  '/dataverse/agentic-ai-ml': { title: 'Enterprise Agentic AI & Machine Learning | HyperNym', description: 'Build governed AI agents, machine-learning systems and human-in-the-loop enterprise workflows.' },
  '/dataverse/data-intelligence': { title: 'Enterprise Data Intelligence | HyperNym', description: 'Unify fragmented enterprise data into a governed, analytics-ready intelligence foundation.' },
  '/dataverse/dashiq': { title: 'DashIQ Decision Intelligence | HyperNym', description: 'Give operational teams governed self-service dashboards, alerts and decision-ready metrics.' },
  '/dataverse/syncro': { title: 'Syncro Enterprise Automation | HyperNym', description: 'Coordinate AI agents, people and enterprise systems through governed workflow automation.' },
  '/about': { title: 'About HyperNym | From Sensor to Decision', description: 'Meet the operational intelligence and enterprise AI company connecting the physical and digital worlds.' },
  '/case-studies': { title: 'Customer Results & Case Studies | HyperNym', description: 'Explore how HyperNym delivers fleet, asset, IoT and enterprise AI outcomes across multiple markets.' },
  '/careers': { title: 'Careers at HyperNym', description: 'Join the team building operational intelligence and enterprise AI systems across global markets.' },
  '/contact': { title: 'Contact HyperNym | Book a Demo', description: 'Talk to HyperNym about fleet intelligence, asset management, digital twins, sustainability or enterprise AI.' },
  '/privacy': { title: 'Privacy Policy | HyperNym', description: 'Read the HyperNym privacy policy.' },
};
