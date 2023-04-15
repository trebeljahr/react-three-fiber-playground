import { AsciiRenderer, PointerLockControls, Stage } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import { Trex } from '@components/canvas/Trex'
import { MinecraftCreativeControlsPlayer } from '@components/canvas/FlyingPlayer'
import { Physics } from '@react-three/rapier'
import { CustomAsciiRenderer } from '@hacks/CustomASCIIRenderer'

export default function Page() {
  return <></>
}

Page.canvas = () => {
  return (
    <>
      <Perf />
      <Physics>
        <MinecraftCreativeControlsPlayer />
      </Physics>
      {/* <PointerLockControls /> */}

      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />

      <color attach='background' args={['black']} />

      <Trex withAnimations={true} position={[0, 0, -20]} rotation={[0, Math.PI / 2, 0]} />
      <CustomAsciiRenderer resolution={0.2} />
    </>
  )
}
