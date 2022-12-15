import { useKelp } from '@models/Kelp-Leaves'
import { useFrame } from '@react-three/fiber'
import kelpFrag from '@shaders/kelp.frag'
import kelpVert from '@shaders/kelp.vert'

import FastPoissonDiskSampling from 'fast-2d-poisson-disk-sampling'
import { memo, useEffect, useLayoutEffect, useMemo, useRef } from 'react'
import {
  BufferGeometry,
  DoubleSide,
  DynamicDrawUsage,
  InstancedMesh,
  MeshStandardMaterial,
  Object3D,
  ShaderMaterial,
  Vector2,
} from 'three'
import CustomShaderMaterial from 'three-custom-shader-material'
import CustomShaderMaterialType from 'three-custom-shader-material/vanilla'
import { randFloat } from 'three/src/math/MathUtils'
import { scale } from './Terrain'

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

  useLayoutEffect(() => {
    materialRef.current.side = DoubleSide
  })

  return (
    <CustomShaderMaterial
      ref={materialRef}
      baseMaterial={MeshStandardMaterial}
      vertexShader={kelpVert}
      fragmentShader={kelpFrag}
      uniforms={uniforms}
    />
  )
}

const temp = new Object3D()

export const SingleKelpTile = memo<{ offset?: Vector2 }>(function SingleKelpTile({ offset = new Vector2(0, 0) }) {
  console.log('Rendering... again!')

  const ref = useRef<InstancedMesh<BufferGeometry, ShaderMaterial>>()

  const result = useKelp()
  const { geometry } = result

  const kelpGeometry = geometry

  const points = useMemo(() => {
    const sampler = new FastPoissonDiskSampling({
      shape: [scale, scale],
      radius: 5,
      tries: 10,
    })
    const points = sampler.fill() as [number, number][]

    return points
  }, [])

  useEffect(() => {
    points.forEach(([px, pz], i) => {
      const [x, z] = [px - scale / 2 + offset.x, pz - scale / 2 + offset.y]

      const localScale = randFloat(0.2, 0.3)
      temp.position.set(x, 0, z)
      temp.rotation.set(Math.PI / 2, 0, randFloat(0, Math.PI * 2))
      temp.scale.set(localScale * 2.3, localScale, localScale * 3)

      temp.updateMatrix()

      ref.current.setMatrixAt(i, temp.matrix)
    })

    ref.current.instanceMatrix.setUsage(DynamicDrawUsage)
    ref.current.instanceMatrix.needsUpdate = true
  }, [offset, points])

  return (
    <instancedMesh ref={ref} args={[kelpGeometry, null, points.length]}>
      <CustomKelpShaderMaterial />
    </instancedMesh>
  )
})
