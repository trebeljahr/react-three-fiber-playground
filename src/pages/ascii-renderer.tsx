import { Perf } from 'r3f-perf'
import { Trex } from '@components/canvas/Trex'
import { FlyingPlayerControls as FlyingPlayerControls } from '@components/canvas/FlyingPlayer'
import { Physics } from '@react-three/rapier'
import { CustomAsciiRenderer } from '@hacks/CustomASCIIRenderer'
import { useRef } from 'react'

export default function Page() {
  return <></>
}

Page.canvas = () => {
  return (
    <>
      <Perf />
      <Physics>
        <FlyingPlayerControls />
      </Physics>

      <spotLight position={[0, 20, 20]} angle={0.15} penumbra={1} />
      <pointLight position={[0, 20, -20]} />

      <color attach='background' args={['black']} />

      <Trex withAnimations={true} position={[0, 0, -20]} rotation={[0, Math.PI / 2, 0]} />
      <CustomAsciiRenderer resolution={0.2} />
    </>
  )
}
