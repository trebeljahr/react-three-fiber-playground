import { FBOParticles } from '@components/canvas/FBOExperiments/Particles'
import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Vector3 } from 'three'

export default function Page() {
  return (
    <Canvas camera={{ position: new Vector3(1.5, 1.5, 2.5) }}>
      <ambientLight intensity={0.5} />
      <FBOParticles />
      <OrbitControls />
      <color attach='background' args={['#20222B']} />
    </Canvas>
  )
}
