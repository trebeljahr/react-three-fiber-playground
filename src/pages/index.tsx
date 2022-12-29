import { UnderwaterContextProvider } from '@components/UnderwaterContext'
import dynamic from 'next/dynamic'

const FreeMovement = dynamic(() => import('@components/canvas/FreeMovement'), { ssr: false })

export default function Page() {
  return <></>
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
