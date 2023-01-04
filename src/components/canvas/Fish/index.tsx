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

const WIDTH = 10
const BOUNDS = 800
const BOUNDS_HALF = BOUNDS / 2
const FISH_AMOUNT = WIDTH * WIDTH

function fillPositionTexture(texture: DataTexture) {
  const theArray = texture.image.data

  for (let k = 0, kl = theArray.length; k < kl; k += 4) {
    const x = Math.random() * BOUNDS - BOUNDS_HALF
    const y = Math.random() * BOUNDS - BOUNDS_HALF
    const z = Math.random() * BOUNDS - BOUNDS_HALF

    theArray[k + 0] = x
    theArray[k + 1] = y
    theArray[k + 2] = z
    theArray[k + 3] = 1
  }
}

function fillVelocityTexture(texture: DataTexture) {
  const theArray = texture.image.data

  for (let k = 0, kl = theArray.length; k < kl; k += 4) {
    const x = Math.random() - 0.5
    const y = Math.random() - 0.5
    const z = Math.random() - 0.5

    theArray[k + 0] = x * 10
    theArray[k + 1] = y * 10
    theArray[k + 2] = z * 10
    theArray[k + 3] = 1
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
  const velocityUniforms = useRef<Uniforms>()
  const fishUniforms = useMemo<Uniforms>(
    () => ({
      color: { value: new Color(0xff2200) },
      texturePosition: { value: null },
      textureVelocity: { value: null },
      time: { value: 1.0 },
      delta: { value: 0.0 },
    }),
    [],
  )

  useEffect(() => {
    function initComputeRenderer() {
      //   gpuCompute = new GPUComputationRenderer(WIDTH, WIDTH, renderer)

      //   if (renderer.capabilities.isWebGL2 === false) {
      //     gpuCompute.setDataType(HalfFloatType)
      //   }

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

  const mouseX = useRef(10000)
  const mouseY = useRef(10000)

  const { width, height } = useThree((state) => state.size)
  const windowHalfX = useMemo(() => width / 2, [width])
  const windowHalfY = useMemo(() => height / 2, [height])

  useEffect(() => {
    function onPointerMove(event: PointerEvent) {
      if (event.isPrimary === false) return

      mouseX.current = event.clientX - windowHalfX
      mouseY.current = event.clientY - windowHalfY
    }

    document.addEventListener('pointermove', onPointerMove)

    return () => {
      document.removeEventListener('pointermove', onPointerMove)
    }
  }, [windowHalfX, windowHalfY])

  const last = useRef(performance.now())

  useFrame(() => {
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

    velocityUniforms.current['predator'].value.set(
      (0.5 * mouseX.current) / windowHalfX,
      (-0.5 * mouseY.current) / windowHalfY,
      0,
    )
    mouseX.current = 10000
    mouseY.current = 10000

    gpuCompute.compute()

    fishMaterial.current.uniforms['texturePosition'].value = gpuCompute.getCurrentRenderTarget(
      positionVariable.current,
    ).texture

    fishMaterial.current.uniforms['textureVelocity'].value = gpuCompute.getCurrentRenderTarget(
      velocityVariable.current,
    ).texture
  })

  const fishMesh = useRef<Mesh<BufferGeometry, ShaderMaterial>>()
  const fishMaterial = useRef<CustomShaderMaterialType>()

  const { nodes } = useFish1()

  const customFishGeometry = useMemo(() => {
    const merged = mergeBufferGeometries([nodes.Fish_1.geometry, nodes.Fish_2.geometry, nodes.Fish_3.geometry])
    const fishGeo = merged
    fishGeo.rotateX(-Math.PI / 2)

    const allFishes = new BufferGeometry()

    const totalVertices = fishGeo.getAttribute('position').count * 3 * FISH_AMOUNT

    const vertices = []
    const reference = []
    const indices = []

    for (let i = 0; i < totalVertices; i++) {
      const fishIndex = i % (fishGeo.getAttribute('position').count * 3)
      vertices.push(fishGeo.getAttribute('position').array[fishIndex])
    }

    let r = Math.random()
    for (let i = 0; i < fishGeo.getAttribute('position').count * FISH_AMOUNT; i++) {
      const fishIndex = i % fishGeo.getAttribute('position').count
      const fish = Math.floor(i / fishGeo.getAttribute('position').count)
      if (fishIndex == 0) r = Math.random()
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
    allFishes.setAttribute('reference', new BufferAttribute(new Float32Array(reference), 2))

    allFishes.setIndex(indices)

    console.log(allFishes)
    const scale = 700
    allFishes.scale(scale, scale, scale)

    return allFishes
  }, [nodes])

  return (
    <mesh ref={fishMesh} geometry={customFishGeometry}>
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

class FishGeometry extends BufferGeometry {
  constructor() {
    super()

    const trianglesPerFish = 3
    const triangles = FISH_AMOUNT * trianglesPerFish
    const points = triangles * 3

    const vertices = new BufferAttribute(new Float32Array(points * 3), 3)
    const fishColors = new BufferAttribute(new Float32Array(points * 3), 3)
    const references = new BufferAttribute(new Float32Array(points * 2), 2)
    const fishVertex = new BufferAttribute(new Float32Array(points), 1)

    this.setAttribute('position', vertices)
    this.setAttribute('fishColor', fishColors)
    this.setAttribute('reference', references)
    this.setAttribute('fishVertex', fishVertex)

    let v = 0

    function verts_push(...args: number[]) {
      for (let i = 0; i < args.length; i++) {
        ;(vertices.array as number[])[v++] = args[i]
      }
    }

    const wingsSpan = 20

    for (let f = 0; f < FISH_AMOUNT; f++) {
      verts_push(0, -0, -20, 0, 4, -20, 0, 0, 30)
      verts_push(0, 0, -15, -wingsSpan, 0, 0, 0, 0, 15)
      verts_push(0, 0, 15, wingsSpan, 0, 0, 0, 0, -15)
    }

    for (let v = 0; v < triangles * 3; v++) {
      const triangleIndex = ~~(v / 3)
      const fishIndex = ~~(triangleIndex / trianglesPerFish)
      const x = (fishIndex % WIDTH) / WIDTH
      const y = ~~(fishIndex / WIDTH) / WIDTH

      const c = new Color(0x444444 + (~~(v / 9) / FISH_AMOUNT) * 0x666666)
      ;(fishColors.array as number[])[v * 3 + 0] = c.r
      ;(fishColors.array as number[])[v * 3 + 1] = c.g
      ;(fishColors.array as number[])[v * 3 + 2] = c.b
      ;(references.array as number[])[v * 2] = x
      ;(references.array as number[])[v * 2 + 1] = y
      ;(fishVertex.array as number[])[v] = v % 9
    }

    this.scale(0.2, 0.2, 0.2)
  }
}

extend({ FishGeometry })

declare module '@react-three/fiber' {
  interface ThreeElements {
    fishGeometry: Object3DNode<FishGeometry, typeof FishGeometry>
  }
}
