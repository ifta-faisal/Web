import { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import Rotor from './Rotor';

export interface DroneDockTarget {
  x: number;
  y: number;
  scale: number;
  tiltY: number;
}

interface DroneProps {
  targetRef: React.MutableRefObject<DroneDockTarget>;
  pointerRef?: React.MutableRefObject<{ x: number; y: number }>;
}

const bodyMaterial = new THREE.MeshPhysicalMaterial({
  color: '#1e293b',
  roughness: 0.22,
  metalness: 0.65,
  clearcoat: 0.7,
  clearcoatRoughness: 0.15,
});

const armMaterial = new THREE.MeshPhysicalMaterial({
  color: '#18181b',
  roughness: 0.3,
  metalness: 0.6,
  clearcoat: 0.5,
  clearcoatRoughness: 0.2,
});

const podMaterial = new THREE.MeshPhysicalMaterial({
  color: '#18181b',
  roughness: 0.25,
  metalness: 0.7,
  clearcoat: 0.6,
  clearcoatRoughness: 0.15,
});

const legMaterial = new THREE.MeshPhysicalMaterial({
  color: '#0a0a0a',
  roughness: 0.45,
  metalness: 0.35,
});

const strutMaterial = new THREE.MeshPhysicalMaterial({
  color: '#f97316',
  emissive: '#ea580c',
  emissiveIntensity: 0.5,
  roughness: 0.3,
  metalness: 0.4,
  clearcoat: 0.6,
});

const podiumMaterial = new THREE.MeshPhysicalMaterial({
  color: '#ea580c',
  emissive: '#ea580c',
  emissiveIntensity: 0.4,
  roughness: 0.3,
  metalness: 0.4,
  clearcoat: 0.6,
});

const mastTipMaterial = new THREE.MeshStandardMaterial({
  color: '#67e8f9',
  emissive: '#67e8f9',
  emissiveIntensity: 1.4,
});

const ledFrontMaterial = new THREE.MeshStandardMaterial({
  color: '#f97316',
  emissive: '#f97316',
  emissiveIntensity: 1.6,
});

const ledRearMaterial = new THREE.MeshStandardMaterial({
  color: '#dc2626',
  emissive: '#dc2626',
  emissiveIntensity: 1.6,
});

const ARM_ANGLES = [45, 135, 225, 315];
const ARM_LENGTH = 1.1;
const ROTOR_IDLE_SPEED = 10;
const ROTOR_TRANSIT_SPEED = 34;

// spring constants — slightly underdamped for a lively, physical settle
// rather than a robotic exponential ease
const POS_STIFFNESS = 45;
const POS_DAMPING = 8.5;
const ROT_STIFFNESS = 22;
const ROT_DAMPING = 6;
const SCALE_STIFFNESS = 55;
const SCALE_DAMPING = 13;

const LED = ({
  position,
  front,
}: {
  position: [number, number, number];
  front: boolean;
}) => (
  <mesh position={position} material={front ? ledFrontMaterial : ledRearMaterial}>
    <sphereGeometry args={[0.05, 12, 12]} />
  </mesh>
);

const Drone = ({ targetRef, pointerRef }: DroneProps) => {
  const groupRef = useRef<THREE.Group>(null);
  const ledPulseRef = useRef(0);
  const rotorSpeedRef = useRef(ROTOR_IDLE_SPEED);

  const spring = useRef({
    x: 0,
    y: 0,
    scale: 0.8,
    tiltY: 0,
    vx: 0,
    vy: 0,
    vScale: 0,
    vTiltY: 0,
  });

  const armEnds = useMemo(
    () =>
      ARM_ANGLES.map((deg) => {
        const rad = (deg * Math.PI) / 180;
        return [
          Math.cos(rad) * ARM_LENGTH,
          -0.1,
          Math.sin(rad) * ARM_LENGTH,
        ] as [number, number, number];
      }),
    []
  );

  const strutEnds = useMemo(
    () =>
      ARM_ANGLES.map((deg) => {
        const rad = (deg * Math.PI) / 180;
        return [
          Math.cos(rad) * ARM_LENGTH * 0.32,
          0.04,
          Math.sin(rad) * ARM_LENGTH * 0.32,
        ] as [number, number, number];
      }),
    []
  );

  useFrame((state, rawDelta) => {
    ledPulseRef.current += rawDelta;
    const pulse = 0.9 + Math.sin(ledPulseRef.current * 3) * 0.5;
    ledFrontMaterial.emissiveIntensity = pulse;
    ledRearMaterial.emissiveIntensity = pulse;

    if (!groupRef.current) return;

    const dt = Math.min(rawDelta, 0.05);
    const target = targetRef.current;
    const s = spring.current;
    const t = state.clock.elapsedTime;

    // idle "always flying" drift — layered noise so the drone never looks
    // fully static even while scroll is still, independent of the dock target
    const idleX = Math.sin(t * 0.7) * 0.12 + Math.sin(t * 1.7 + 1.4) * 0.05;
    const idleY = Math.sin(t * 1.3) * 0.08 + Math.sin(t * 2.3 + 0.7) * 0.04;

    // critically-underdamped spring integration (semi-implicit Euler) for a
    // natural, lively settle instead of a flat exponential ease
    const ax = (target.x + idleX - s.x) * POS_STIFFNESS - s.vx * POS_DAMPING;
    s.vx += ax * dt;
    s.x += s.vx * dt;

    const ay = (target.y + idleY - s.y) * POS_STIFFNESS - s.vy * POS_DAMPING;
    s.vy += ay * dt;
    s.y += s.vy * dt;

    const aTilt = (target.tiltY - s.tiltY) * ROT_STIFFNESS - s.vTiltY * ROT_DAMPING;
    s.vTiltY += aTilt * dt;
    s.tiltY += s.vTiltY * dt;

    const aScale = (target.scale - s.scale) * SCALE_STIFFNESS - s.vScale * SCALE_DAMPING;
    s.vScale += aScale * dt;
    s.scale += s.vScale * dt;

    groupRef.current.position.set(s.x, s.y, 0);
    groupRef.current.scale.setScalar(Math.max(s.scale, 0.05));

    // pointer parallax — drone subtly leans toward the cursor, layered on
    // top of the scroll-driven heading for a touch of interactivity
    const pointer = pointerRef?.current ?? { x: 0, y: 0 };
    groupRef.current.rotation.y = s.tiltY + pointer.x * 0.25;

    // bank into the direction of travel, driven by the spring's own velocity
    const bank = THREE.MathUtils.clamp(s.vx * -0.16, -0.55, 0.55);
    // pitch nose up/down with vertical velocity, like a real climb/descent
    const pitch = THREE.MathUtils.clamp(s.vy * 0.14, -0.35, 0.35);
    const easeAmt = 1 - Math.pow(0.0005, dt);
    groupRef.current.rotation.z = THREE.MathUtils.lerp(
      groupRef.current.rotation.z,
      bank,
      easeAmt
    );
    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      pitch - pointer.y * 0.15,
      easeAmt
    );

    const transitAmount = THREE.MathUtils.clamp(
      (Math.abs(s.vx) + Math.abs(s.vy)) * 0.9,
      0,
      1
    );
    rotorSpeedRef.current = THREE.MathUtils.lerp(
      ROTOR_IDLE_SPEED,
      ROTOR_TRANSIT_SPEED,
      transitAmount
    );
  });

  return (
    <group ref={groupRef}>
      {/* hull — smooth rounded pod instead of a faceted hull */}
      <mesh
        material={bodyMaterial}
        rotation={[0, 0, Math.PI / 2]}
        scale={[1, 1, 0.82]}
        castShadow
      >
        <capsuleGeometry args={[0.3, 0.5, 8, 16]} />
      </mesh>
      {/* base plate */}
      <mesh material={armMaterial} position={[0, -0.15, 0]}>
        <cylinderGeometry args={[0.4, 0.45, 0.08, 16]} />
      </mesh>

      {/* GPS antenna masts */}
      {[-0.18, 0.18].map((x) => (
        <group key={x} position={[x, 0.35, -0.05]}>
          <mesh material={armMaterial}>
            <cylinderGeometry args={[0.02, 0.02, 0.35, 12]} />
          </mesh>
          <mesh material={mastTipMaterial} position={[0, 0.2, 0]}>
            <sphereGeometry args={[0.05, 12, 12]} />
          </mesh>
        </group>
      ))}

      {/* payload/camera pod */}
      <mesh material={podiumMaterial} position={[0, -0.32, 0.12]}>
        <boxGeometry args={[0.22, 0.16, 0.2]} />
      </mesh>

      {/* landing legs */}
      {ARM_ANGLES.map((deg) => {
        const rad = (deg * Math.PI) / 180;
        return (
          <mesh
            key={`leg-${deg}`}
            material={legMaterial}
            position={[Math.cos(rad) * 0.35, -0.42, Math.sin(rad) * 0.35]}
            rotation={[0.5, -rad, 0]}
          >
            <cylinderGeometry args={[0.018, 0.018, 0.55, 10]} />
          </mesh>
        );
      })}

      {ARM_ANGLES.map((deg, i) => {
        const rad = (deg * Math.PI) / 180;
        const mid: [number, number, number] = [
          (Math.cos(rad) * ARM_LENGTH) / 2,
          -0.05,
          (Math.sin(rad) * ARM_LENGTH) / 2,
        ];
        return (
          <group key={deg}>
            {/* orange V-strut bracket from hub to arm root */}
            <mesh
              material={strutMaterial}
              position={strutEnds[i]}
              rotation={[0, -rad, Math.PI / 2 - 0.3]}
            >
              <cylinderGeometry args={[0.025, 0.025, ARM_LENGTH * 0.4, 10]} />
            </mesh>
            <mesh
              material={armMaterial}
              position={mid}
              rotation={[0, -rad, Math.PI / 2 - 0.1]}
            >
              <capsuleGeometry args={[0.04, ARM_LENGTH * 0.85, 6, 12]} />
            </mesh>
            <mesh material={podMaterial} position={armEnds[i]}>
              <cylinderGeometry args={[0.08, 0.08, 0.28, 16]} />
            </mesh>
            {/* coaxial rotor pair — upper + lower prop, matching the X8 reference */}
            <Rotor
              position={[armEnds[i][0], armEnds[i][1] + 0.16, armEnds[i][2]]}
              direction={i % 2 === 0 ? 1 : -1}
              speedRef={rotorSpeedRef}
            />
            <Rotor
              position={[armEnds[i][0], armEnds[i][1] - 0.04, armEnds[i][2]]}
              direction={i % 2 === 0 ? -1 : 1}
              speedRef={rotorSpeedRef}
            />
            <LED position={armEnds[i]} front={i < 2} />
          </group>
        );
      })}

      <LED position={[0.68, 0, 0]} front />
      <LED position={[-0.68, 0, 0]} front={false} />
    </group>
  );
};

export default Drone;
