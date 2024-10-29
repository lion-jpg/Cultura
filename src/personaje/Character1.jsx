import React, { useEffect, useRef, useState } from 'react'
import { useGraph, useFrame } from '@react-three/fiber'
import { useGLTF, useAnimations } from '@react-three/drei'
import { SkeletonUtils } from 'three-stdlib'
import * as THREE from 'three'

export function Character1({ position, rotation, moveForward, moveBackward, moveLeft, moveRight, obstacles = [], ...props }) {
  const group = useRef()
  const { scene, animations } = useGLTF('./models/glb/characters/character1.glb')
  
  // Añade este console.log para ver los nombres de las animaciones
  // console.log('Animations:', animations.map(anim => anim.name));

  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene])
  const { nodes, materials } = useGraph(clone)
  const { actions } = useAnimations(animations, group)
  const [autoMove, setAutoMove] = useState(true)
  const [autoMoveDirection, setAutoMoveDirection] = useState(new THREE.Vector3(0, 0, -1))

  useEffect(() => {
    actions.Walk.play();
  }, [actions]);

  const checkCollision = (newPosition) => {
    if (!obstacles || obstacles.length === 0) return false;

    const characterBoundingBox = new THREE.Box3().setFromObject(group.current)
    characterBoundingBox.min.set(newPosition.x - 0.5, newPosition.y - 1, newPosition.z - 0.5)
    characterBoundingBox.max.set(newPosition.x + 0.5, newPosition.y + 1, newPosition.z + 0.5)

    for (const obstacle of obstacles) {
      if (obstacle && obstacle.current) {
        const obstacleBoundingBox = new THREE.Box3().setFromObject(obstacle.current)
        if (characterBoundingBox.intersectsBox(obstacleBoundingBox)) {
          return true
        }
      }
    }
    return false
  }

  useFrame((state, delta) => {
    if (group.current) {
      const speed = 0.5 
      let newPosition = new THREE.Vector3().copy(group.current.position)

      if (moveForward || moveBackward || moveLeft || moveRight) {
        setAutoMove(false)
        if (moveForward) newPosition.z -= speed * delta
        if (moveBackward) newPosition.z += speed * delta
        if (moveLeft) newPosition.x -= speed * delta
        if (moveRight) newPosition.x += speed * delta
      } else {
        setAutoMove(true)
      }

      if (autoMove) {
        newPosition.add(autoMoveDirection.clone().multiplyScalar(speed * delta))
      }

      // Definir los límites del área
      const minX = -10, maxX = 10, minZ = -10, maxZ = 10

      // Cambiar dirección si llega a los límites
      if (newPosition.x <= minX || newPosition.x >= maxX) {
        setAutoMoveDirection(prev => new THREE.Vector3(-prev.x, prev.y, prev.z))
      }
      if (newPosition.z <= minZ || newPosition.z >= maxZ) {
        setAutoMoveDirection(prev => new THREE.Vector3(prev.x, prev.y, -prev.z))
      }

      // Limitar el movimiento dentro del área definida
      newPosition.x = Math.max(minX, Math.min(maxX, newPosition.x))
      newPosition.z = Math.max(minZ, Math.min(maxZ, newPosition.z))

      // Comprobar colisiones
      if (!checkCollision(newPosition)) {
        group.current.position.copy(newPosition)
      }

      // Rotar el personaje basado en la dirección del movimiento
      if (moveForward || moveBackward || moveLeft || moveRight || autoMove) {
        const movementDirection = new THREE.Vector3(
          (moveRight ? 1 : 0) - (moveLeft ? 1 : 0),
          0,
          (moveBackward ? 1 : 0) - (moveForward ? 1 : 0)
        )
        if (autoMove) {
          movementDirection.copy(autoMoveDirection)
        }
        if (movementDirection.length() > 0) {
          const angle = Math.atan2(movementDirection.x, movementDirection.z)
          group.current.rotation.y = angle
        }
      }
    }
  })

  return (
    <group ref={group} {...props} dispose={null} position={position} rotation={rotation}>
      <group name="AuxScene">
        <group name="entity_1">
          <group name="2" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <primitive object={nodes.mixamorigHips} />
          </group>
          <skinnedMesh name="2001" geometry={nodes['2001'].geometry} material={materials['characterTexture.006']} skeleton={nodes['2001'].skeleton} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('./models/glb/characters/character1.glb')
