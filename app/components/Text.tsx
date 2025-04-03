'use client'
import { Text } from '@react-three/drei'
import React from 'react'

const Word = () => {
  return (
   <Text
          position={[0, 20, 50]} // Position in 3D space (x, y, z)
          color="white" // Text color
          fontSize={150} // Size of the text
          maxWidth={200} // Maximum width before wrapping
          lineHeight={1} // Line height
          letterSpacing={0.02} // Spacing between letters
          textAlign="center" // Alignment
          anchorX="center" // Horizontal anchor point
          anchorY="middle" // Vertical anchor point
        >
          Welcome to My 3D World
        </Text> 
  )
}

export default Word
