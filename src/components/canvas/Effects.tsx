import { EffectComposer } from '@react-three/postprocessing'
import { UnderwaterFogEffect } from './UnderwaterFog'

export function Effects() {
  return (
    <>
      <EffectComposer multisampling={0} depthBuffer={true} disableNormalPass={true}>
        <UnderwaterFogEffect />
      </EffectComposer>
    </>
  )
}
