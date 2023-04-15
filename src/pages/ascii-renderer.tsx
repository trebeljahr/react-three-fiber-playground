import { AsciiRenderer, OrbitControls, PointerLockControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Perf } from 'r3f-perf'
import { Trex } from '@components/canvas/Trex'
import { MinecraftCreativeControlsPlayer } from '@components/canvas/FlyingPlayer'
import { Physics } from '@react-three/rapier'

export default function Page() {
  return <></>
}

Page.canvas = () => {
  return (
    <>
      <Physics>
        <MinecraftCreativeControlsPlayer />
      </Physics>
      <PointerLockControls />

      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />

      <color attach='background' args={['black']} />

      <Stage adjustCamera intensity={0.5} shadows='contact' environment='city'>
        <Trex />
      </Stage>
      <AsciiRenderer resolution={0.4} />
    </>
  )
}
