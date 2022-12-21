import { useThree } from '@react-three/fiber'
import fragmentShader from '@shaders/sampleDepthBuffer.frag'
import { Effect, EffectAttribute } from 'postprocessing'
import { useMemo } from 'react'
import { Camera, Uniform, Vector2, Vector3, WebGLRenderer } from 'three'

class UnderwaterFogEffectImpl extends Effect {
  public camera: Camera
  constructor(camera: Camera) {
    super('UnderwaterFogEffect', fragmentShader, {
      attributes: EffectAttribute.DEPTH,
      uniforms: new Map([
        ['cameraPosition', new Uniform(new Vector3(0, 0, 0))],
        ['cameraLookAt', new Uniform(new Vector3(1, 0, 1))],
        ['uTime', new Uniform(0.0)],
      ]),
    })
    console.log(camera)
    this.camera = camera
  }

  update(renderer: WebGLRenderer, inputBuffer: WebGLBuffer, deltaTime: number) {
    this.uniforms.get('uTime').value += deltaTime
    this.uniforms.get('cameraPosition').value = this.camera.position

    let lookAtVector = new Vector3(0, 0, -1)
    lookAtVector.applyQuaternion(this.camera.quaternion)
    this.uniforms.get('cameraLookAt').value = lookAtVector
  }
}

export const UnderwaterFogEffect = () => {
  const { camera } = useThree()
  const effect = useMemo(() => new UnderwaterFogEffectImpl(camera), [camera])
  return <primitive object={effect} />
}
