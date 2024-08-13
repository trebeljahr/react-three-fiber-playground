import { FBOParticles } from '@components/canvas/FBOExperiments/Particles'
import Scene from '@components/canvas/Scene'
import { OrbitControls } from '@react-three/drei'

export default function Page() {
  return (
    <Scene>
      <FBOParticles />
      <OrbitControls />
      <color attach='background' args={['#20222B']} />
    </Scene>
  )
}
