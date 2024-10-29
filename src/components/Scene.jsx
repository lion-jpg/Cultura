import React, { useRef, useEffect, useState } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { OrbitControls, Environment, Html } from '@react-three/drei';
import { Tvmejor } from './Tvmejor';
import { Character1 } from '../personaje/Character1';
// import Board from './Board';
import '../css/Scene.css';

// Componente para controlar las limitaciones de OrbitControls
const ControlledOrbitControls = () => {
  const { camera } = useThree();
  const controlsRef = useRef();

  useEffect(() => {
    if (controlsRef.current) {
      controlsRef.current.minPolarAngle = Math.PI / 4; // Limita el ángulo mínimo (45 grados)
      controlsRef.current.maxPolarAngle = Math.PI / 2.2; // Limita el ángulo máximo (90 grados)
      controlsRef.current.enableDamping = true; // Agrega suavidad al movimiento
      controlsRef.current.dampingFactor = 0.05; // Ajusta la suavidad del movimiento
      controlsRef.current.minDistance = 5; // Distancia mínima de zoom
      controlsRef.current.maxDistance = 15; // Distancia máxima de zoom
    }
  }, []);

  return <OrbitControls ref={controlsRef} camera={camera} />;
};

const Scene = () => {
  const [showBoard, setShowBoard] = useState(false);
  const [moveForward, setMoveForward] = useState(false);
  const [moveBackward, setMoveBackward] = useState(false);
  const [moveLeft, setMoveLeft] = useState(false);
  const [moveRight, setMoveRight] = useState(false);

  const handleCloseBoard = () => {
    setShowBoard(false);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      switch (event.key) {
        case 'w': setMoveForward(true); break;
        case 's': setMoveBackward(true); break;
        case 'a': setMoveLeft(true); break;
        case 'd': setMoveRight(true); break;
      }
    };

    const handleKeyUp = (event) => {
      switch (event.key) {
        case 'w': setMoveForward(false); break;
        case 's': setMoveBackward(false); break;
        case 'a': setMoveLeft(false); break;
        case 'd': setMoveRight(false); break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  return (
    <div className="scene-container">
      <Canvas camera={{zoom:1, position: [0, 2, 5], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <ControlledOrbitControls />
        <Environment files="/fondo/fondo111.hdr" ground={{ height: 10, radius: 100, scale: 20 }} EnvironmentIntensity={1} />
        <pointLight position={[35, 35, 5]} intensity={0.4} />
        <pointLight position={[35, 35, 5]} intensity={0.4} />
        <Tvmejor position={[0, -0.2, -5]} scale={0.012} rotation={[0, -3.2, 0]}/>
        <Character1 
          position={[0, -0.2, 5]} 
          scale={0.01} 
          rotation={[0, -3.2, 0]}
          moveForward={moveForward}
          moveBackward={moveBackward}
          moveLeft={moveLeft}
          moveRight={moveRight}
        />
        {/* ... Rest of the Scene component remains the same ... */}
      </Canvas>
    </div>
  );
};

export default Scene;
