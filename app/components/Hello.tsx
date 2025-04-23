
import React from 'react'
import { useGLTF } from '@react-three/drei'
import { ThreeElements } from '@react-three/fiber'

export function Hello(props: ThreeElements['group'] ) {
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
