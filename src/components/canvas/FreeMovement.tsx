import { Physics } from '@react-three/rapier'
import { FlyingPlayer } from './FlyingPlayer'
import { FollowingTrex } from './Trex'
import { PointerLockControls, Sky } from '@react-three/drei'
import { Plane } from './ThirdPersonDemo'
import { Trees } from './TreeStuff'

// color palette underwater
// #daf8e3
// #97ebdb
// #00c2c7
// #0086ad
// #005582

export default function FreeMovement() {
  return (
    <>
      {/* <Sky azimuth={1} inclination={0.6} distance={1000} /> */}

      <Physics>
        <FlyingPlayer />
      </Physics>
      <PointerLockControls />
      <fogExp2 attach='fog' color='#0086ad' density={0.03} />
      <color attach='background' args={['#0086ad']} />

      <FollowingTrex />

      <Trees />
      <Plane />
    </>
  )
}
