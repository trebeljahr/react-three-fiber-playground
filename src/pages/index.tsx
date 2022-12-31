import { UnderwaterContextProvider } from '@hooks/UnderwaterContext'
import dynamic from 'next/dynamic'
import tunnel from 'tunnel-rat'

const FreeMovement = dynamic(() => import('@components/canvas/FreeMovement'), { ssr: false })

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
      <FreeMovement />
    </UnderwaterContextProvider>
  </>
)

export async function getStaticProps() {
  return { props: { title: 'Index' } }
}
