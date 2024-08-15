import Scene from '@components/canvas/Scene'
import { Stage } from '@react-three/drei'

import dynamic from 'next/dynamic'

const DynamicCharacter = dynamic(() => import('../components/Character'), {
  ssr: false,
})

export default function Page() {
  return (
    <Scene>
      <Stage adjustCamera intensity={0.5} shadows='contact' environment='city'>
        <DynamicCharacter />
      </Stage>
    </Scene>
  )
}
