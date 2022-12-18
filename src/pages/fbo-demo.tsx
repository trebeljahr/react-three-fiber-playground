import { FBOParticles } from '@components/canvas/FBOExperiments/Particles'
import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'

export default function Page() {
  return (
    <Canvas camera={{ position: [1.5, 1.5, 2.5] }}>
      <ambientLight intensity={0.5} />
      <FBOParticles />
      <OrbitControls />
      <color attach='background' args={['#20222B']} />
    </Canvas>
  )
}
