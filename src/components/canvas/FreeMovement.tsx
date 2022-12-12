import { Physics } from '@react-three/rapier'
import { FlyingPlayer } from './FlyingPlayer'
import { Box, PointerLockControls } from '@react-three/drei'
import { Plane } from './ThirdPersonDemo'
import { KelpForest, Trees } from './TreeStuff'
import { Whale } from '@models/fish_pack'
import { Effects } from './Effects'

// color palette underwater
// #daf8e3
// #97ebdb
// #00c2c7
// #0086ad
// #005582

export default function FreeMovement() {
  return (
    <>
      <Physics>
        <FlyingPlayer />
      </Physics>
      <PointerLockControls />
      <fogExp2 attach='fog' color='#0086ad' density={0.02} />
      <color attach='background' args={['#0086ad']} />

      {/* <Box args={[1, 1, 1]} /> */}
      {/* <InstancedWhale scale={[100, 100, 100]} position={[0, 0, 0]} /> */}
      <Whale scale={[5, 5, 5]} position={[0, 60, 0]} />

      <KelpForest />
      <Plane />

      {/* <Effects /> */}
    </>
  )
}
