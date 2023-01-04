import { Fishs } from '@components/canvas/Fish'
import { SwimmingPlayerControls } from '@components/canvas/FlyingPlayer'
import { KeyboardControls, OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Physics } from '@react-three/rapier'
import { Perf } from 'r3f-perf'
// import { OrbitControls } from 'three-stdlib'

export default function Page() {
  return (
    <Canvas camera={{ position: [0, 0, 350], near: 1, far: 3000 }}>
      <Fishs />
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
