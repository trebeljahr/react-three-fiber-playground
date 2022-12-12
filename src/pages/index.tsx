import dynamic from 'next/dynamic'

const FreeMovement = dynamic(() => import('@components/canvas/FreeMovement'), { ssr: false })

export default function Page() {
  return <></>
}

Page.canvas = () => <FreeMovement />

export async function getStaticProps() {
  return { props: { title: 'Index' } }
}
