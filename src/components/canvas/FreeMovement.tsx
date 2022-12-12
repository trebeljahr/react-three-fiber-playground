import { Physics } from '@react-three/rapier'
import { FlyingPlayer } from './FlyingPlayer'
import { PointerLockControls } from '@react-three/drei'
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
      <fogExp2 attach='fog' color='#0086ad' density={0.03} />
      <color attach='background' args={['#0086ad']} />

      {/* <InstancedWhale scale={[100, 100, 100]} position={[0, 0, 0]} /> */}
      <Whale scale={[10, 10, 10]} position={[0, 50, 0]} />

      <KelpForest />
      <Plane />

      {/* <Effects /> */}
    </>
  )
}
