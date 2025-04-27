import React from "react";
import { Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import RequestAQuote from "./pages/RequestAQuote";
import Industries from "./pages/Industries";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";
import Services from "./pages/services/Services";
import CncMillingServices from "./pages/services/CncMillingServices";
import CncTurningServices from "./pages/services/CncTurningServices";
import FiveAxisCncMachining from "./pages/services/FiveAxisCncMachining";
import CustomMachiningServices from "./pages/services/CustomMachiningServices";
import MaterialExpertise from "./pages/services/MaterialExpertise";

export default function App() {
  return (
    <HelmetProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="request-a-quote" element={<RequestAQuote />} />
          <Route path="industries" element={<Industries />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="terms" element={<Terms />} />
          <Route path="services" element={<Services />} />
          <Route path="services/cnc-milling-services" element={<CncMillingServices />} />
          <Route path="services/cnc-turning-services" element={<CncTurningServices />} />
          <Route path="services/5-axis-cnc-machining" element={<FiveAxisCncMachining />} />
          <Route path="services/custom-machining-services" element={<CustomMachiningServices />} />
          <Route path="services/material-expertise" element={<MaterialExpertise />} />
        </Route>
      </Routes>
    </HelmetProvider>
  );
}
