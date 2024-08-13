import Scene from '@components/canvas/Scene'
import dynamic from 'next/dynamic'

const ThirdPersonDemo = dynamic(() => import('@components/canvas/ThirdPersonDemo'), { ssr: false })

export default function Page() {
  return (
    <>
      <Scene>
        <ThirdPersonDemo />
      </Scene>
    </>
  )
}

export async function getStaticProps() {
  return { props: { title: 'Third Person Camera Demo' } }
}
