import React, { useState, useCallback } from 'react';
import { TransformControls } from '@react-three/drei';

const Ground = ({ size, setSize }) => {
  const [selected, setSelected] = useState(false);

  // Deselect on pointer missed
  const handlePointerMissed = useCallback(() => setSelected(false), []);

  // Deselect on Escape
  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelected(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Render
  return selected ? (
    <TransformControls mode="scale">
      <mesh
        receiveShadow
        position={[0, -0.51, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[1, 1, 1]}
        onPointerMissed={handlePointerMissed}
      >
        <planeGeometry args={size} />
        <meshStandardMaterial color={0x99ccff} />
      </mesh>
    </TransformControls>
  ) : (
    <mesh
      receiveShadow
      position={[0, -0.51, 0]}
      rotation={[-Math.PI / 2, 0, 0]}
      onClick={() => setSelected(true)}
      scale={[1, 1, 1]}
    >
      <planeGeometry args={size} />
      <meshStandardMaterial color={0xcccccc} />
    </mesh>
  );
};

export default Ground;
