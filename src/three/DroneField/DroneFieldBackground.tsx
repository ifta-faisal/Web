import { lazy, Suspense, useEffect, useRef, useState } from 'react';
import { usePageDroneScrollTrigger } from './usePageDroneScrollTrigger';

const DroneFieldCanvas = lazy(() => import('./DroneFieldCanvas'));

export interface DockPercentTarget {
  xPct: number;
  yPct: number;
  scale: number;
  tiltY: number;
}

interface DroneFieldBackgroundProps {
  pageRef: React.RefObject<HTMLElement>;
  heroRef: React.RefObject<HTMLElement>;
}

const supportsWebGL = () => {
  try {
    const canvas = document.createElement('canvas');
    return !!(canvas.getContext('webgl2') || canvas.getContext('webgl'));
  } catch {
    return false;
  }
};

const shouldUse3D = () => {
  if (typeof window === 'undefined') return false;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return false;
  const lowEnd =
    (navigator.hardwareConcurrency ?? 8) <= 4 && window.innerWidth < 768;
  if (lowEnd) return false;
  return supportsWebGL();
};

const DroneFieldBackground = ({ pageRef, heroRef }: DroneFieldBackgroundProps) => {
  const pctTargetRef = useRef<DockPercentTarget>({ xPct: 50, yPct: 42, scale: 1.1, tiltY: 0 });
  const [enable3D] = useState(shouldUse3D);
  const [tabVisible, setTabVisible] = useState(true);

  usePageDroneScrollTrigger({ pageRef, heroRef, targetRef: pctTargetRef });

  useEffect(() => {
    const handleVisibility = () => setTabVisible(document.visibilityState === 'visible');
    document.addEventListener('visibilitychange', handleVisibility);
    return () => document.removeEventListener('visibilitychange', handleVisibility);
  }, []);

  if (!enable3D) return null;

  return (
    <div
      className="fixed inset-0 -z-10 pointer-events-none"
      style={{ willChange: 'transform' }}
    >
      <Suspense fallback={null}>
        <DroneFieldCanvas pctTargetRef={pctTargetRef} active={tabVisible} />
      </Suspense>
    </div>
  );
};

export default DroneFieldBackground;
