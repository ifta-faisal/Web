import React, { useEffect, useRef } from 'react';
import droneVideo from '../assets/video/Drone_Details.mp4';

const DroneParts = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        window.dispatchEvent(new CustomEvent('hide-header', { detail: { hide: entry.isIntersecting } }));
      },
      { threshold: 0.3 } // Hide when at least 30% of the video section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
      window.dispatchEvent(new CustomEvent('hide-header', { detail: { hide: false } }));
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-transparent relative overflow-hidden">
      <div className="absolute inset-0 bg-radial-warm opacity-30 pointer-events-none" />
      <div className="absolute top-0 right-0 w-72 sm:w-96 h-72 sm:h-96 bg-[#f97316] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 animate-fade-in mb-12">
        {/* Header */}
        <div className="text-center">
          <div className="section-label mb-3">Anatomy</div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
            <span>Inside Our Drone</span>
          </h2>
          <div className="w-16 sm:w-24 h-1.5 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </div>
      </div>

      {/* Full Screen Content Container */}
      <div className="w-full relative z-10 animate-fade-in border-y border-gray-800/50 bg-gray-900/50 aspect-[20/9] shadow-2xl shadow-primary/20">
        <video
          src={droneVideo}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default DroneParts;
