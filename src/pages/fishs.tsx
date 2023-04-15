import { Fishs } from '@components/canvas/Fish'
import { Box } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Perf } from 'r3f-perf'

export default function Page() {
  return (
    <Canvas camera={{ position: [0, 0, 50], near: 1, far: 3000 }}>
      <Fishs />
      <Box args={[1, 1, 1]}>
        <meshPhysicalMaterial color='pink' />
      </Box>
      <ambientLight />
      <fog color={0xffffff} near={100} far={1000} />
      <Perf />
      {/* <OrbitControls /> */}
      {/* <KeyboardControls
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
        <Physics>
          <SwimmingPlayer />
        </Physics>
      </KeyboardControls> */}
    </Canvas>
  )
}
