import { Environment, Lightformer } from '@react-three/drei';

// Synthetic, procedurally-generated environment (no network fetch — unlike
// preset="..." which loads a remote HDR file and can fail/crash offline).
const SceneLighting = () => {
  return (
    <>
      <Environment resolution={128} background={false}>
        <Lightformer intensity={2.5} color="#f5f0eb" position={[0, 4, 2]} scale={[8, 2, 1]} />
        <Lightformer intensity={3} color="#f97316" position={[-4, 1, 3]} rotation={[0, Math.PI / 2, 0]} scale={[6, 2, 1]} />
        <Lightformer intensity={2} color="#dc2626" position={[4, -1, -3]} rotation={[0, -Math.PI / 2, 0]} scale={[6, 2, 1]} />
      </Environment>
      <hemisphereLight args={['#f5f0eb', '#020617', 0.3]} />
      <directionalLight position={[4, 5, 3]} intensity={2.5} color="#f97316" />
      <pointLight position={[-3, -1, -2]} intensity={4} color="#dc2626" distance={12} />
    </>
  );
};

export default SceneLighting;
