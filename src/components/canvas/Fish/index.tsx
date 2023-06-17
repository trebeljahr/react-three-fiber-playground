// import { useFBO } from '@react-three/drei'
import { extend, Object3DNode, useFrame, useThree } from '@react-three/fiber'
import { useEffect, useMemo, useRef } from 'react'
import {
  BufferAttribute,
  BufferGeometry,
  Color,
  DataTexture,
  DoubleSide,
  DynamicDrawUsage,
  InstancedMesh,
  IUniform,
  Mesh,
  MeshPhysicalMaterial,
  Object3D,
  RepeatWrapping,
  ShaderMaterial,
  Vector3,
} from 'three'
import { GPUComputationRenderer, Variable } from 'three/examples/jsm/misc/GPUComputationRenderer'
import positionShader from './position.frag'
import velocityShader from './velocity.frag'
import fishVertex from './fish.vert'
import fishFragment from './fish.frag'
import { useFish1 } from '@models/fish_pack/Fish1'
import CustomShaderMaterial from 'three-custom-shader-material'
import CustomShaderMaterialType from 'three-custom-shader-material/vanilla'
import { randFloat } from 'three/src/math/MathUtils'
import { useState } from 'react'
import { mergeBufferGeometries } from 'three-stdlib'

const WIDTH = 30
const BOUNDS = 10
const BOUNDS_HALF = BOUNDS / 2
const FISH_AMOUNT = WIDTH * WIDTH

function fillPositionTexture(texture: DataTexture) {
  for (let k = 0, kl = texture.image.data.length; k < kl; k += 4) {
    const x = Math.random() * BOUNDS - BOUNDS_HALF
    const y = Math.random() * BOUNDS - BOUNDS_HALF
    const z = Math.random() * BOUNDS - BOUNDS_HALF

    texture.image.data[k + 0] = x
    texture.image.data[k + 1] = y
    texture.image.data[k + 2] = z
    texture.image.data[k + 3] = 1
  }
}

function fillVelocityTexture(texture: DataTexture) {
  for (let k = 0, kl = texture.image.data.length; k < kl; k += 4) {
    const x = Math.random() - 0.5
    const y = Math.random() - 0.5
    const z = Math.random() - 0.5

    texture.image.data[k + 0] = x
    texture.image.data[k + 1] = y
    texture.image.data[k + 2] = z
    texture.image.data[k + 3] = 1
  }
}

type Uniforms = { [key: string]: IUniform<any> }

export function Fishs() {
  const { gl } = useThree()

  const gpuCompute = useMemo(() => {
    const gpuCompute = new GPUComputationRenderer(WIDTH, WIDTH, gl)
    const error = gpuCompute.init()

    if (error !== null) {
      console.error(error)
    }

    return gpuCompute
  }, [gl])

  const velocityVariable = useRef<Variable>()
  const positionVariable = useRef<Variable>()
  const positionUniforms = useRef<Uniforms>()
  // {
  //   time: { value: 0.0 },
  //   delta: { value: 0.0 },
  // }
  const velocityUniforms = useRef<Uniforms>()
  //   {
  //   time: { value: 0.0 },
  //   delta: { value: 0.0 },
  //   testing: { value: 1.0 },
  //   separationDistance: { value: 1.0 },
  //   alignmentDistance: { value: 1.0 },
  //   cohesionDistance: { value: 1.0 },
  //   freedomFactor: { value: 1.0 },
  //   predator: { value: new Vector3(1, 1, 1) },
  // }
  const fishUniforms = useMemo<Uniforms>(
    () => ({
      color: { value: new Color(0xff2200) },
      texturePosition: { value: null },
      textureVelocity: { value: null },
      time: { value: 1.0 },
      delta: { value: 0.0 },
      minX: { value: 0.0 },
      maxX: { value: 0.0 },
    }),
    [],
  )

  useEffect(() => {
    function initComputeRenderer() {
      const dtPosition = gpuCompute.createTexture()
      const dtVelocity = gpuCompute.createTexture()
      fillPositionTexture(dtPosition)
      fillVelocityTexture(dtVelocity)

      velocityVariable.current = gpuCompute.addVariable('textureVelocity', velocityShader, dtVelocity)
      positionVariable.current = gpuCompute.addVariable('texturePosition', positionShader, dtPosition)

      gpuCompute.setVariableDependencies(velocityVariable.current, [positionVariable.current, velocityVariable.current])
      gpuCompute.setVariableDependencies(positionVariable.current, [positionVariable.current, velocityVariable.current])

      positionUniforms.current = positionVariable.current.material.uniforms
      velocityUniforms.current = velocityVariable.current.material.uniforms

      positionUniforms.current['time'] = { value: 0.0 }
      positionUniforms.current['delta'] = { value: 0.0 }
      velocityUniforms.current['time'] = { value: 1.0 }
      velocityUniforms.current['delta'] = { value: 0.0 }
      velocityUniforms.current['testing'] = { value: 1.0 }
      velocityUniforms.current['separationDistance'] = { value: 1.0 }
      velocityUniforms.current['alignmentDistance'] = { value: 1.0 }
      velocityUniforms.current['cohesionDistance'] = { value: 1.0 }
      velocityUniforms.current['freedomFactor'] = { value: 1.0 }
      velocityUniforms.current['predator'] = { value: new Vector3(1, 1, 1) }

      velocityVariable.current.material.defines.BOUNDS = BOUNDS.toFixed(2)

      velocityVariable.current.wrapS = RepeatWrapping
      velocityVariable.current.wrapT = RepeatWrapping
      positionVariable.current.wrapS = RepeatWrapping
      positionVariable.current.wrapT = RepeatWrapping

      const error = gpuCompute.init()

      if (error !== null) {
        console.error(error)
      }
    }

    initComputeRenderer()

    function initFishs() {
      fishMesh.current.rotation.y = Math.PI / 2
      fishMesh.current.matrixAutoUpdate = false
      fishMesh.current.updateMatrix()
    }

    initFishs()

    return () => gpuCompute && gpuCompute.dispose()
  }, [gpuCompute])

  const last = useRef(performance.now())

  useFrame(() => {
    if (!velocityVariable.current || !positionVariable.current) return

    const now = performance.now()
    let delta = (now - last.current) / 1000

    if (delta > 1) delta = 1
    last.current = now

    positionUniforms.current['time'].value = now
    positionUniforms.current['delta'].value = delta

    velocityUniforms.current['time'].value = now
    velocityUniforms.current['delta'].value = delta

    fishMaterial.current.uniforms['time'].value = now
    fishMaterial.current.uniforms['delta'].value = delta
    fishMaterial.current.uniforms.minX.value = minX
    fishMaterial.current.uniforms.maxX.value = maxX

    gpuCompute.compute()

    const posValue = gpuCompute.getCurrentRenderTarget(positionVariable.current).texture
    fishMaterial.current.uniforms['texturePosition'].value = posValue

    const velValue = gpuCompute.getCurrentRenderTarget(velocityVariable.current).texture
    fishMaterial.current.uniforms['textureVelocity'].value = velValue
  })

  const fishMesh = useRef<Mesh<BufferGeometry, ShaderMaterial>>()
  const fishMaterial = useRef<CustomShaderMaterialType>()

  const { nodes } = useFish1()

  const { fishGeo, minX, maxX } = useMemo(() => {
    const merged = mergeBufferGeometries([nodes.Fish_1.geometry, nodes.Fish_2.geometry, nodes.Fish_3.geometry])
    const fishGeo = merged
    const scale = 10
    fishGeo.scale(scale, scale, scale)

    fishGeo.rotateX(-Math.PI / 2)
    let currentMin = Infinity
    let currentMax = -Infinity
    for (let i = 0; i < fishGeo.attributes.position.array.length; i += 3) {
      const x = fishGeo.attributes.position.array[i + 2]
      currentMin = Math.min(currentMin, x)
      currentMax = Math.max(currentMax, x)
    }

    return { fishGeo, minX: currentMin, maxX: currentMax }
  }, [nodes])

  const customFishGeometry = useMemo(() => {
    const allFishes = new BufferGeometry()

    const totalVertices = fishGeo.getAttribute('position').count * 3 * FISH_AMOUNT

    const vertices = []
    const reference = []
    const indices = []
    const normals = []

    for (let i = 0; i < totalVertices; i++) {
      const fishIndex = i % (fishGeo.getAttribute('position').count * 3)
      vertices.push(fishGeo.getAttribute('position').array[fishIndex])
      normals.push(fishGeo.getAttribute('normal').array[fishIndex])
    }

    let r = Math.random()
    for (let i = 0; i < fishGeo.getAttribute('position').count * FISH_AMOUNT; i++) {
      const fishIndex = i % fishGeo.getAttribute('position').count
      const fish = Math.floor(i / fishGeo.getAttribute('position').count)
      if (fishIndex === 0) r = Math.random()
      const j = ~~fish
      const x = (j % WIDTH) / WIDTH
      const y = ~~(j / WIDTH) / WIDTH
      reference.push(x, y)
    }

    for (let i = 0; i < fishGeo.index.array.length * FISH_AMOUNT; i++) {
      const offset = Math.floor(i / fishGeo.index.array.length) * fishGeo.getAttribute('position').count
      indices.push(fishGeo.index.array[i % fishGeo.index.array.length] + offset)
    }

    allFishes.setAttribute('position', new BufferAttribute(new Float32Array(vertices), 3))
    allFishes.setAttribute('normal', new BufferAttribute(new Float32Array(normals), 3))
    allFishes.setAttribute('reference', new BufferAttribute(new Float32Array(reference), 2))

    allFishes.setIndex(indices)

    return allFishes
  }, [fishGeo])

  return (
    <mesh ref={fishMesh} geometry={customFishGeometry} frustumCulled={false}>
      <CustomShaderMaterial
        ref={fishMaterial}
        baseMaterial={MeshPhysicalMaterial}
        vertexShader={fishVertex}
        fragmentShader={fishFragment}
        uniforms={fishUniforms}
        flatShading
        color={'#4CBB17'}
      />
    </mesh>
  )
}
