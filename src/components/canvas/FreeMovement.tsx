import { Physics } from '@react-three/rapier'
import { FlyingPlayer } from './FlyingPlayer'
import { FollowingTrex } from './Trex'
import { PointerLockControls, Sky } from '@react-three/drei'
import { Plane } from './ThirdPersonDemo'
import { Trees } from './TreeStuff'
import { BufferGeometry, Group, Matrix4, Mesh, MeshBasicMaterial, SphereGeometry } from 'three'
import { useFrame } from '@react-three/fiber'
import { forwardRef, MutableRefObject, useState } from 'react'
import { EffectComposer, GodRays } from '@react-three/postprocessing'
import { BlendFunction, Resizer, KernelSize, Resolution } from 'postprocessing'
import { mergeBufferGeometries } from 'three-stdlib'

// color palette underwater
// #daf8e3
// #97ebdb
// #00c2c7
// #0086ad
// #005582

const Sun = forwardRef(function Sun(_, forwardRef: MutableRefObject<Mesh>) {
  useFrame(() => {
    if (forwardRef.current) {
      console.log(forwardRef)
      forwardRef.current.rotation.z -= 0.01
    }
  })

  let blob = new SphereGeometry(1, 4, 4) as BufferGeometry

  for (let x = 0; x < 20; x++) {
    const sphereGeometry = new SphereGeometry(1, 4, 4)

    sphereGeometry.applyMatrix4(
      new Matrix4().makeTranslation(
        Math.sin(((Math.PI * 2) / 20) * x) * 10,
        Math.cos(((Math.PI * 2) / 20) * x) * 10,
        0,
      ),
    )

    blob = mergeBufferGeometries([blob, sphereGeometry])
  }

  return (
    <mesh
      ref={forwardRef}
      position={[0, 0, -15]}
      geometry={blob}
      material={new MeshBasicMaterial({ color: 0x00ffff })}
    />
  )
})

function Effects() {
  const [current, ref] = useState<Mesh>()

  return (
    <>
      <Sun ref={ref} />
      {current && (
        <EffectComposer multisampling={0}>
          <GodRays
            sun={current}
            blendFunction={BlendFunction.ADD}
            samples={50}
            density={0.97}
            decay={0.97}
            weight={0.5}
            exposure={0.75}
            clampMax={1}
            width={Resolution.AUTO_SIZE}
            height={Resolution.AUTO_SIZE}
            kernelSize={KernelSize.SMALL}
            blur={0.5}
          />
        </EffectComposer>
      )}
    </>
  )
}

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

      <Effects />
    </>
  )
}
