import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface UseScrollVideoProps {
  videoRef: React.RefObject<HTMLVideoElement>;
  containerRef: React.RefObject<HTMLDivElement>;
}

export const useScrollVideo = ({ videoRef, containerRef }: UseScrollVideoProps) => {
  useEffect(() => {
    if (!videoRef.current || !containerRef.current) return;

    const video = videoRef.current;
    const container = containerRef.current;

    // Force the browser to preload the video
    video.preload = 'auto';

    let ctx: gsap.Context;

    const initGSAP = () => {
      // Create a GSAP context for easy cleanup
      ctx = gsap.context(() => {
        // We tween the currentTime property directly
        gsap.fromTo(
          video,
          { currentTime: 0 },
          {
            currentTime: video.duration || 1, // fallback to 1 if duration is instantly unavailable
            ease: 'none',
            scrollTrigger: {
              trigger: container,
              start: 'top top',
              end: 'bottom bottom',
              scrub: 2.5, // Increased to 2.5 for maximum buttery smoothness
            },
          }
        );
      }, container);
    };

    // If metadata is already loaded, init immediately
    if (video.readyState >= 1) {
      initGSAP();
    } else {
      // Otherwise wait for the metadata to get the proper duration
      video.addEventListener('loadedmetadata', initGSAP);
    }

    return () => {
      video.removeEventListener('loadedmetadata', initGSAP);
      if (ctx) ctx.revert(); // Cleans up all GSAP tweens and ScrollTriggers
    };
  }, [videoRef, containerRef]);
};

