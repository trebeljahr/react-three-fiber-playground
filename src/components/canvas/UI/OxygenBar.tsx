import { useFrame } from '@react-three/fiber'
import { useMemo, useRef } from 'react'
import { MeshBasicMaterial, MeshPhysicalMaterial } from 'three'
import CustomShaderMaterial from 'three-custom-shader-material'
import CustomShaderMaterialType from 'three-custom-shader-material/vanilla'
import oxygenFrag from './oxygen.frag'

export function CustomKelpShaderMaterial() {
  const materialRef = useRef<CustomShaderMaterialType>()
  const oxygenAmount = useRef(60)

  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = state.clock.elapsedTime
    }
  })

  const uniforms = useMemo(
    () => ({
      uTime: {
        value: 0,
      },
    }),
    [],
  )

  return (
    <CustomShaderMaterial
      ref={materialRef}
      baseMaterial={MeshBasicMaterial}
      fragmentShader={oxygenFrag}
      uniforms={uniforms}
      flatShading
      color={'#4CBB17'}
    />
  )
}
