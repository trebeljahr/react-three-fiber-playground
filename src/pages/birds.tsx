import { Birds } from '@components/canvas/Boids/Birds'
import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Perf } from 'r3f-perf'

export default function Page() {
  return (
    <Canvas camera={{ position: [0, 0, 350], near: 1, far: 3000 }}>
      {/* <ambientLight intensity={0.5} /> */}
      <Birds />
      <fog color={0xffffff} near={100} far={1000} />
      {/* <OrbitControls /> */}
      <Perf />
    </Canvas>
  )
}
