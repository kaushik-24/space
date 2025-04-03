
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Hello(props) {
  const { nodes, materials } = useGLTF('/hello.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text.geometry}
        material={materials['Material.001']}
      />
    </group>
  )
}

useGLTF.preload('/hello.glb')
