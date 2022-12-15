import { useKelp } from '@models/Kelp4'
import { useFrame, useThree } from '@react-three/fiber'
import kelpVert from '@shaders/kelp.vert'
import kelpFrag from '@shaders/kelp.frag'

import FastPoissonDiskSampling from 'fast-2d-poisson-disk-sampling'
import { memo, useEffect, useMemo, useRef } from 'react'
import {
  BufferGeometry,
  DynamicDrawUsage,
  InstancedMesh,
  Matrix4,
  MeshPhysicalMaterial,
  Object3D,
  Quaternion,
  ShaderMaterial,
  Vector2,
  Vector3,
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

  return (
    <CustomShaderMaterial
      ref={materialRef}
      baseMaterial={MeshPhysicalMaterial}
      vertexShader={kelpVert}
      fragmentShader={kelpFrag}
      uniforms={uniforms}
      flatShading
      color={'#4CBB17'}
    />
  )
}

export function KelpForest({ size = 150 }) {
  const ref = useRef<InstancedMesh<BufferGeometry, ShaderMaterial>>()

  const result = useKelp()
  const { geometry } = result
  console.log(result)

  const kelpGeometry = geometry

  // const points = useMemo(() => [[0, 0]], [])
  const points = useMemo(() => {
    const sampler = new FastPoissonDiskSampling({
      shape: [size, size],
      radius: 30,
      tries: 5,
    })
    const result = sampler.fill()
    console.log(result.length)
    return result.map(([x, z]) => [x - size / 2, z - size / 2])
  }, [size])

  const { camera } = useThree()

  useEffect(() => {
    const temp = new Object3D()

    for (let i = 0; i < points.length; i++) {
      const scale = randFloat(0.2, 0.3)
      const [x, z] = points[i]
      temp.position.set(x, 0, z)
      temp.rotation.set(0, randFloat(0.2, 0.5), 0)
      temp.scale.set(scale, scale, scale)

      temp.updateMatrix()

      ref.current.setMatrixAt(i, temp.matrix)
    }

    ref.current.instanceMatrix.setUsage(DynamicDrawUsage)
    ref.current.instanceMatrix.needsUpdate = true
  }, [size, points])

  useFrame(() => {
    if (!ref.current) return
    for (let i = 0; i < points.length; i++) {
      const temp = new Object3D()

      const position = new Vector3(0, 0, 0)
      const scale = new Vector3(0, 0, 0)
      const rotation = new Quaternion()

      let needsUpdate = false

      let matrix = new Matrix4()
      ref.current.updateMatrixWorld()
      ref.current.getMatrixAt(i, matrix)

      matrix.decompose(position, rotation, scale)
      // console.log(position)
      temp.matrix = matrix

      const cameraXZPos = camera.position.clone().setY(0)
      if (Math.abs(position.distanceToSquared(cameraXZPos)) > 14000) {
        // console.log('too far!')
        const diffVec = position.sub(cameraXZPos).negate()
        const { x, z } = diffVec.multiplyScalar(0.99).add(cameraXZPos)

        temp.position.set(x, 0, z)
        temp.rotation.setFromQuaternion(rotation)
        temp.scale.set(scale.x, scale.y, scale.z)
        temp.updateMatrix()
        ref.current.setMatrixAt(i, temp.matrix)
        needsUpdate = true
      }

      // console.log(temp.matrix)

      ref.current.instanceMatrix.needsUpdate = needsUpdate
    }
  })

  return (
    <instancedMesh ref={ref} args={[kelpGeometry, null, points.length]}>
      <CustomKelpShaderMaterial />
    </instancedMesh>
  )
}

export const SingleKelpTile = memo<{ offset?: Vector2 }>(function SingleKelpTile({ offset = new Vector2(0, 0) }) {
  console.log('Rendering... again!')

  const ref = useRef<InstancedMesh<BufferGeometry, ShaderMaterial>>()

  const result = useKelp()
  const { geometry } = result

  const kelpGeometry = geometry

  const points = useMemo(() => {
    const sampler = new FastPoissonDiskSampling({
      shape: [scale, scale],
      radius: 10,
      tries: 5,
    })
    const points = sampler.fill() as [number, number][]

    return points
  }, [])

  useEffect(() => {
    points.forEach(([px, pz], i) => {
      const [x, z] = [px - scale / 2 + offset.x, pz - scale / 2 + offset.y]

      const temp = new Object3D()

      const localScale = randFloat(0.2, 0.3)
      temp.position.set(x, 0, z)
      temp.rotation.set(0, 0, 0)
      temp.scale.set(localScale, localScale, localScale)

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
