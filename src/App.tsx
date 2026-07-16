import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Lenis from 'lenis';
import ScrollToTop from './components/ScrollToTop';
import SplashScreen from './components/SplashScreen';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import NewsPage from './components/NewsPage';
import Blog from './components/Blog';
import BlogDetail from './components/BlogDetail';
import Team from './components/Team';
import Projects from './components/Projects';
import ProjectDetail from './components/ProjectDetail';
import Contact from './components/Contact';
import JoinUs from './components/JoinUs';
import Mentors from './components/Mentors';
import DetailedFeatures from './components/DetailedFeatures';
import TestData from './components/TestData';
import Sponsor from './components/Sponsor';
import SponsorProposal from './components/SponsorProposal';
import Gallery from './components/Gallery';
import PrivacyPolicy from './components/PrivacyPolicy';
import CookiePolicy from './components/CookiePolicy';
import TermsofService from './components/TermsofService';
import ScrollToTopButton from './components/ScrollToTopButton';

const REVEAL_CLASSES = [
  '.ju-reveal:not(.ju-visible)',
  '.ju-reveal-left:not(.ju-visible)',
  '.ju-reveal-right:not(.ju-visible)',
  '.ju-reveal-scale:not(.ju-visible)',
  '.mask-reveal:not(.ju-visible)',
  '.scale-entry:not(.ju-visible)',
];

const App = () => {
  const [showSplash, setShowSplash] = useState(true);
  const location = useLocation();

  useEffect(() => {
    // Initialize Lenis for buttery smooth global scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Lower threshold so elements reveal earlier in viewport (FlyShot feel)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('ju-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const observeAll = () => {
      REVEAL_CLASSES.forEach((selector) => {
        document.querySelectorAll(selector).forEach((el) => observer.observe(el));
      });
    };

    // Initial scan — 500ms gives lazy-loaded sections time to mount
    const timer = setTimeout(observeAll, 500);

    // MutationObserver catches elements added later (React.lazy chunks)
    const mutationObserver = new MutationObserver(() => observeAll());
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    // Stop the MutationObserver after 5s (lazy chunks will be loaded by then)
    const mutationTimer = setTimeout(() => mutationObserver.disconnect(), 5000);

    return () => {
      clearTimeout(timer);
      clearTimeout(mutationTimer);
      observer.disconnect();
      mutationObserver.disconnect();
      lenis.destroy();
    };
  }, [location.pathname]);

  return (
    <div className="atmosphere-right min-h-screen overflow-x-hidden">
      <div className="cinematic-grid min-h-screen relative overflow-x-hidden w-full">
        <ScrollToTop />
        {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} />}
        <Header />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
          <Route path="/DetailedFeatures" element={<DetailedFeatures />} />
          <Route path="/TestData" element={<TestData />} />
          <Route path="/team" element={<Team />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/sponsor-proposal" element={<SponsorProposal />} />
          <Route path="/sponsor" element={<Sponsor />} />
          <Route path="/joinus" element={<JoinUs />} />
          <Route path="/mentor" element={<Mentors />} />
          <Route path="/advisors" element={<Mentors />} />
          <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
          <Route path="/CookiePolicy" element={<CookiePolicy />} />
          <Route path="/TermsofService" element={<TermsofService />} />
        </Routes>
        <Footer />
        <ScrollToTopButton />
      </div>
    </div>
  );
};

export default App;