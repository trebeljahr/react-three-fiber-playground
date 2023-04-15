import { FlyingPlayer } from '@components/canvas/Controls/FlyingPlayer'
import { Trex } from '@components/canvas/Trex'
import { CustomAsciiRenderer } from '@hacks/CustomASCIIRenderer'
import { KeyboardControls } from '@react-three/drei'
import { Physics } from '@react-three/rapier'
import { Perf } from 'r3f-perf'

export default function Page() {
  return <></>
}

Page.canvas = () => {
  return (
    <>
      {/* <Perf /> */}
      <Physics>
        <FlyingPlayer />
      </Physics>

      <spotLight position={[0, 20, 20]} angle={0.15} penumbra={1} />
      <pointLight position={[0, 20, -20]} />

      <color attach='background' args={['black']} />

      <Trex withAnimationController={true} position={[0, 0, -20]} rotation={[0, Math.PI / 2, 0]} />
      <CustomAsciiRenderer resolution={0.2} />
    </>
  )
}
