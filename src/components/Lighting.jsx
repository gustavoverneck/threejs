

import React, { useRef, useState } from 'react';
import { useHelper, TransformControls } from '@react-three/drei';
import * as THREE from 'three';

const Lighting = ({ selected, setSelected, lightPos, setLightPos }) => {
  const dirLight = useRef();
  const sphereRef = useRef();
  useHelper(dirLight, THREE.DirectionalLightHelper, 1.0, 'yellow');

  // When the sphere moves, update the light position
  const handleObjectChange = () => {
    if (sphereRef.current) {
      const pos = sphereRef.current.position;
      setLightPos([pos.x, pos.y, pos.z]);
    }
  };

  return (
    <>
      <ambientLight intensity={1} />
      <directionalLight
        ref={dirLight}
        position={lightPos}
        intensity={1}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-bias={-0.0005}
        shadow-camera-near={1}
        shadow-camera-far={20}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />
      {selected ? (
        <TransformControls
          mode="translate"
          object={sphereRef}
          onObjectChange={handleObjectChange}
          onPointerMissed={() => setSelected(false)}
        >
          <mesh ref={sphereRef} position={lightPos}>
            <sphereGeometry args={[0.2, 16, 16]} />
            <meshStandardMaterial color="yellow" emissive="yellow" />
          </mesh>
        </TransformControls>
      ) : (
        <mesh ref={sphereRef} position={lightPos} onClick={() => setSelected(true)}>
          <sphereGeometry args={[0.2, 16, 16]} />
          <meshStandardMaterial color="yellow" emissive="yellow" />
        </mesh>
      )}
    </>
  );
};

export default Lighting;
