import { Fishs } from '@components/canvas/Fish'
import { Box } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Perf } from 'r3f-perf'
import { Vector3 } from 'three'

export default function Page() {
  return (
    <Canvas camera={{ position: new Vector3(0, 0, 50), near: 1, far: 3000 }}>
      <Fishs />
      <Box args={[1, 1, 1]} getObjectsByProperty={undefined} getVertexPosition={undefined}>
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
          <SwimmingPlayerControls />
        </Physics>
      </KeyboardControls> */}
    </Canvas>
  )
}
