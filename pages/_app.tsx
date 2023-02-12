import { AppProps } from 'next/app'
import '../styles/index.css'
import Layout from '../components/layout'
import Head from 'next/head'
import AppBar from '../components/app-bar'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Layout>
        <Head>
          <title>{'SOTA Lab Home Page'}</title>
        </Head>
        <AppBar />
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
