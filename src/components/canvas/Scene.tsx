import { KeyboardControls, Preload } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { PropsWithChildren } from 'react'

export const surfaceLevel = 100
export const farUnderwater = 50
export const farOverwater = 100

export default function Scene({ children, ...props }) {
  return (
    <Canvas {...props} camera={{ far: farUnderwater, near: 0.1 }} gl={{ logarithmicDepthBuffer: true }}>
      <ambientLight />
      {children}
      <Preload all />
    </Canvas>
  )
}
