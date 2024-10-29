import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { ScrollControls, useScroll } from '@react-three/drei';
import { Mapa3 }  from './Mapa3';
import '../css/ModeloCanvas.css'; // Asegúrate de crear este archivo CSS

function MovingMesh() {
  const meshRef = useRef();
  const scroll = useScroll();

  useFrame(() => {
    const scrollY = scroll.offset;
    meshRef.current.position.y = scrollY * 1;
  });

  return (
    <mesh ref={meshRef} position={[3.9, 2, 0]}>
      <Mapa3 /> 
    </mesh>
  );
}

const ModeloCanvas = () => {
  return (
    <div className="modelo-canvas-container">
      <Canvas
        camera={{
          fov: 10,
        }}
      >
        <ScrollControls pages={2} damping={1}>
          <ambientLight intensity={3} />
          <mesh position={[-0.4, -0.5, 0]} rotation={[0, 5, 0]} scale={0.7}>
            <MovingMesh />
          </mesh>
        </ScrollControls>
      </Canvas>
    </div>
  );
};

export default ModeloCanvas;
