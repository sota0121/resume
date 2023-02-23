
type Props = {
  tags: string[]
}

const Tag = ({ tags }: Props) => {
  return (
    <>
      {tags.map((tag) => (
        <span
          key={tag}
          className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'
        >
          #{tag}
        </span>
      ))}
    </>
  )
}

export default Tag
