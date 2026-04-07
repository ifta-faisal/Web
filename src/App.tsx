import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import SplashScreen from './components/SplashScreen';
import Header from './components/Header';
import Footer from './components/Footer';
// 1. Import Hero (which now contains all homepage sections)
import Hero from './components/Hero';
import Team from './components/Team';
import Projects from './components/Projects';
import Contact from './components/Contact';
import JoinUs from './components/JoinUs';
import Mentors from './components/Mentors';
import DetailedFeatures from './components/DetailedFeatures';
import Sponsor from './components/Sponsor';
import SponsorProposal from './components/SponsorProposal';
import Gallery from './components/Gallery';
import PrivacyPolicy from './components/PrivacyPolicy';
import CookiePolicy from './components/CookiePolicy';
import TermsofService from './components/TermsofService';
import BackgroundAnimation from './components/BackgroundAnimation';

const App = () => {
  const [showSplash, setShowSplash] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('ju-visible');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    // We wrap in setTimeout to let React render the page components first
    const timer = setTimeout(() => {
      const elements = document.querySelectorAll('.ju-reveal:not(.ju-visible)');
      elements.forEach((el) => observer.observe(el));
    }, 100);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [location.pathname]);

  return (
    <>
      <ScrollToTop />
      {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} />}
      <BackgroundAnimation />
      <Header />
      <Routes>

        {/* 3. Point the main route to Hero */}
        <Route path="/" element={<Hero />} />
        <Route path="/DetailedFeatures" element={<DetailedFeatures />} />
        {/* These are your other pages */}
        <Route path="/team" element={<Team />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Gallery" element={<Gallery />} />

        {/* 4. Changed paths to lowercase to match your <Link> tags */}
        <Route path="/sponsor-proposal" element={<SponsorProposal />} />
        <Route path="/sponsor" element={<Sponsor />} />
        <Route path="/joinus" element={<JoinUs />} />
        <Route path="/mentor" element={<Mentors />} />
        <Route path="/advisors" element={<Mentors />} />
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
        <Route path="/CookiePolicy" element={<CookiePolicy />} />
        <Route path="TermsofService" element={<TermsofService />} />

      </Routes>
      <Footer />
    </>
  );
};

export default App;