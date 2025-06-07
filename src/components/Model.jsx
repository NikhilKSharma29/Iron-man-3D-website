import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';

function MyModel(props) {
  const { scene } = useGLTF('/iron_man_mark_85.glb');
  const modelRef = useRef();
  useFrame(({ mouse }) => {
    if (modelRef.current) {
      // Smooth motion: interpolate rotation based on cursor
      modelRef.current.rotation.y = mouse.x * Math.PI * 0.5; // Left/Right
      modelRef.current.rotation.x = mouse.y * Math.PI * -0.016; // Up/Down (slower)
    }
  });
  return <primitive ref={modelRef} object={scene} {...props} />;
}

// Preload model for performance
useGLTF.preload('/iron_man_mark_85.glb');

export default function Model() {
  return (
    <Canvas 
      className='model' 
      camera={{ 
        position: [0, 1, 5], 
        fov: 10,
        near: 0.1,
        far: 1000,
        
      }}
      style={{
        width: '100vw',
        height: '100vh',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 4
      }}
    >
      <ambientLight />
      <directionalLight position={[5, 5, 5]}   intensity={15}/>
      <OrbitControls 
        enableZoom={false} 
        enablePan={false} 
        enableRotate={false}
        minDistance={40}
        maxDistance={40}
        minPolarAngle={Math.PI / 2}
        maxPolarAngle={Math.PI / 2}        
      />
      <MyModel 
        scale={10} 
        position={[0, -16, 0]} 
        rotation={[0, Math.PI, 0]} 
            />
    </Canvas>
  );
}

