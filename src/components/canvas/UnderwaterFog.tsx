import fragmentShader from '@shaders/sampleDepthBuffer.frag'
import { Effect, EffectAttribute } from 'postprocessing'
import { useMemo } from 'react'
import { Uniform, Vector2, Vector3, WebGLRenderer } from 'three'

class UnderwaterFogEffectImpl extends Effect {
  constructor() {
    super('UnderwaterFogEffect', fragmentShader, {
      attributes: EffectAttribute.DEPTH,
      uniforms: new Map([
        ['cameraPosition', new Uniform(new Vector3(0, 0, 0))],
        ['cameraLookAt', new Uniform(new Vector3(1, 1, 1))],
        ['uTime', new Uniform(0.0)],
      ]),
    })
  }

  update(renderer: WebGLRenderer, inputBuffer: WebGLBuffer, deltaTime: number) {
    this.uniforms.get('uTime').value += deltaTime
  }
}

export const UnderwaterFogEffect = () => {
  const effect = useMemo(() => new UnderwaterFogEffectImpl(), [])
  return <primitive object={effect} />
}
