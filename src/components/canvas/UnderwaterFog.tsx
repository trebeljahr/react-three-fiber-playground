import fragmentShader from '@shaders/sampleDepthBuffer.frag'
import { Effect, EffectAttribute } from 'postprocessing'
import { useMemo } from 'react'
import { WebGLRenderer } from 'three'

class UnderwaterFogEffectImpl extends Effect {
  constructor() {
    super('UnderwaterFogEffect', fragmentShader, {
      attributes: EffectAttribute.DEPTH,
    })
  }

  update(renderer: WebGLRenderer, inputBuffer: WebGLBuffer, deltaTime: number) {}
}

export const UnderwaterFogEffect = () => {
  const effect = useMemo(() => new UnderwaterFogEffectImpl(), [])
  return <primitive object={effect} />
}
