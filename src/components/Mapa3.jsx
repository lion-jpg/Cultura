import React, { useRef, useState, useEffect } from 'react';
import { useGLTF, useAnimations  } from '@react-three/drei';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate
import Pagina from '../components/Pagina';
import '../css/Scene.css';

export function Mapa3(props) {
  const group = React.useRef()
  const { nodes, materials, animations } = useGLTF('./models/mapa3.glb')
  const { actions } = useAnimations(animations, group)
  const [showPage, setShowPage] = useState(false);
  const navigate = useNavigate(); // Inicializa useNavigate
  const meshRef1 = useRef();
  const meshRef2 = useRef();
  const meshRef3 = useRef();
  const meshRef4 = useRef();
  const meshRef5 = useRef();
  const meshRef6 = useRef();
  const meshRef7 = useRef();
  const meshRef8 = useRef();
  const meshRef9 = useRef();
  const meshRef10 = useRef();
  const meshRef11 = useRef();
  const meshRef12 = useRef();
  const meshRef13 = useRef();
  const meshRef14 = useRef();

  useEffect(() => {

    actions.ubicas1.play();
  },);
  useEffect(() => {
    actions.ubicas2.play();
  },)
  ;useEffect(() => {
    actions.ubicas3.play();
  },);
  useEffect(() => {
    actions.ubicas4.play();
  },);
  useEffect(() => {
    actions.ubicas5.play();
  },);
  useEffect(() => {
    actions.ubicas6.play();
  },);
  useEffect(() => {
    actions.ubicas7.play();
  },);
  useEffect(() => {
    actions.ubicas8.play();
  },);
  useEffect(() => {
    actions.ubicas9.play();
  },);
  useEffect(() => {
    actions.ubicas10.play();
  },);
  useEffect(() => {
    actions.ubicas11.play();
  },);
  useEffect(() => {
    actions.ubicas12.play();
  },);
  useEffect(() => {
    actions.ubicas13.play();
  },);
  useEffect(() => {
    actions.ubicas14.play();
  },);
  const handlePointerOver1 = () => {
    if (meshRef1.current) {
      meshRef1.current.scale.set(1.1, 1.1, 1.381); // Aumenta la escala al pasar el ratón
    }
  };
  const handlePointerOut1 = () => {
    if (meshRef1.current) {
      meshRef1.current.scale.set(1, 1, 1.281); // Vuelve a la escala original
    }
  };
  const handlePointerOver2 = () => {
    if (meshRef2.current) {
      meshRef2.current.scale.set(1.1, 1.1, 1.381); // Aumenta la escala al pasar el ratón
    }
  };
  const handlePointerOut2 = () => {
    if (meshRef2.current) {
      meshRef2.current.scale.set(1, 1, 1.281); // Vuelve a la escala original
    }
  };
  const handlePointerOver3 = () => {
    if (meshRef3.current) {
      meshRef3.current.scale.set(1.063, 1.063, 1.333); // Aumenta la escala al pasar el ratón
    }
  };
  const handlePointerOut3 = () => {
    if (meshRef3.current) {
      meshRef3.current.scale.set(0.963, 0.963, 1.233); // Vuelve a la escala original
    }
  };
  const handlePointerOver4 = () => {
    if (meshRef4.current) {
      meshRef4.current.scale.set(1.1, 1.1, 1.381); // Aumenta la escala al pasar el ratón
    }
  };
  const handlePointerOut4 = () => {
    if (meshRef4.current) {
      meshRef4.current.scale.set(1, 1, 1.281); // Vuelve a la escala original
    }
  };
  const handlePointerOver5 = () => {
    if (meshRef5.current) {
      meshRef5.current.scale.set(1.1, 1.1, 1.381); // Aumenta la escala al pasar el ratón
    }
  };
  const handlePointerOut5 = () => {
    if (meshRef5.current) {
      meshRef5.current.scale.set(1, 1, 1.281); // Vuelve a la escala original
    }
  };
  const handlePointerOver6 = () => {
    if (meshRef6.current) {
      meshRef6.current.scale.set(1.1, 1.1, 1.381); // Aumenta la escala al pasar el ratón
    }
  };
  const handlePointerOut6 = () => {
    if (meshRef6.current) {
      meshRef6.current.scale.set(1, 1, 1.281); // Vuelve a la escala original
    }
  };
  const handlePointerOver7 = () => {
    if (meshRef7.current) {
      meshRef7.current.scale.set(1.05, 1.05, 1.341); // Aumenta la escala al pasar el ratón
    }
  };
  const handlePointerOut7 = () => {
    if (meshRef7.current) {
      meshRef7.current.scale.set(1, 1, 1.281); // Vuelve a la escala original
    }
  };
  const handlePointerOver8 = () => {
    if (meshRef8.current) {
      meshRef8.current.scale.set(1.1, 1.1, 1.381); // Aumenta la escala al pasar el ratón
    }
  };
  const handlePointerOut8 = () => {
    if (meshRef8.current) {
      meshRef8.current.scale.set(1, 1, 1.281); // Vuelve a la escala original
    }
  };
  const handlePointerOver9 = () => {
    if (meshRef9.current) {
      meshRef9.current.scale.set(1.033, 1.033, 1.296); // Aumenta la escala al pasar el ratón
    }
  };
  const handlePointerOut9 = () => {
    if (meshRef9.current) {
      meshRef9.current.scale.set(0.933, 0.933, 1.196); // Vuelve a la escala original
    }
  };
  const handlePointerOver10 = () => {
    if (meshRef10.current) {
      meshRef10.current.scale.set(1.1, 1.1, 1.381); // Aumenta la escala al pasar el ratón
    }
  };
  const handlePointerOut10 = () => {
    if (meshRef10.current) {
      meshRef10.current.scale.set(1, 1, 1.281); // Vuelve a la escala original
    }
  };
  const handlePointerOver11 = () => {
    if (meshRef11.current) {
      meshRef11.current.scale.set(1.1, 1.1, 1.381); // Aumenta la escala al pasar el ratón
    }
  };
  const handlePointerOut11 = () => {
    if (meshRef11.current) {
      meshRef11.current.scale.set(1, 1, 1.281); // Vuelve a la escala original
    }
  };
  const handlePointerOver12 = () => {
    if (meshRef12.current) {
      meshRef12.current.scale.set(1.1, 1.1, 1.381); // Aumenta la escala al pasar el ratón
    }
  };
  const handlePointerOut12 = () => {
    if (meshRef12.current) {
      meshRef12.current.scale.set(1, 1, 1.281); // Vuelve a la escala original
    }
  };
  const handlePointerOver13 = () => {
    if (meshRef13.current) {
      meshRef13.current.scale.set(1.05, 1.05, 1.341); // Aumenta la escala al pasar el ratón
    }
  };
  const handlePointerOut13 = () => {
    if (meshRef13.current) {
      meshRef13.current.scale.set(1, 1, 1.281); // Vuelve a la escala original
    }
  };
  const handlePointerOver14 = () => {
    if (meshRef14.current) {
      meshRef14.current.scale.set(1.1, 1.1, 1.381); // Aumenta la escala al pasar el ratón
    }
  };
  const handlePointerOut14 = () => {
    if (meshRef14.current) {
      meshRef14.current.scale.set(1, 1, 1.281); // Vuelve a la escala original
    }
  };

  const handleClick = () => {
    navigate('/pagina'); // Redirige a la ruta 'turismo'
  };

  const handleClosePage = () => {
    setShowPage(false);
  };

  if (showPage) {
    return <Pagina onClose={handleClosePage} />;
  }
  return (
    <group ref={group} {...props} dispose={null}>
      
        <group name="distrito7" position={[-0.003, 0.399, 0.763]} rotation={[-Math.PI, 0, -Math.PI / 2]} scale={[1, 1, 1.281]} onPointerOver={handlePointerOver2}
        onPointerOut={handlePointerOut2}>
          <mesh name="Vert057" geometry={nodes.Vert057.geometry} material={materials['Material.072']} />
          <mesh ref={meshRef2} name="Vert057_1" geometry={nodes.Vert057_1.geometry} material={materials['Material.085']} />
        </group>

        <group name="distrito14" position={[-0.003, 0.359, 0.673]} rotation={[-Math.PI, 0, -Math.PI / 2]} scale={[0.963, 0.963, 1.233]} onPointerOver={handlePointerOver3}
        onPointerOut={handlePointerOut3}>
          <mesh name="Vert058" geometry={nodes.Vert058.geometry} material={materials['Material.073']} />
          <mesh ref={meshRef3} name="Vert058_1" geometry={nodes.Vert058_1.geometry} material={materials['Material.085']} />
        </group>
        <group name="distrito9" position={[-0.003, 0.334, 0.869]} rotation={[-Math.PI, 0, -Math.PI / 2]} scale={[1, 1, 1.281]} onPointerOver={handlePointerOver4}
        onPointerOut={handlePointerOut4}>
          <mesh name="Vert059" geometry={nodes.Vert059.geometry} material={materials['Material.074']} />
          <mesh ref={meshRef4} name="Vert059_1" geometry={nodes.Vert059_1.geometry} material={materials['Material.085']} />
        </group>

        <group name="distrito11" position={[-0.003, 0.276, 0.801]} rotation={[-Math.PI, 0, -Math.PI / 2]} scale={[1, 1, 1.281]} onPointerOver={handlePointerOver5}
        onPointerOut={handlePointerOut5}>
          <mesh name="Vert060" geometry={nodes.Vert060.geometry} material={materials['Material.075']} />
          <mesh ref={meshRef5}  name="Vert060_1" geometry={nodes.Vert060_1.geometry} material={materials['Material.085']} />
        </group>

        <group name="distrito5" position={[-0.003, 0.386, 0.541]} rotation={[-Math.PI, 0, -Math.PI / 2]} scale={[1, 1, 1.281]} onPointerOver={handlePointerOver6}
        onPointerOut={handlePointerOut6}>
          <mesh name="Vert061" geometry={nodes.Vert061.geometry} material={materials['Material.076']} />
          <mesh ref={meshRef6} name="Vert061_1" geometry={nodes.Vert061_1.geometry} material={materials['Material.085']} />
        </group>
        <group name="distrito4" position={[-0.003, 0.289, 0.652]} rotation={[-Math.PI, 0, -Math.PI / 2]} scale={[1, 1, 1.281]} onPointerOver={handlePointerOver7}
        onPointerOut={handlePointerOut7}>
          <mesh name="Vert062" geometry={nodes.Vert062.geometry} material={materials['Material.077']} />
          <mesh ref={meshRef7} name="Vert062_1" geometry={nodes.Vert062_1.geometry} material={materials['Material.085']} />
        </group>
        <group name="distrito12" position={[-0.003, 0.172, 0.667]} rotation={[-Math.PI, 0, -Math.PI / 2]} scale={[1, 1, 1.281]} onPointerOver={handlePointerOver8}
        onPointerOut={handlePointerOut8}>
          <mesh name="Vert063" geometry={nodes.Vert063.geometry} material={materials['Material.078']} />
          <mesh ref={meshRef8} name="Vert063_1" geometry={nodes.Vert063_1.geometry} material={materials['Material.085']} />
        </group>

        <group name="distrito3" position={[-0.003, 0.235, 0.596]} rotation={[-Math.PI, 0, -Math.PI / 2]} scale={[0.933, 0.933, 1.196]} onPointerOver={handlePointerOver9}
        onPointerOut={handlePointerOut9}>
          <mesh name="Vert064" geometry={nodes.Vert064.geometry} material={materials['Material.079']} />
          <mesh ref={meshRef9} name="Vert064_1" geometry={nodes.Vert064_1.geometry} material={materials['Material.085']} />
        </group>

        <group name="distrito6" position={[-0.003, 0.322, 0.504]} rotation={[-Math.PI, 0, -Math.PI / 2]} scale={[1, 1, 1.281]} onPointerOver={handlePointerOver10}
        onPointerOut={handlePointerOut10}>
          <mesh name="Vert065" geometry={nodes.Vert065.geometry} material={materials['Material.080']} />
          <mesh ref={meshRef10} name="Vert065_1" geometry={nodes.Vert065_1.geometry} material={materials['Material.085']} />
        </group>

        <group name="distrito1" position={[-0.003, 0.246, 0.44]} rotation={[-Math.PI, 0, -Math.PI / 2]} scale={[1, 1, 1.281]} onPointerOver={handlePointerOver11}
        onPointerOut={handlePointerOut11}>
          <mesh  name="Vert066" geometry={nodes.Vert066.geometry} material={materials['Material.081']} />
          <mesh ref={meshRef11} name="Vert066_1" geometry={nodes.Vert066_1.geometry} material={materials['Material.085']} />
        </group>

        <group name="distrito2" position={[-0.003, 0.198, 0.522]} rotation={[-Math.PI, 0, -Math.PI / 2]} scale={[1, 1, 1.281]} onPointerOver={handlePointerOver12}
        onPointerOut={handlePointerOut12}>
          <mesh name="Vert067" geometry={nodes.Vert067.geometry} material={materials['Material.082']} />
          <mesh ref={meshRef12} name="Vert067_1" geometry={nodes.Vert067_1.geometry} material={materials['Material.085']} />
        </group>

        <group name="distrito8" position={[-0.003, 0.065, 0.542]} rotation={[-Math.PI, 0, -Math.PI / 2]} scale={[1, 1, 1.281]} onPointerOver={handlePointerOver13}
        onPointerOut={handlePointerOut13}>
          <mesh name="Vert068" geometry={nodes.Vert068.geometry} material={materials['Material.083']} />
          <mesh ref={meshRef13} name="Vert068_1" geometry={nodes.Vert068_1.geometry} material={materials['Material.085']} />
        </group>
        <group name="distrito10" position={[0, 0.563, 0.54]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.03, 0.023, 0.023]} onPointerOver={handlePointerOver14}
        onPointerOut={handlePointerOut14} onClick={handleClick}>
          <mesh ref={meshRef14} name="Text" geometry={nodes.Text.geometry} material={materials['Material.085']} />
          <mesh name="Text_1" geometry={nodes.Text_1.geometry} material={materials['Material.071']} />
        </group>

        <group name="distrito13" position={[0, -0.048, 0.429]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.03, 0.023, 0.023]} onPointerOver={handlePointerOver1}
        onPointerOut={handlePointerOut1}   >
          <mesh ref={meshRef1} name="Text013" geometry={nodes.Text013.geometry} material={materials['Material.085']} />
          <mesh name="Text013_1" geometry={nodes.Text013_1.geometry} material={materials['Material.084']}  />
        </group>
        <group name="ubica2" position={[0.007, 0.427, 0.758]} rotation={[0, -0.033, 0]} scale={0.011}>
          <mesh name="BézierCircle016" geometry={nodes.BézierCircle016.geometry} material={materials['Material.088']} />
          <mesh name="BézierCircle016_1" geometry={nodes.BézierCircle016_1.geometry} material={materials['Material.086']} />
          <mesh name="BézierCircle016_2" geometry={nodes.BézierCircle016_2.geometry} material={materials['Material.087']} />
        </group>
        <group name="ubica3" position={[0.007, 0.39, 0.661]} rotation={[0, -0.033, 0]} scale={0.011}>
          <mesh name="BézierCircle017" geometry={nodes.BézierCircle017.geometry} material={materials['Material.088']} />
          <mesh name="BézierCircle017_1" geometry={nodes.BézierCircle017_1.geometry} material={materials['Material.086']} />
          <mesh name="BézierCircle017_2" geometry={nodes.BézierCircle017_2.geometry} material={materials['Material.087']} />
        </group>
        <group name="ubica4" position={[0.007, 0.364, 0.581]} rotation={[0, -0.033, 0]} scale={0.011}>
          <mesh name="BézierCircle018" geometry={nodes.BézierCircle018.geometry} material={materials['Material.088']} />
          <mesh name="BézierCircle018_1" geometry={nodes.BézierCircle018_1.geometry} material={materials['Material.086']} />
          <mesh name="BézierCircle018_2" geometry={nodes.BézierCircle018_2.geometry} material={materials['Material.087']} />
        </group>
        <group name="ubica5" position={[0.007, 0.315, 0.646]} rotation={[0, -0.033, 0]} scale={0.011}>
          <mesh name="BézierCircle019" geometry={nodes.BézierCircle019.geometry} material={materials['Material.088']} />
          <mesh name="BézierCircle019_1" geometry={nodes.BézierCircle019_1.geometry} material={materials['Material.086']} />
          <mesh name="BézierCircle019_2" geometry={nodes.BézierCircle019_2.geometry} material={materials['Material.087']} />
        </group>
        <group name="ubica6" position={[0.007, 0.358, 0.867]} rotation={[0, -0.033, 0]} scale={0.011}>
          <mesh name="BézierCircle020" geometry={nodes.BézierCircle020.geometry} material={materials['Material.088']} />
          <mesh name="BézierCircle020_1" geometry={nodes.BézierCircle020_1.geometry} material={materials['Material.086']} />
          <mesh name="BézierCircle020_2" geometry={nodes.BézierCircle020_2.geometry} material={materials['Material.087']} />
        </group>
        <group name="ubica7" position={[0.007, 0.305, 0.798]} rotation={[0, -0.033, 0]} scale={0.011}>
          <mesh name="BézierCircle021" geometry={nodes.BézierCircle021.geometry} material={materials['Material.088']} />
          <mesh name="BézierCircle021_1" geometry={nodes.BézierCircle021_1.geometry} material={materials['Material.086']} />
          <mesh name="BézierCircle021_2" geometry={nodes.BézierCircle021_2.geometry} material={materials['Material.087']} />
        </group>
        <group name="ubica8" position={[0.007, 0.343, 0.49]} rotation={[0, -0.033, 0]} scale={0.011}>
          <mesh name="BézierCircle022" geometry={nodes.BézierCircle022.geometry} material={materials['Material.088']} />
          <mesh name="BézierCircle022_1" geometry={nodes.BézierCircle022_1.geometry} material={materials['Material.086']} />
          <mesh name="BézierCircle022_2" geometry={nodes.BézierCircle022_2.geometry} material={materials['Material.087']} />
        </group>
        <group name="ubica9" position={[0.007, 0.249, 0.603]} rotation={[0, -0.033, 0]} scale={0.011}>
          <mesh name="BézierCircle023" geometry={nodes.BézierCircle023.geometry} material={materials['Material.088']} />
          <mesh name="BézierCircle023_1" geometry={nodes.BézierCircle023_1.geometry} material={materials['Material.086']} />
          <mesh name="BézierCircle023_2" geometry={nodes.BézierCircle023_2.geometry} material={materials['Material.087']} />
        </group>
        <group name="ubica10" position={[0.007, 0.206, 0.514]} rotation={[0, -0.033, 0]} scale={0.011}>
          <mesh name="BézierCircle024" geometry={nodes.BézierCircle024.geometry} material={materials['Material.088']} />
          <mesh name="BézierCircle024_1" geometry={nodes.BézierCircle024_1.geometry} material={materials['Material.086']} />
          <mesh name="BézierCircle024_2" geometry={nodes.BézierCircle024_2.geometry} material={materials['Material.087']} />
        </group>
        <group name="ubica11" position={[0.007, 0.267, 0.431]} rotation={[0, -0.033, 0]} scale={0.011}>
          <mesh name="BézierCircle025" geometry={nodes.BézierCircle025.geometry} material={materials['Material.088']} />
          <mesh name="BézierCircle025_1" geometry={nodes.BézierCircle025_1.geometry} material={materials['Material.086']} />
          <mesh name="BézierCircle025_2" geometry={nodes.BézierCircle025_2.geometry} material={materials['Material.087']} />
        </group>
        <group name="ubica12" position={[0.007, 0.191, 0.657]} rotation={[0, -0.033, 0]} scale={0.011}>
          <mesh name="BézierCircle026" geometry={nodes.BézierCircle026.geometry} material={materials['Material.088']} />
          <mesh name="BézierCircle026_1" geometry={nodes.BézierCircle026_1.geometry} material={materials['Material.086']} />
          <mesh name="BézierCircle026_2" geometry={nodes.BézierCircle026_2.geometry} material={materials['Material.087']} />
        </group>
        <group name="ubica13" position={[0.007, 0.091, 0.566]} rotation={[0, -0.033, 0]} scale={0.011}>
          <mesh name="BézierCircle027" geometry={nodes.BézierCircle027.geometry} material={materials['Material.088']} />
          <mesh name="BézierCircle027_1" geometry={nodes.BézierCircle027_1.geometry} material={materials['Material.086']} />
          <mesh name="BézierCircle027_2" geometry={nodes.BézierCircle027_2.geometry} material={materials['Material.087']} />
        </group>
        <group name="ubica14" position={[0.007, -0.024, 0.414]} rotation={[0, -0.033, 0]} scale={0.011}>
          <mesh name="BézierCircle028" geometry={nodes.BézierCircle028.geometry} material={materials['Material.088']} />
          <mesh name="BézierCircle028_1" geometry={nodes.BézierCircle028_1.geometry} material={materials['Material.086']} />
          <mesh name="BézierCircle028_2" geometry={nodes.BézierCircle028_2.geometry} material={materials['Material.087']} />
        </group>
        <group name="ubica1" position={[0.007, 0.598, 0.54]} rotation={[0, -0.104, 0]} scale={0.011}>
          <mesh name="BézierCircle029" geometry={nodes.BézierCircle029.geometry} material={materials['Material.095']} />
          <mesh name="BézierCircle029_1" geometry={nodes.BézierCircle029_1.geometry} material={materials['Material.096']} />
          <mesh name="BézierCircle029_2" geometry={nodes.BézierCircle029_2.geometry} material={materials['Material.097']} />
        </group>
    </group>
  )
}

useGLTF.preload('./models/mapa3.glb')

