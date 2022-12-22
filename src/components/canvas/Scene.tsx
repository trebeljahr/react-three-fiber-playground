import { KeyboardControls, Preload } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'

export const surfaceLevel = 100
export const farUnderwater = 100
export const farOverwater = 1000

export default function Scene({ children, ...props }) {
  return (
    <KeyboardControls
      map={[
        { name: 'forward', keys: ['ArrowUp', 'w', 'W'] },
        { name: 'backward', keys: ['ArrowDown', 's', 'S'] },
        { name: 'left', keys: ['ArrowLeft', 'a', 'A'] },
        { name: 'right', keys: ['ArrowRight', 'd', 'D'] },
        { name: 'jump', keys: ['Space'] },
        { name: 'descend', keys: ['c', 'C'] },
        { name: 'sprint', keys: ['Shift'] },
        { name: 'attack', keys: ['F', 'f'] },
      ]}>
      <Canvas {...props} camera={{ far: farUnderwater, near: 0.1 }} gl={{ logarithmicDepthBuffer: true }}>
        <ambientLight />
        {children}
        <Preload all />
      </Canvas>
    </KeyboardControls>
  )
}
