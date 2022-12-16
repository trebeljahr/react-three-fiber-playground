import { useDepthBuffer } from '@react-three/drei'
import { useThree } from '@react-three/fiber'
import fragmentShader from '@shaders/sampleDepthBuffer.frag'
import { Effect, EffectAttribute } from 'postprocessing'
import { forwardRef, useMemo } from 'react'
import { DepthTexture, Uniform, WebGLRenderer } from 'three'

let _uParam: DepthTexture

class UnderwaterFog extends Effect {
  // constructor({ depthBuffer }: { depthBuffer: DepthTexture }) {
  constructor() {
    super('UnderWaterFogEffect', fragmentShader, {
      attributes: EffectAttribute.DEPTH,
      // uniforms: new Map([['depthBuffer', new Uniform(depthBuffer)]]),
    })

    // _uParam = depthBuffer
  }

  update(renderer: WebGLRenderer, inputBuffer: WebGLBuffer, deltaTime: number) {
    // this.uniforms.get('depthBuffer').value = _uParam
  }
}

export const UnderWaterFogEffect = () => {
  // const dpr = useThree((state) => state.viewport.dpr)
  // const { width, height } = useThree((state) => state.size)
  // const w = width * dpr
  // const h = height * dpr
  // const depthBuffer = useDepthBuffer({ size: null })

  const effect = useMemo(() => new UnderwaterFog(), []) //{ depthBuffer }), [depthBuffer])

  return <primitive object={effect} />
}
