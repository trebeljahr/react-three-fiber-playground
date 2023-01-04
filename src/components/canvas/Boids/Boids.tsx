import { useFBO } from '@react-three/drei'
import { createPortal, extend, Object3DNode, useFrame } from '@react-three/fiber'
import { useMemo, useRef } from 'react'
import {
  AdditiveBlending,
  BufferGeometry,
  FloatType,
  NearestFilter,
  OrthographicCamera,
  Points,
  RGBAFormat,
  Scene,
  ShaderMaterial,
} from 'three'

import pointsFrag from './points.frag'
import pointsVert from './points.vert'

import posFrag from './position.frag'
// import positionVertexShader from './position.vert'

import velFrag from './velocity.frag'
// import velocityVertexShader from './velocity.vert'

import { SimulationMaterial } from './SimulationMaterial'

extend({ SimulationMaterial: SimulationMaterial })

declare module '@react-three/fiber' {
  interface ThreeElements {
    posMaterial: Object3DNode<SimulationMaterial, typeof SimulationMaterial>
    velMaterial: Object3DNode<SimulationMaterial, typeof SimulationMaterial>
  }
}

export const FBOParticles = () => {
  const size = 128
  const points = useRef<Points<BufferGeometry, ShaderMaterial>>()
  // const simulationMaterialRef = useRef<SimulationMaterial>()
  const posMaterial = useRef<SimulationMaterial>()
  const velMaterial = useRef<SimulationMaterial>()

  const posScene = new Scene()
  const velScene = new Scene()

  const camera = new OrthographicCamera(-1, 1, 1, -1, 1 / Math.pow(2, 53), 1)
  const positions = new Float32Array([-1, -1, 0, 1, -1, 0, 1, 1, 0, -1, -1, 0, 1, 1, 0, -1, 1, 0])
  const uvs = new Float32Array([0, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0])

  const velRenderTarget = useFBO(size, size, {
    minFilter: NearestFilter,
    magFilter: NearestFilter,
    format: RGBAFormat,
    stencilBuffer: false,
    type: FloatType,
  })

  const posRenderTarget = useFBO(size, size, {
    minFilter: NearestFilter,
    magFilter: NearestFilter,
    format: RGBAFormat,
    stencilBuffer: false,
    type: FloatType,
  })

  const particlesPosition = useMemo(() => {
    const length = size * size
    const particles = new Float32Array(length * 3)
    for (let i = 0; i < length; i++) {
      let i3 = i * 3
      particles[i3 + 0] = (i % size) / size
      particles[i3 + 1] = i / size / size
    }
    return particles
  }, [size])

  const uniforms = useMemo(
    () => ({
      uPositions: {
        value: null,
      },
    }),
    [],
  )

  useFrame((state) => {
    const { gl, clock } = state

    gl.setRenderTarget(velRenderTarget)
    gl.clear()
    gl.render(posScene, camera)
    gl.setRenderTarget(null)

    points.current.material.uniforms.uPositions.value = velRenderTarget.texture
    // simulationMaterialRef.current.uniforms.uTime.value = clock.elapsedTime

    const delta = clock.getDelta()

    posMaterial.current.uniforms['time'].value = clock.elapsedTime
    posMaterial.current.uniforms['delta'].value = delta

    velMaterial.current.uniforms['time'].value = clock.elapsedTime
    velMaterial.current.uniforms['delta'].value = delta

    // simulationMaterialRef.current.birdUniforms['time'].value = clock.elapsedTime
    // simulationMaterialRef.current.birdUniforms['delta'].value = delta

    // velocityUniforms['predator'].value.set((0.5 * mouseX) / windowHalfX, (-0.5 * mouseY) / windowHalfY, 0)

    // mouseX = 10000
    // mouseY = 10000

    // gpuCompute.compute()

    // simulationMaterialRef.current.birdUniforms['texturePosition'].value =
    //   gpuCompute.getCurrentRenderTarget(positionVariable).texture
    // simulationMaterialRef.current.birdUniforms['textureVelocity'].value =
    //   gpuCompute.getCurrentRenderTarget(velocityVariable).texture
  })

  return (
    <>
      {createPortal(
        <mesh>
          <posMaterial ref={posMaterial} args={[posFrag]} />

          <bufferGeometry>
            <bufferAttribute attach='attributes-position' count={positions.length / 3} array={positions} itemSize={3} />
            <bufferAttribute attach='attributes-uv' count={uvs.length / 2} array={uvs} itemSize={2} />
          </bufferGeometry>
        </mesh>,
        posScene,
      )}
      {createPortal(
        <mesh>
          <velMaterial ref={velMaterial} args={[velFrag]} />

          <bufferGeometry>
            <bufferAttribute attach='attributes-position' count={positions.length / 3} array={positions} itemSize={3} />
            <bufferAttribute attach='attributes-uv' count={uvs.length / 2} array={uvs} itemSize={2} />
          </bufferGeometry>
        </mesh>,
        velScene,
      )}
      <points ref={points}>
        <bufferGeometry>
          <bufferAttribute
            attach='attributes-position'
            count={particlesPosition.length / 3}
            array={particlesPosition}
            itemSize={3}
          />
        </bufferGeometry>
        <shaderMaterial
          blending={AdditiveBlending}
          depthWrite={false}
          fragmentShader={pointsFrag}
          vertexShader={pointsVert}
          uniforms={uniforms}
        />
      </points>
    </>
  )
}
