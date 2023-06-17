import { UnderwaterContextProvider } from '@hooks/UnderwaterContext'
import dynamic from 'next/dynamic'
import tunnel from 'tunnel-rat'

const WaterDemo = dynamic(() => import('@components/canvas/WaterDemo'), { ssr: false })

export const { In, Out } = tunnel()

export default function Page() {
  return (
    <>
      <Out />
    </>
  )
}

Page.canvas = () => (
  <>
    <UnderwaterContextProvider>
      <WaterDemo />
    </UnderwaterContextProvider>
  </>
)

export async function getStaticProps() {
  return { props: { title: 'Index' } }
}
