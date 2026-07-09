import React, { useRef, useEffect } from 'react';
import { useScroll } from 'framer-motion';
import Lenis from 'lenis';
import { VideoScroll } from './VideoScroll';
import { useScrollVideo } from '../../hooks/useScrollVideo';

export const DroneShowcase: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Set up Lenis for incredibly smooth scrolling
  useEffect(() => {
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

    return () => {
      lenis.destroy();
    };
  }, []);

  // Initialize our custom GSAP video sync hook
  useScrollVideo({ videoRef, containerRef });

  // Use Framer Motion's useScroll to track progress for the Annotations
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <div className="bg-[#050505] font-sans antialiased text-white selection:bg-[#FF7A00] selection:text-white">
      {/* Fixed video background that stays pinned to the screen */}
      <div className="fixed inset-0 w-full h-screen pointer-events-none z-0">
        <VideoScroll videoRef={videoRef} />
      </div>

      {/* 
        This is the massive scrollable container. 
        800vh provides a long scroll track so the user can slowly scrub through the video.
      */}
      <div ref={containerRef} className="relative h-[800vh] w-full z-0 pointer-events-none" />

      {/* A spacer at the bottom just to show we can scroll past it */}
      <div className="relative z-10 h-screen bg-[#050505] flex items-center justify-center border-t border-white/10">
        <div className="text-center pointer-events-auto">
          <h2 className="text-4xl font-light text-white mb-4">Experience the Future of Flight</h2>
          <button className="px-8 py-3 bg-[#FF7A00] hover:bg-[#ff8c22] text-white rounded-full font-medium transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,122,0,0.3)]">
            Explore Specifications
          </button>
        </div>
      </div>
    </div>
  );
};
