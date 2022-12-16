import { useFrame, useThree } from '@react-three/fiber'
import { EffectComposer, GodRays } from '@react-three/postprocessing'
import { BlendFunction, KernelSize, Resolution } from 'postprocessing'
import { forwardRef, MutableRefObject, useEffect, useState } from 'react'
import { BufferGeometry, Mesh, MeshBasicMaterial, SphereGeometry } from 'three'
import { UnderWaterFogEffect } from './UnderwaterFog'

const Sun = forwardRef(function Sun(_, forwardRef: MutableRefObject<Mesh>) {
  useFrame(() => {
    if (forwardRef.current) {
      console.log(forwardRef)
      forwardRef.current.rotation.z -= 0.01
    }
  })

  let blob = new SphereGeometry(20, 4, 4) as BufferGeometry

  return (
    <mesh
      ref={forwardRef}
      position={[0, 100, -15]}
      geometry={blob}
      material={new MeshBasicMaterial({ color: 0x00ffff })}
    />
  )
})

export function Effects() {
  const [current, ref] = useState<Mesh>()
  const { gl } = useThree()

  useEffect(() => {
    // gl === WebGLRenderer
    // gl.info.calls
    // gl.logarithmicDepthBuffer = true
    console.log(gl.info)
  }, [gl])
  return (
    <>
      <Sun ref={ref} />
      {current && (
        <EffectComposer multisampling={0}>
          <UnderWaterFogEffect />
          {/* <GodRays
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
          /> */}
        </EffectComposer>
      )}
    </>
  )
}
