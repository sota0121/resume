import Container from '../components/container'
import Stories from '@/components/stories'
import Layout from '../components/layout'
import { getAllPosts } from '../lib/api'
import Head from 'next/head'
import AppBar from '../components/app-bar'
import Post from '../interfaces/post'

type Props = {
  allPosts: Post[]
}

export default function Index({ allPosts }: Props) {
  return (
    <>
      <Layout>
        <Head>
          <title>{'SOTA Lab Home Page'}</title>
        </Head>
        <AppBar />
        <Container>
          {allPosts.length > 0 ? <Stories posts={allPosts} /> : <>No Stories</>}
        </Container>
      </Layout>
    </>
  )
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])

  return {
    props: { allPosts },
  }
}
