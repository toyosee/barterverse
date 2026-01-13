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
import VortexEnginePage from './pages/VortexEnginePage';
import KnowledgeNodesPage from './pages/KnowledgeNodesPage';
import CitizenshipPage from './pages/CitizenshipPage';
import GovernancePage from './pages/GovernancePage';
import InternalBarteringEnginePage from './pages/BarterEngine';
import PrivacySystemPage from './pages/PrivacySystemPage'
import ExchangeProtocolsPage from './pages/ExchangeProtoclsPage';
import TaxAssistPage from './pages/TaxAssist';
import VailLandingPage from './pages/Vail';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import ComingSoon from './pages/ComingSoon';
import NotFoundPage from './pages/NotFoundPage';


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
      <Route
        path="/vortex-engine"
        element={
          <Layout>
            <VortexEnginePage />
          </Layout>
        }
      />
      <Route
        path="/knowledge-nodes"
        element={
          <Layout>
            <KnowledgeNodesPage />
          </Layout>
        }
      />
      <Route
        path="/citizenship"
        element={
          <Layout>
            <CitizenshipPage />
          </Layout>
        }
      />
      <Route
        path="/governance"
        element={
          <Layout>
            <GovernancePage />
          </Layout>
        }
      />
      <Route
        path="/barter-engine"
        element={
          <Layout>
            <InternalBarteringEnginePage />
          </Layout>
        }
      />
      <Route
        path="/privacy-system"
        element={
          <Layout>
            <PrivacySystemPage />
          </Layout>
        }
      />
      <Route
        path="/exchange-protocols"
        element={
          <Layout>
            <ExchangeProtocolsPage />
          </Layout>
        }
      />

      <Route
        path="/tax-assist"
        element={
          <Layout>
            <TaxAssistPage />
          </Layout>
        }
      />

      <Route
        path="/vail"
        element={
          <Layout>
            <VailLandingPage />
          </Layout>
        }
      />

      <Route
        path="/coming-soon"
        element={
          <Layout>
            <ComingSoon />
          </Layout>
        }
      />

      {/* Login and Signup routes */}
      <Route
        path="/login"
        element={
          <Layout>
            <LoginPage />
          </Layout>
        }
      />
      <Route
        path="/signup"
        element={
          <Layout>
            <SignUpPage />
          </Layout>
        }
      />
      {/* If wrong route is e=ntered, fall to default 404 page*/}
      <Route
        path="*"
        element={
          <Layout>
            <NotFoundPage />
          </Layout>
        }
      />
    </Routes>
  </Router>
);

export default App;