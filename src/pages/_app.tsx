import Header from '@components/dom/Header'
import Layout from '@components/dom/Layout'
import '@styles/index.css'

export default function App({ Component, pageProps = { title: 'index' } }) {
  return (
    <>
      <Header title={pageProps.title} />

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
