import { Whale } from '@models/fish_pack'
import { Environment, PointerLockControls, Sky } from '@react-three/drei'
import { Physics } from '@react-three/rapier'
import { MinecraftCreativeControlsPlayer, SwimmingPlayerControls } from './FlyingPlayer'
import { KelpForest, SingleKelpTile } from './Kelp'
import { Perf } from 'r3f-perf'
import { Terrain } from './Terrain'
import { DepthBufferEffect } from './DepthBuffer'
import { Effects } from './Effects'
import { useFrame, useThree } from '@react-three/fiber'
import { useRef, useState } from 'react'
import { Color, FogExp2 } from 'three'
import { Ocean } from './Ocean'
import { Sky as SkyImpl } from 'three-stdlib'
import { FBOParticles } from './FBOExperiments/Particles'

// color palette underwater
// #daf8e3
// #97ebdb
// #00c2c7
// #0086ad
// #005582

const waterHeight = 100

export default function FreeMovement() {
  const { camera, scene } = useThree()
  const fogRef = useRef<FogExp2>()
  const colorRef = useRef<Color>()
  const skyRef = useRef<SkyImpl>()

  const [underwater, setUnderwater] = useState(true)

  useFrame(() => {
    if (camera.position.y > waterHeight) {
      if (underwater) {
        //fogRef.current.color.equals(new Color('#0086ad'))) {
        setUnderwater(false)
        console.log('Transition out of water!!!')

        fogRef.current.density = 0.000001
        fogRef.current.density = 0.000001
        fogRef.current.color = new Color('white')
        scene.background = new Color('white')
      }
    } else {
      if (!underwater) {
        //fogRef.current.color.equals(new Color('white'))) {
        setUnderwater(true)

        fogRef.current.density = 0.02
        fogRef.current.density = 0.02
        fogRef.current.color = new Color('#0086ad')
        scene.background = new Color('#0086ad')
      }
    }
  })

  return (
    <>
      <Environment near={1} far={1000} resolution={256} preset='forest' />
      <Physics>
        {/* <MinecraftCreativeControlsPlayer /> */}
        <SwimmingPlayerControls />
      </Physics>
      <Perf />

      <fogExp2 ref={fogRef} attach='fog' color='#0086ad' density={0.02} />
      <color ref={colorRef} attach='background' args={['#0086ad']} />
      <Terrain />
      <Ocean position={[0, waterHeight, 0]} />

      {underwater ? (
        <></>
      ) : (
        <>
          <Sky ref={skyRef} azimuth={1} inclination={0.6} distance={2000} />
        </>
      )}

      {/* <Box args={[1, 1, 1]} /> */}
      {/* <InstancedWhale scale={[100, 100, 100]} position={[0, 0, 0]} /> */}
      {/* <Whale scale={[5, 5, 5]} position={[0, 60, 0]} /> */}
      {/* <KelpForest /> */}
      {/* <SingleKelp /> */}
      {/* <SingleKelpTile /> */}
      {/* <DepthBufferEffect /> */}
      {/* <Effects /> */}
    </>
  )
}
