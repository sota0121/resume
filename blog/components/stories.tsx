import PostPreview from './post-preview'
import type Post from '../interfaces/post'

// This isn't used anywhere, but it's a good example of how to

type Props = {
  posts: Post[]
}

const Stories = ({ posts }: Props) => {
  return (
    <section>
      <h2 className="mb-8 text-2xl md:text-4xl font-bold tracking-tighter leading-tight">
        Stories
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </section>
  )
}

export default Stories
