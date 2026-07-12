import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface RotorProps {
  position: [number, number, number];
  direction: 1 | -1;
  speedRef: React.MutableRefObject<number>;
}

const bladeMaterial = new THREE.MeshPhysicalMaterial({
  color: '#94a3b8',
  roughness: 0.4,
  metalness: 0.5,
  clearcoat: 0.3,
  clearcoatRoughness: 0.3,
});

const hubMaterial = new THREE.MeshPhysicalMaterial({
  color: '#18181b',
  roughness: 0.25,
  metalness: 0.75,
  clearcoat: 0.5,
  clearcoatRoughness: 0.2,
});

const Rotor = ({ position, direction, speedRef }: RotorProps) => {
  const bladesRef = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (!bladesRef.current) return;
    bladesRef.current.rotation.y += direction * speedRef.current * delta;
  });

  return (
    <group position={position}>
      <mesh material={hubMaterial} castShadow>
        <cylinderGeometry args={[0.06, 0.06, 0.05, 16]} />
      </mesh>
      <group ref={bladesRef} position={[0, 0.03, 0]}>
        <mesh material={bladeMaterial} rotation={[0.08, 0, 0]}>
          <boxGeometry args={[0.5, 0.015, 0.06]} />
        </mesh>
        <mesh material={bladeMaterial} rotation={[0.08, Math.PI, 0]}>
          <boxGeometry args={[0.5, 0.015, 0.06]} />
        </mesh>
      </group>
    </group>
  );
};

export default Rotor;
