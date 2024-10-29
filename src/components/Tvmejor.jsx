import React, { forwardRef, useRef, useEffect } from 'react'
import { useGLTF, Html } from '@react-three/drei'
import { AxesHelper } from 'three'
import Board from './Board'
import { useControls } from 'leva'
import { useNavigate } from 'react-router-dom'

export const Tvmejor = forwardRef((props, ref) => {
  const { nodes, materials } = useGLTF('./models/tvmejor.glb')
  const groupRef = useRef()
  const tvRef = useRef()
  const navigate = useNavigate()
  const { x, y, z } = useControls({
    x: { value: 1.7, min: -10, max: 10, step: 0.1 },
    y: { value: 0, min: -10, max: 10, step: 0.1 },
    z: { value: 0.5, min: -10, max: 10, step: 0.1 },
  })

  useEffect(() => {
    if (groupRef.current) {
      const axesHelper = new AxesHelper(5)
      axesHelper.position.set(...[x, y, z])
      groupRef.current.add(axesHelper)
    }
  }, [])

  const handleDoubleClick = () => {
    navigate('/board')
  }

  return (
    <group ref={ref} {...props} dispose={null}>
      <group ref={tvRef} position={[160.13, 56.563, -0.493]} rotation={[-Math.PI, 0.018, -Math.PI]} scale={12.242}>
        <mesh geometry={nodes.MaterialFBXASC032FBXASC0351003.geometry} material={materials.MaterialFBXASC032FBXASC0351} />
        <mesh geometry={nodes.MaterialFBXASC032FBXASC0351003_1.geometry} material={materials.MaterialFBXASC032FBXASC0357} />
        <mesh geometry={nodes.MaterialFBXASC032FBXASC0351003_2.geometry} material={materials.MaterialFBXASC032FBXASC035367FBXASC032SlotFBXASC032FBXASC0351_n} />
        <mesh geometry={nodes.MaterialFBXASC032FBXASC0351003_3.geometry} material={materials.MaterialFBXASC032FBXASC035367FBXASC032SlotFBXASC032FBXASC0352_n} />
        <mesh geometry={nodes.MaterialFBXASC032FBXASC0351003_4.geometry} material={materials.MaterialFBXASC032FBXASC0352} />
        <Html
          transform
          occlude
          position={[x, y, z]}
          style={{
            width: '370px',
            height: '250px',
            overflow: 'hidden',
          }}
        >
          <div 
            style={{ width: '100%', height: '100%', overflow: 'auto' }}
            onDoubleClick={handleDoubleClick}
          >
            <Board standalone={false} />
          </div>
        </Html>
      </group>
      <group rotation={[-Math.PI / 2, 0, Math.PI]}>
        <mesh geometry={nodes.floor002.geometry} material={materials.floor} />
        <mesh geometry={nodes.floor002_1.geometry} material={materials.Bullet_Shell} />
        <mesh geometry={nodes.floor002_2.geometry} material={materials.BrushedMetal_SHD} />
        <mesh geometry={nodes.floor002_3.geometry} material={materials.MaterialFBXASC032FBXASC0351_ncl1_1} />
        <mesh geometry={nodes.floor002_4.geometry} material={materials['BrushedMetal_SHD.001']} />
        <mesh geometry={nodes.floor002_5.geometry} material={materials['MaterialFBXASC032FBXASC0351_ncl1_1.001']} />
        <mesh geometry={nodes.floor002_6.geometry} material={materials.MaterialFBXASC032FBXASC0351} />
        <mesh geometry={nodes.floor002_7.geometry} material={materials.MaterialFBXASC032FBXASC0352} />
        <mesh geometry={nodes.floor002_8.geometry} material={materials.MaterialFBXASC032FBXASC0357} />
        <mesh geometry={nodes.floor002_9.geometry} material={materials.MaterialFBXASC032FBXASC0358} />
      </group>
      <group position={[-123.289, 51.669, -16.734]} rotation={[Math.PI, 0, Math.PI]} scale={9.971}>
        <mesh geometry={nodes.MaterialFBXASC032FBXASC0357002.geometry} material={materials.MaterialFBXASC032FBXASC0357} />
        <mesh geometry={nodes.MaterialFBXASC032FBXASC0357002_1.geometry} material={materials.MaterialFBXASC032FBXASC035367FBXASC032SlotFBXASC032FBXASC0351} />
        <mesh geometry={nodes.MaterialFBXASC032FBXASC0357002_2.geometry} material={materials.MaterialFBXASC032FBXASC035367FBXASC032SlotFBXASC032FBXASC0352} />
        <mesh geometry={nodes.MaterialFBXASC032FBXASC0357002_3.geometry} material={materials.MaterialFBXASC032FBXASC0351} />
        <mesh geometry={nodes.MaterialFBXASC032FBXASC0357002_4.geometry} material={materials.MaterialFBXASC032FBXASC0352} />
      </group>
    </group>
  )
})

useGLTF.preload('./models/tvmejor.glb')
