import Container from '../components/container'
import Stories from '@/components/stories'
import { getAllPosts } from '../lib/api'
import Post from '../interfaces/post'

type Props = {
  allPosts: Post[]
}

export default function Index({ allPosts }: Props) {
  return (
    <>
      <Container>
        {allPosts.length > 0 ? <Stories posts={allPosts} /> : <>No Stories</>}
      </Container>
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
