
import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Ground from './Ground';
import Lighting from './Lighting';


const Canva = () => {
  // State for ground size
  const [groundSize, setGroundSize] = useState([10, 10]);

  return (
    <div style={{ width: 1000, height: 1000, position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        style={{ width: '100%', height: '100%' }}
      >
        <Lighting />
        <Ground size={groundSize} setSize={setGroundSize} />
        <OrbitControls
          enablePan={true}
          mouseButtons={{
            LEFT: 2, // pan with left mouse
            MIDDLE: 1, // dolly/zoom with middle mouse
            RIGHT: 0, // rotate with right mouse
          }}
        />
      </Canvas>
    </div>
  );
};

export default Canva;