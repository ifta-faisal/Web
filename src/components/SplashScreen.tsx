import React, { useState, useEffect, useLayoutEffect } from 'react';
import bgVideoUrl from '../assets/video/Drone_Fotage_1.mp4';

const SplashScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [isExiting, setIsExiting] = useState(false);
  const [progress, setProgress] = useState(0);

  const logoUrl = new URL('../assets/images/logo/Logo UART SVG.svg', import.meta.url).href;

  // ─── Loading Configuration ───────────────────────────────────────
  // Increase delay or decrease step size to SLOW DOWN loading
  // Decrease delay or increase step size to SPEED UP loading
  const LOADING_SPEED_DELAY = 20;   // ms between updates
  const MIN_STEP = 0.8;             // minimum increment
  const RANDOM_FACTOR = 1.8;        // random additional increment
  // ─── Scroll Lock ────────────────────────────────────────────────
  useLayoutEffect(() => {
    document.body.classList.add('no-scroll');
    document.documentElement.classList.add('no-scroll');
    return () => {
      document.body.classList.remove('no-scroll');
      document.documentElement.classList.remove('no-scroll');
    };
  }, []);
  // ────────────────────────────────────────────────────────────────

  // Auto-progress the loading bar and enter when complete
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          // Auto-enter after a brief pause at 100%
          setTimeout(() => {
            setIsExiting(true);
            setTimeout(() => { onComplete(); }, 900);
          }, 600);
          return 100;
        }
        return prev + Math.random() * RANDOM_FACTOR + MIN_STEP;
      });
    }, LOADING_SPEED_DELAY);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-[#020617] flex flex-col items-center justify-center transition-all duration-[900ms] ease-in-out ${isExiting ? 'opacity-0 pointer-events-none scale-105' : 'opacity-100 scale-100'
        }`}
    >
      {/* Background Video — Optimized for maximum clarity */}
      <video
        autoPlay loop muted playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-80 pointer-events-none"
      >
        <source src={bgVideoUrl} type="video/mp4" />
      </video>

      {/* Subtle Vignette — Ensures focus on central content */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/90 via-transparent to-[#020617]/60 pointer-events-none" />

      {/* Main Branded Content — Minimalist & Centered */}
      <div className="relative z-10 flex flex-col items-center justify-center px-4 w-full max-w-2xl text-center">

        {/* Logo Section — Enlarged */}
        <div className="mb-4 group">
          <img
            src={logoUrl}
            alt="UART Logo"
            className="w-48 h-48 md:w-64 md:h-64 object-contain drop-shadow-[0_0_30px_rgba(249,115,22,0.4)] transition-transform duration-700 group-hover:scale-105"
          />
        </div>

        {/* Brand Title */}
        <div className="space-y-1 mb-6">
          <h1
            className="text-4xl md:text-5xl font-bold tracking-[0.3em] text-white"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            UIU AERIAL ROBOTICS TEAM
          </h1>
          <p className="text-primary font-bold tracking-[0.5em] text-[10px] md:text-xs">
            PRECISION IN MOTION
          </p>
        </div>

        {/* Minimalist Progress Section */}
        <div className="w-full max-w-xs md:max-w-sm mb-4">
          <div className="flex justify-between items-end mb-2">
            <span className="text-[10px] font-mono font-bold text-white/60 tracking-widest uppercase">Initializing Systems</span>
            <span className="text-[10px] font-mono font-bold text-primary">{Math.floor(progress)}%</span>
          </div>
          <div className="w-full h-[2px] bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-300"
              style={{ width: `${progress}%`, boxShadow: '0 0 10px rgba(249,115,22,0.5)' }}
            />
          </div>
        </div>

        {/* Status message instead of click button */}
        <p
          className="text-white/40 text-[10px] tracking-[0.3em] font-mono uppercase"
        >
          {progress >= 100 ? 'Entering Experience...' : 'Please wait...'}
        </p>

      </div>

    </div>
  );
};

export default SplashScreen;
