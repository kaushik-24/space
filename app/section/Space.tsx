'use client'

import { OrbitControls, Stars } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'

const Space = () => {
  return (
    <>
    <Canvas
      style={{ height: '100vh' }} // Full-screen canvas
      camera={{ position: [0, 20, 50], fov: 60 }} // Adjust camera position
    >
      {/* Add lighting */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <Stars />
      {/* Optional: Add controls and background */}
      <OrbitControls autoRotate/>
    </Canvas>
    </>
  )
}

export default Space
