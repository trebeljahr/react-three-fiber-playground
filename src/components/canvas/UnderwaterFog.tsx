import { useDepthBuffer } from '@react-three/drei'
import fragmentShader from '@shaders/sampleDepthBuffer.frag'
import { Effect } from 'postprocessing'
import { forwardRef, useMemo } from 'react'
import { DepthTexture, Uniform, WebGLRenderer } from 'three'

let _uParam: DepthTexture

class UnderwaterFog extends Effect {
  constructor({ depthBuffer }: { depthBuffer: DepthTexture }) {
    super('UnderWaterFogEffect', fragmentShader, {
      uniforms: new Map([['depthBuffer', new Uniform(depthBuffer)]]),
    })

    _uParam = depthBuffer
  }

  update(renderer: WebGLRenderer, inputBuffer: WebGLBuffer, deltaTime: number) {
    this.uniforms.get('depthBuffer').value = _uParam
  }
}

export const UnderWaterFogEffect = () => {
  const depthBuffer = useDepthBuffer({ frames: Infinity })
  const effect = useMemo(() => new UnderwaterFog({ depthBuffer }), [depthBuffer])

  return <primitive object={effect} />
}
