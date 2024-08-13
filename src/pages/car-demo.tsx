import Scene from '@components/canvas/Scene'
import dynamic from 'next/dynamic'

const CarDemo = dynamic(() => import('@components/canvas/CarDemo'), { ssr: false })

export default function Page() {
  return (
    <Scene eventPrefix='client'>
      <CarDemo />
    </Scene>
  )
}

Page.getInitialProps = async () => {
  return { title: 'Car Demo' }
}
