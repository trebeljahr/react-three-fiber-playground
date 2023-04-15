import { useUnderwaterContext, waterHeight } from '@hooks/UnderwaterContext'
import { Environment, Sky } from '@react-three/drei'
import { useThree } from '@react-three/fiber'
import { Physics } from '@react-three/rapier'
import { Perf } from 'r3f-perf'
import { useEffect, useRef } from 'react'
import { Color } from 'three'
import { Sky as SkyImpl } from 'three-stdlib'
import { Effects } from './Effects'
import { SwimmingPlayerControls } from './FlyingPlayer'
import { Ocean } from './Ocean'
import { farOverwater } from './Scene'
import { Terrain } from './Terrain'
import { UI } from './UI'

// color palette underwater
// #daf8e3
// #97ebdb
// #00c2c7
// #0086ad
// #005582

export default function FreeMovement() {
  const { scene } = useThree()
  // const fogRef = useRef<FogExp2>()
  const colorRef = useRef<Color>()
  const skyRef = useRef<SkyImpl>()
  const { underwater } = useUnderwaterContext()

  useEffect(() => {
    if (!underwater) {
      // fogRef.current.density = 0.000001
      // fogRef.current.density = 0.000001
      // fogRef.current.color = new Color('white')
      scene.background = new Color('white')
    } else {
      // fogRef.current.density = 0.02
      // fogRef.current.density = 0.02
      // fogRef.current.color = new Color('#0086ad')
      scene.background = new Color('#0086ad')
    }
  }, [underwater, scene])

  return (
    <>
      <Environment near={1} far={farOverwater} resolution={256} files='/skybox.hdr' />
      <UI />
      <Physics>
        <SwimmingPlayerControls />
      </Physics>
      <Perf />

      {/* <fogExp2 ref={fogRef} attach='fog' color='#0086ad' density={0.02} /> */}
      <Terrain />

      <Ocean position={[0, waterHeight, 0]} />

      {underwater ? (
        <color ref={colorRef} attach='background' args={['#00332E']} />
      ) : (
        <>
          <Sky ref={skyRef} azimuth={1} inclination={0.6} distance={2000} />
        </>
      )}

      <Effects />
    </>
  )
}
