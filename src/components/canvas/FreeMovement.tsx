import { Whale } from '@models/fish_pack'
import { Environment, PointerLockControls } from '@react-three/drei'
import { Physics } from '@react-three/rapier'
import { FlyingPlayer } from './FlyingPlayer'
import { KelpForest } from './Kelp'
import { Plane } from './ThirdPersonDemo'

// color palette underwater
// #daf8e3
// #97ebdb
// #00c2c7
// #0086ad
// #005582

export default function FreeMovement() {
  return (
    <>
      <Environment near={1} far={1000} resolution={256} preset='forest' />
      <Physics>
        <FlyingPlayer />
      </Physics>
      <PointerLockControls />
      <fogExp2 attach='fog' color='#0086ad' density={0.02} />
      <color attach='background' args={['#0086ad']} />
      {/* <Sky azimuth={1} inclination={0.6} distance={1000} /> */}
      {/* <Box args={[1, 1, 1]} /> */}
      {/* <InstancedWhale scale={[100, 100, 100]} position={[0, 0, 0]} /> */}
      <Whale scale={[5, 5, 5]} position={[0, 60, 0]} />
      <KelpForest />

      {/* <SingleKelp /> */}
      <Plane />
      {/* <Effects /> */}
    </>
  )
}
