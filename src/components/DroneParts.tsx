import React, { useState, useEffect } from 'react';
import droneImage from '../assets/images/0000.png';

// Coordinates are split into mobile (original) and desktop (scaled for centered 60% drone image)
const parts = [
  {
    id: 1,
    label: 'GPS MODULE',
    desc: 'Circular GPS antenna mounted on top of the frame, providing accurate positioning for autonomous navigation, waypoint missions, and return-to-home.',
    // Mobile Coordinates (Original full image)
    mobileTop: '29%',
    mobileLeft: '46%',
    // Desktop Coordinates (Scaled for centered 60% image inside aspect container)
    desktopTop: '37.4%',
    desktopLeft: '47.6%',
    // Desktop layout text positioning - Top Left
    textTop: '5%',
    textLeft: '-6%',
    textAlign: 'text-right',
    // SVG line anchor (percentages inside viewBox="0 0 100 100")
    lineX: 12,
    lineY: 10,
  },
  {
    id: 2,
    label: 'FLIGHT CONTROLLER',
    desc: 'High-performance flight controller running ArduPilot/PX4, fusing IMU, barometer, and GPS data in real-time for stable autonomous flight.',
    // Mobile Coordinates (Original full image)
    mobileTop: '38%',
    mobileLeft: '52%',
    // Desktop Coordinates (Scaled for centered 60% image inside aspect container)
    desktopTop: '42.8%',
    desktopLeft: '51.2%',
    // Desktop layout text positioning - Bottom Left
    textTop: '76%',
    textLeft: '-6%',
    textAlign: 'text-right',
    // SVG line anchor
    lineX: 12,
    lineY: 82,
  },
  {
    id: 3,
    label: 'BRUSHLESS MOTORS',
    desc: 'Four high-efficiency brushless DC motors at each corner arm, built for powerful thrust, minimal heat generation, and maximum endurance.',
    // Mobile Coordinates (Original full image)
    mobileTop: '26%',
    mobileLeft: '75.2%',
    // Desktop Coordinates (Scaled for centered 60% image inside aspect container)
    desktopTop: '35.6%',
    desktopLeft: '65.12%',
    // Desktop layout text positioning - Top Right
    textTop: '5%',
    textLeft: '88%',
    textAlign: 'text-left',
    // SVG line anchor
    lineX: 88,
    lineY: 10,
  },
  {
    id: 4,
    label: 'CARBON FIBER PROPELLERS',
    desc: 'Ultralight carbon fiber blades optimised for maximum lift-to-drag efficiency, eliminating flex-induced vibration at all RPM ranges.',
    // Mobile Coordinates (Original full image)
    mobileTop: '28%',
    mobileLeft: '63%',
    // Desktop Coordinates (Scaled for centered 60% image inside aspect container)
    desktopTop: '36.8%',
    desktopLeft: '57.8%',
    // Desktop layout text positioning - Bottom Right
    textTop: '76%',
    textLeft: '88%',
    textAlign: 'text-left',
    // SVG line anchor
    lineX: 88,
    lineY: 82,
  },
];

const DroneParts = () => {
  const [revealedCount, setRevealedCount] = useState(0);
  const [isManual, setIsManual] = useState(false);
  const [manualIndex, setManualIndex] = useState(0);

  // Active index of the slideshow / highlighted part
  const activeIndex = isManual ? manualIndex : revealedCount - 1;

  useEffect(() => {
    if (isManual) return;

    let timeout: ReturnType<typeof setTimeout>;
    if (revealedCount < parts.length) {
      timeout = setTimeout(() => setRevealedCount((p) => p + 1), 1800);
    } else {
      timeout = setTimeout(() => setRevealedCount(0), 3200);
    }
    return () => clearTimeout(timeout);
  }, [revealedCount, isManual]);

  const handlePartClick = (index: number) => {
    setIsManual(true);
    setManualIndex(index);
  };

  const handlePrev = () => {
    const current = activeIndex >= 0 ? activeIndex : 0;
    const nextIdx = current <= 0 ? parts.length - 1 : current - 1;
    setIsManual(true);
    setManualIndex(nextIdx);
  };

  const handleNext = () => {
    const current = activeIndex >= 0 ? activeIndex : 0;
    const nextIdx = current >= parts.length - 1 ? 0 : current + 1;
    setIsManual(true);
    setManualIndex(nextIdx);
  };

  const handleResume = () => {
    setIsManual(false);
    setRevealedCount(0); // Restart scanning cycle from the beginning
  };

  // Scanning system placeholder slide details for index -1 (when revealedCount is 0 in auto-scan)
  const scanSlide = {
    id: 0,
    label: 'SYSTEM DIAGNOSTIC SCAN',
    desc: 'Initiating telemetry scan of core components. Detecting active avionics, GNSS systems, and propulsion units...',
  };

  const activePart = activeIndex >= 0 ? parts[activeIndex] : scanSlide;

  return (
    <section className="py-24 bg-transparent relative overflow-hidden">
      <div className="absolute inset-0 bg-radial-warm opacity-30 pointer-events-none" />
      <div className="absolute top-0 right-0 w-72 sm:w-96 h-72 sm:h-96 bg-[#f97316] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 ju-reveal">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="section-label mb-3">Anatomy</div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
            <div className="mask-container">
              <span className="mask-reveal ju-visible">Inside Our Drone</span>
            </div>
          </h2>
          <div className="w-16 sm:w-24 h-1.5 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-8" />
        </div>

        {/* Responsive Content Container */}
        <div>
          
          {/* ── DESKTOP & TABLET VIEW: Full Blueprint Layout ── */}
          <div className="hidden md:block relative w-full max-w-[900px] mx-auto">
            <div className="relative w-full drop-shadow-2xl" style={{ paddingBottom: '46.84%' }}>
              
              {/* Center 60% Drone Image (styled inline to guarantee layout scaling bypasses Tailwind compiler) */}
              <img
                src={droneImage}
                alt="Drone Anatomy Blueprint"
                style={{
                  width: '60%',
                  height: '60%',
                  top: '20%',
                  left: '20%',
                }}
                className="absolute object-contain z-10 select-none pointer-events-none"
              />

              {/* SVG Dotted Connecting Lines pointing to desktop coordinates */}
              <svg 
                className="absolute inset-0 w-full h-full pointer-events-none z-15" 
                viewBox="0 0 100 100" 
                preserveAspectRatio="none"
              >
                {parts.map((part, i) => {
                  const revealed = isManual ? true : i < revealedCount;
                  const isActive = i === activeIndex;
                  if (!revealed) return null;

                  return (
                    <g key={part.id}>
                      {/* Glow indicator line */}
                      {isActive && (
                        <line
                          x1={parseFloat(part.desktopLeft)}
                          y1={parseFloat(part.desktopTop)}
                          x2={part.lineX}
                          y2={part.lineY}
                          stroke="#f97316"
                          strokeWidth="0.8"
                          opacity="0.3"
                          className="animate-pulse"
                        />
                      )}
                      {/* Technical dashed line */}
                      <line
                        x1={parseFloat(part.desktopLeft)}
                        y1={parseFloat(part.desktopTop)}
                        x2={part.lineX}
                        y2={part.lineY}
                        stroke={isActive ? '#f97316' : '#475569'}
                        strokeWidth={isActive ? '0.6' : '0.3'}
                        strokeDasharray="2 2"
                        className="transition-all duration-700"
                      />
                    </g>
                  );
                })}
              </svg>

              {/* Interactive Hotspot Dots placed on desktop coordinates */}
              {parts.map((part, i) => {
                const revealed = isManual ? true : i < revealedCount;
                const isActive = i === activeIndex;
                return (
                  <button
                    key={part.id}
                    className="absolute z-20 focus:outline-none group"
                    style={{ 
                      top: part.desktopTop, 
                      left: part.desktopLeft,
                      cursor: 'pointer'
                    }}
                    onClick={() => handlePartClick(i)}
                    title={`View ${part.label}`}
                  >
                    <div
                      className="relative flex items-center justify-center -translate-x-1/2 -translate-y-1/2"
                      style={{
                        opacity: revealed ? 1 : 0,
                        transform: revealed
                          ? 'translate(-50%, -50%) scale(1)'
                          : 'translate(-50%, -50%) scale(0)',
                        transition: 'opacity 0.6s ease, transform 0.6s ease',
                      }}
                    >
                      {isActive && (
                        <div className="absolute w-9 h-9 bg-[#f97316] rounded-full animate-ping opacity-25" />
                      )}
                      <div
                        className={`absolute rounded-full border-2 transition-all duration-700 ${
                          isActive
                            ? 'w-11 h-11 border-[#f97316] opacity-40'
                            : 'w-7 h-7 border-slate-500 opacity-25 group-hover:border-[#f97316] group-hover:opacity-40 group-hover:scale-110'
                        }`}
                      />
                      <div
                        className={`relative rounded-full border-2 transition-all duration-500 ${
                          isActive
                            ? 'w-3.5 h-3.5 bg-[#f97316] border-white shadow-lg shadow-orange-500/50'
                            : 'w-2.5 h-2.5 bg-slate-500 border-slate-400 group-hover:bg-[#f97316] group-hover:border-white'
                        }`}
                      />
                    </div>
                  </button>
                );
              })}

              {/* Blueprint Absolute Text Labels (highly high-contrast details) */}
              {parts.map((part, i) => {
                const revealed = isManual ? true : i < revealedCount;
                const isActive = i === activeIndex;
                if (!revealed) return null;

                return (
                  <div
                    key={part.id}
                    className={`absolute flex flex-col z-20 transition-all duration-700 ${part.textAlign}`}
                    style={{
                      top: part.textTop,
                      left: part.textLeft,
                      width: '20%',
                      opacity: isActive ? 1 : 0.25,
                      transform: isActive ? 'translateY(0)' : 'translateY(4px)',
                    }}
                  >
                    <div className={`flex items-center mb-1 justify-end ${part.textAlign === 'text-left' ? 'flex-row-reverse' : 'flex-row'}`}>
                      <span className={`text-[9px] font-mono tracking-widest font-semibold ${isActive ? 'text-[#f97316]' : 'text-slate-600'}`}>
                        0{part.id}
                      </span>
                    </div>

                    <h4 
                      className={`font-bold uppercase tracking-[0.15em] text-[10px] lg:text-[11px] leading-tight transition-colors duration-500 ${isActive ? 'text-[#f97316]' : 'text-slate-500'}`}
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {part.label}
                    </h4>

                    <div
                      className="transition-all duration-500 overflow-hidden"
                      style={{
                        maxHeight: isActive ? '80px' : '0px',
                        opacity: isActive ? 1 : 0,
                      }}
                    >
                      <p className="text-slate-200 text-[9px] lg:text-[10px] mt-2 font-light leading-relaxed">
                        {part.desc}
                      </p>
                    </div>
                  </div>
                );
              })}

            </div>

            {/* Desktop Slideshow Control Bar */}
            <div className="flex justify-center mt-12">
              <div className="flex items-center gap-5 px-6 py-2.5 bg-slate-950/60 border border-white/5 backdrop-blur-md rounded-full shadow-2xl">
                
                {/* Prev Button */}
                <button 
                  onClick={handlePrev}
                  className="p-1 rounded text-slate-500 hover:text-[#f97316] transition-all duration-300 focus:outline-none"
                  aria-label="Previous component"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                {/* Bullets */}
                <div className="flex items-center gap-2">
                  {parts.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => handlePartClick(i)}
                      className={`h-1.5 rounded-full transition-all duration-300 focus:outline-none ${
                        activeIndex === i 
                          ? 'bg-[#f97316] w-4' 
                          : 'bg-slate-700 w-1.5 hover:bg-slate-500'
                      }`}
                      aria-label={`Jump to component ${i + 1}`}
                    />
                  ))}
                </div>

                {/* Next Button */}
                <button 
                  onClick={handleNext}
                  className="p-1 rounded text-slate-500 hover:text-[#f97316] transition-all duration-300 focus:outline-none"
                  aria-label="Next component"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </button>

                {/* Divider & Mode Status */}
                <div className="w-px h-4 bg-white/10" />

                <div className="flex items-center gap-2">
                  <span className={`w-1.5 h-1.5 rounded-full ${!isManual ? 'bg-[#f97316] animate-pulse' : 'bg-emerald-500'}`} />
                  <span className="text-[9px] font-mono tracking-widest text-slate-400 uppercase font-semibold">
                    {!isManual ? 'AUTO-SCAN' : 'MANUAL LOCK'}
                  </span>
                </div>

                {/* Resume button */}
                {isManual && (
                  <>
                    <div className="w-px h-4 bg-white/10" />
                    <button
                      onClick={handleResume}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full border border-[#f97316]/30 bg-[#f97316]/10 text-[9px] font-mono tracking-widest text-[#f97316] hover:bg-[#f97316]/20 transition-all duration-300 focus:outline-none"
                    >
                      RESUME SCAN
                    </button>
                  </>
                )}

              </div>
            </div>

          </div>

          {/* ── MOBILE VIEW: Standard Aspect Image + Standalone Slideshow Card ── */}
          <div className="block md:hidden flex flex-col gap-8">
            <div className="relative w-full drop-shadow-2xl" style={{ paddingBottom: '46.84%' }}>
              <img
                src={droneImage}
                alt="Drone Anatomy"
                className="absolute inset-0 w-full h-full object-contain z-10 select-none pointer-events-none"
              />

              {parts.map((part, i) => {
                const revealed = isManual ? true : i < revealedCount;
                const isActive = i === activeIndex;
                return (
                  <button
                    key={part.id}
                    className="absolute z-20 focus:outline-none"
                    style={{ top: part.mobileTop, left: part.mobileLeft }}
                    onClick={() => handlePartClick(i)}
                  >
                    <div
                      className="relative flex items-center justify-center -translate-x-1/2 -translate-y-1/2"
                      style={{
                        opacity: revealed ? 1 : 0,
                        transform: revealed ? 'translate(-50%, -50%) scale(1)' : 'translate(-50%, -50%) scale(0)',
                        transition: 'opacity 0.6s ease, transform 0.6s ease',
                      }}
                    >
                      {isActive && (
                        <div className="absolute w-9 h-9 bg-[#f97316] rounded-full animate-ping opacity-25" />
                      )}
                      <div
                        className={`absolute rounded-full border-2 transition-all duration-700 ${
                          isActive ? 'w-11 h-11 border-[#f97316] opacity-40' : 'w-7 h-7 border-slate-500 opacity-25'
                        }`}
                      />
                      <div
                        className={`relative rounded-full border-2 transition-all duration-500 ${
                          isActive ? 'w-3.5 h-3.5 bg-[#f97316] border-white' : 'w-2.5 h-2.5 bg-slate-500 border-slate-400'
                        }`}
                      />
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Glassmorphic Slideshow Card below image for mobile */}
            <div className="relative overflow-hidden bg-slate-950/40 border border-white/5 backdrop-blur-md rounded-2xl p-5 shadow-2xl flex flex-col justify-between min-h-[190px]">
              {/* Header */}
              <div className="flex items-center justify-between border-b border-white/5 pb-3">
                <span className="text-[10px] font-mono tracking-widest text-[#f97316]/80 font-semibold">
                  {activeIndex >= 0 ? `[ 0${activeIndex + 1} / 04 ]` : '[ 00 / 04 ]'}
                </span>
                <div className="flex items-center gap-1.5">
                  <span className={`w-1.5 h-1.5 rounded-full ${!isManual ? 'bg-[#f97316] animate-pulse' : 'bg-emerald-500'}`} />
                  <span className="text-[9px] font-mono tracking-widest text-slate-500 uppercase font-semibold font-mono">
                    {!isManual ? 'AUTO-SCAN' : 'MANUAL'}
                  </span>
                </div>
              </div>

              {/* Body */}
              <div key={activeIndex} className="flex-1 py-4 animate-slide-fade">
                <h4 className="font-bold uppercase tracking-[0.15em] text-[#F5F0EB] text-xs">
                  {activePart.label}
                </h4>
                <p className="text-slate-200 text-[11px] mt-2 font-light leading-relaxed">
                  {activePart.desc}
                </p>
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between border-t border-white/5 pt-3">
                <div className="flex items-center gap-3">
                  <button onClick={handlePrev} className="p-1 rounded text-slate-500 hover:text-[#f97316] transition-all">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <div className="flex items-center gap-1.5">
                    {parts.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => handlePartClick(i)}
                        className={`h-1.5 rounded-full transition-all focus:outline-none ${
                          activeIndex === i ? 'bg-[#f97316] w-4' : 'bg-slate-700 w-1.5'
                        }`}
                      />
                    ))}
                  </div>
                  <button onClick={handleNext} className="p-1 rounded text-slate-500 hover:text-[#f97316] transition-all">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>

                {isManual && (
                  <button
                    onClick={handleResume}
                    className="inline-flex items-center gap-1 px-2 py-0.5 rounded border border-[#f97316]/30 bg-[#f97316]/10 text-[9px] font-mono tracking-widest text-[#f97316] hover:bg-[#f97316]/20 transition-all"
                  >
                    RESUME SCAN
                  </button>
                )}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default DroneParts;
