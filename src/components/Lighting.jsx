import React from 'react';

const Lighting = () => (
  <>
    <ambientLight intensity={0.5} />
    <directionalLight position={[5, 5, 5]} intensity={0.7} />
    {/* Add light helpers here if needed */}
  </>
);

export default Lighting;
