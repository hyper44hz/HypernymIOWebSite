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
import About from './pages/About';
import CaseStudies from './pages/CaseStudies';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';

export default function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        
        {/* IoTility Hub and Sub-products */}
        <Route path="/iotility" element={<IoTilityHub />} />
        <Route path="/iotility/fleet-intelligence" element={<FleetIntelligence />} />
        <Route path="/iotility/asset-management" element={<AssetManagement />} />
        <Route path="/iotility/twinscape" element={<TwinScape />} />
        <Route path="/iotility/sustainex" element={<Sustainex />} />
        <Route path="/iotility/utilities-monitoring" element={<UtilitiesMonitoring />} />
        
        {/* Dataverse Hub */}
        <Route path="/dataverse" element={<DataverseHub />} />
        
        {/* Company Pages */}
        <Route path="/about" element={<About />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Privacy />} />
        
        {/* Fallback */}
        <Route path="*" element={<Home />} />
      </Routes>
    </Layout>
  );
}
