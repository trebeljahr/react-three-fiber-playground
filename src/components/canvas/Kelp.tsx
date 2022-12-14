import { useKelp } from '@models/Kelp4'
import { useFrame, useThree } from '@react-three/fiber'
import kelpVert from '@shaders/kelp.vert'
import FastPoissonDiskSampling from 'fast-2d-poisson-disk-sampling'
import { useEffect, useMemo, useRef } from 'react'
import { BufferGeometry, InstancedMesh, MeshPhysicalMaterial, Object3D, ShaderMaterial } from 'three'
import CustomShaderMaterial from 'three-custom-shader-material'
import CustomShaderMaterialType from 'three-custom-shader-material/vanilla'
import { randFloat } from 'three/src/math/MathUtils'

export function CustomKelpShaderMaterial() {
  const materialRef = useRef<CustomShaderMaterialType>()

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
      baseMaterial={MeshPhysicalMaterial}
      vertexShader={kelpVert}
      uniforms={uniforms}
      flatShading
      color={'#4CBB17'}
    />
  )
}

export function KelpForest({ size = 150 }) {
  const { nodes } = useKelp()

  const points = useMemo(() => {
    const sampler = new FastPoissonDiskSampling({
      shape: [size, size],
      radius: 8,
      tries: 10,
    })
    const result = sampler.fill()
    return result
  }, [size])

  const kelpGeometry = nodes.Object_7.geometry

  const ref = useRef<InstancedMesh<BufferGeometry, ShaderMaterial>>()

  useEffect(() => {
    const temp = new Object3D()

    for (let i = 0; i < points.length; i++) {
      const scale = randFloat(0.2, 0.3)

      //   temp.position.set(0, 0, 0)
      // temp.position.set(randFloat(-size, size), 0, randFloat(-size, size))
      const [x, z] = points[i]
      temp.position.set(x - size / 2, 0, z - size / 2)
      temp.rotation.set(0, randFloat(0.2, 0.5), 0)
      temp.scale.set(scale, scale, scale)

      temp.updateMatrix()

      ref.current.setMatrixAt(i, temp.matrix)
    }

    ref.current.instanceMatrix.needsUpdate = true
  }, [size, points])

  return (
    <instancedMesh ref={ref} args={[kelpGeometry, null, points.length]}>
      <CustomKelpShaderMaterial />
    </instancedMesh>
  )
}
