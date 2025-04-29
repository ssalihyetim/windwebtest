import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/services/Services';
import Industries from './pages/Industries';
import RequestAQuote from './pages/RequestAQuote';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Terms from './pages/Terms';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services/*" element={<Services />} />
        <Route path="industries" element={<Industries />} />
        <Route path="request-a-quote" element={<RequestAQuote />} />
        <Route path="contact" element={<Contact />} />
        <Route path="privacy-policy" element={<PrivacyPolicy />} />
        <Route path="terms" element={<Terms />} />
      </Route>
    </Routes>
  );
}

export default App;
