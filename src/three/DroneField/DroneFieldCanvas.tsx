import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { PerformanceMonitor } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import SceneLighting from './SceneLighting';
import Drone, { DroneDockTarget } from './Drone';
import type { DockPercentTarget } from './DroneFieldBackground';

interface DroneFieldCanvasProps {
  pctTargetRef: React.MutableRefObject<DockPercentTarget>;
  active: boolean;
}

// Converts the normalized screen-space dock target (0-100 percent) into a
// Three.js world position using R3F's viewport helper, which already gives
// the visible world-unit size at the z=0 plane — no manual FOV trig needed,
// and it stays correct automatically across resizes.
const DockTargetBridge = ({
  pctTargetRef,
  worldTargetRef,
}: {
  pctTargetRef: React.MutableRefObject<DockPercentTarget>;
  worldTargetRef: React.MutableRefObject<DroneDockTarget>;
}) => {
  const viewport = useThree((state) => state.viewport);

  useFrame(() => {
    const pct = pctTargetRef.current;
    worldTargetRef.current = {
      x: (pct.xPct / 100 - 0.5) * viewport.width,
      y: (0.5 - pct.yPct / 100) * viewport.height,
      scale: pct.scale,
      tiltY: pct.tiltY,
    };
  });

  return null;
};

const DroneFieldCanvas = ({ pctTargetRef, active }: DroneFieldCanvasProps) => {
  const [dpr, setDpr] = useState<[number, number]>([1, 1.5]);
  const worldTargetRef = useRef<DroneDockTarget>({ x: 0, y: 0, scale: 0.8, tiltY: 0 });
  const pointerRef = useRef({ x: 0, y: 0 });

  // canvas itself is pointer-events:none (it's a background layer), so track
  // cursor position via a plain window listener instead of R3F's own pointer
  useEffect(() => {
    const handlePointerMove = (e: PointerEvent) => {
      pointerRef.current = {
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1,
      };
    };
    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    return () => window.removeEventListener('pointermove', handlePointerMove);
  }, []);

  return (
    <Canvas
      dpr={dpr}
      gl={{ antialias: true, alpha: true, toneMapping: THREE.ACESFilmicToneMapping }}
      camera={{ fov: 50, position: [0, 0.5, 9.5] }}
      frameloop={active ? 'always' : 'demand'}
      style={{ position: 'absolute', inset: 0 }}
    >
      <PerformanceMonitor
        onDecline={() => setDpr([1, 1])}
        onIncline={() => setDpr([1, 1.5])}
      />
      <fog attach="fog" args={['#020617', 5, 15]} />
      <SceneLighting />
      <DockTargetBridge pctTargetRef={pctTargetRef} worldTargetRef={worldTargetRef} />
      <Drone targetRef={worldTargetRef} pointerRef={pointerRef} />
      <EffectComposer multisampling={0}>
        <Bloom
          intensity={0.9}
          luminanceThreshold={0.35}
          luminanceSmoothing={0.2}
          mipmapBlur
        />
      </EffectComposer>
    </Canvas>
  );
};

export default DroneFieldCanvas;
