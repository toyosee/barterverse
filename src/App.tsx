import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';

import Layout from './Layout';
import Hero from './components/Hero';
import PersonasSection from './components/PersonasSection';
import SectorsSection from './components/SectorsSection';
import BarterEngine from './components/BarterEngine';

import AboutPage from './pages/AboutUs';
import ContactPage from './pages/ContactUs';

const LandingPage = () => (
  <>
    <section id="vision">
      <Hero />
    </section>
    <section id="people">
      <PersonasSection />
    </section>
    <section id="sectors">
      <SectorsSection />
    </section>
    <section id="barter-engine">
      <BarterEngine />
    </section>
  </>
);

const App: React.FC = () => (
  <Router>
    <ScrollToTop />
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <LandingPage />
          </Layout>
        }
      />
      <Route
        path="/about"
        element={
          <Layout>
            <AboutPage />
          </Layout>
        }
      />
      <Route
        path="/contact"
        element={
          <Layout>
            <ContactPage />
          </Layout>
        }
      />
    </Routes>
  </Router>
);

export default App;