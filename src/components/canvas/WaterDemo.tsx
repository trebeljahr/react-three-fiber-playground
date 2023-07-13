import { useUnderwaterContext, waterHeight } from '@hooks/UnderwaterContext'
import { Environment, Sky } from '@react-three/drei'
import { useThree } from '@react-three/fiber'
import { Physics } from '@react-three/rapier'
import { Perf } from 'r3f-perf'
import { useEffect, useRef } from 'react'
import { Color, FogExp2, Vector3 } from 'three'
import { Sky as SkyImpl } from 'three-stdlib'
import { Effects } from './Effects'
import { SwimmingPlayerControls } from './FlyingPlayer'
import { OceanSurface } from './Ocean'
import { farOverwater } from './Scene'
import { Terrain } from './Terrain'
import { UI } from './UI'
import { FishType, Fishs } from './Fish'

// color palette underwater
// #daf8e3
// #97ebdb
// #00c2c7
// #0086ad
// #005582

export default function WaterDemo() {
  const { scene } = useThree()
  const fogRef = useRef<FogExp2>()
  const colorRef = useRef<Color>()
  const skyRef = useRef<SkyImpl>()
  const { underwater } = useUnderwaterContext()

  useEffect(() => {
    console.log(underwater)
    if (!underwater) {
      fogRef.current.density = 0.000000001
      fogRef.current.density = 0.000000001
      fogRef.current.color = new Color('white')
      scene.background = new Color('white')
      console.log('setting background to white')
    } else {
      fogRef.current.density = 0.02
      fogRef.current.density = 0.02
      fogRef.current.color = new Color('#0086ad')
      scene.background = new Color('#0086ad')
      console.log('setting background to blue')
      colorRef.current.set('#0086ad')
    }
  }, [underwater, scene])

  return (
    <>
      {/* <Environment near={1} far={farOverwater} resolution={256} files='/skybox.hdr' /> */}
      <Environment preset='forest' />
      <UI />
      <Physics>
        <SwimmingPlayerControls />
      </Physics>
      <Perf />

      <fogExp2 ref={fogRef} attach='fog' color='#0086ad' density={0.02} />
      <color ref={colorRef} attach='background' args={['#0086ad']} />

      {/* <fogExp2 ref={fogRef} attach='fog' color='#0086ad' density={0.02} /> */}
      {/* <color ref={colorRef} attach='background' args={['#00332E']} /> */}

      <Terrain />
      <Fishs position={new Vector3(0, 10, 0)} />
      <Fishs position={new Vector3(10, 10, 0)} fishType={FishType.BlueTang} amountOfFish={300} />
      <Fishs position={new Vector3(5, 10, 5)} fishType={FishType.Manta} />
      <Fishs position={new Vector3(0, 10, 10)} fishType={FishType.DoctorFish} />
      <Fishs position={new Vector3(20, 10, 5)} fishType={FishType.Whale} />
      <Fishs position={new Vector3(15, 10, 10)} fishType={FishType.Shark} />
      <Fishs position={new Vector3(10, 5, 0)} fishType={FishType.Dolphin} />

      <OceanSurface position={[0, waterHeight, 0]} />

      {!underwater && <Sky ref={skyRef} azimuth={1} inclination={0.6} distance={2000} />}

      {/* <Effects /> */}
    </>
  )
}
