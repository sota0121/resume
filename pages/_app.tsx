import { AppProps } from 'next/app'
import '../styles/index.css'
import Layout from '../components/layout'
import Head from 'next/head'
import AppBar from '../components/app-bar'
import { BASE_PAGE_TITLE } from '@/lib/constants'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Layout>
        <Head>
          <title>{BASE_PAGE_TITLE}</title>
        </Head>
        <AppBar />
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
