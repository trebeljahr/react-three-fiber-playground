import { useRef } from 'react'
import dynamic from 'next/dynamic'
import Header from '@config'
import Layout from '@components/dom/Layout'
import '@styles/index.css'
import tunnel from 'tunnel-rat'

const Scene = dynamic(() => import('@components/canvas/Scene'), { ssr: true })

const t = tunnel()
export const { Out, In } = t

export default function App({ Component, pageProps = { title: 'index' } }) {
  const ref = useRef()
  return (
    <>
      <Header title={pageProps.title} />
      <Component {...pageProps} />

      <Out />

      <Layout ref={ref}>
        {Component?.canvas && (
          <Scene className='pointer-events-none' eventSource={ref} eventPrefix='client'>
            {Component.canvas(pageProps)}
          </Scene>
        )}
      </Layout>
    </>
  )
}
