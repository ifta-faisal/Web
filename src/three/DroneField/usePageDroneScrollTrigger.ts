import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import type { DockPercentTarget } from './DroneFieldBackground';

gsap.registerPlugin(ScrollTrigger);

interface UsePageDroneScrollTriggerProps {
  pageRef: React.RefObject<HTMLElement>;
  heroRef: React.RefObject<HTMLElement>;
  targetRef: React.MutableRefObject<DockPercentTarget>;
}

// Centered weave tuning — keeps the drone roughly in the middle of the
// viewport, drifting gently, rather than pinned to a corner. Each axis
// layers two sine waves at different frequency/phase so the path reads as
// organic flight rather than one perfectly regular oscillation.
const BASE_X = 50;
const AMP_X = 15;
const AMP_X2 = 6;
const FREQ_X = 3;
const FREQ_X2 = 7.3;
const BASE_Y = 42;
const AMP_Y = 13;
const AMP_Y2 = 5;
const FREQ_Y = 2.2;
const FREQ_Y2 = 5.6;
const SCALE = 1.6;

export const usePageDroneScrollTrigger = ({
  pageRef,
  heroRef,
  targetRef,
}: UsePageDroneScrollTriggerProps) => {
  useEffect(() => {
    if (!pageRef.current || !heroRef.current) return;

    const trigger = ScrollTrigger.create({
      trigger: pageRef.current,
      start: () => `${heroRef.current?.offsetHeight ?? 0} top`,
      end: 'bottom bottom',
      scrub: 1,
      invalidateOnRefresh: true,
      onUpdate: (self) => {
        const p = self.progress;
        const xWave =
          AMP_X * Math.sin(p * FREQ_X * Math.PI) +
          AMP_X2 * Math.sin(p * FREQ_X2 * Math.PI + 0.6);
        targetRef.current = {
          xPct: BASE_X + xWave,
          yPct:
            BASE_Y +
            AMP_Y * Math.sin(p * FREQ_Y * Math.PI + 1.2) +
            AMP_Y2 * Math.sin(p * FREQ_Y2 * Math.PI + 2.4),
          scale: SCALE,
          tiltY: Math.sin(p * FREQ_X * Math.PI) * 0.3,
        };
      },
    });

    return () => trigger.kill();
  }, [pageRef, heroRef, targetRef]);
};
