import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import rehypeSanitize, { defaultSchema } from 'rehype-sanitize'
import rehypeHighlight from 'rehype-highlight'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeStringify from 'rehype-stringify'


// ref: https://github.com/remarkjs/remark#example-turning-markdown-into-html
// ref: https://vivliostyle.github.io/vivliostyle_doc/ja/vivliostyle-user-group-vol2/spring-raining/index.html
// rehype-highlight: https://github.com/rehypejs/rehype-highlight
// rehype-autolink-headings: https://github.com/rehypejs/rehype-autolink-headings

export default async function markdownToHtml(markdown: string) {
  const vfile = await unified()
    .use(remarkParse) // Parse Markdown to AST
    .use(remarkRehype) // Transform Markdown AST to HTML AST
    .use(rehypeSanitize, { // Sanitize HTML
      ...defaultSchema,
      attributes: {
        ...defaultSchema.attributes,
        code: [
          ...(defaultSchema.attributes?.code || []),
          // List of allowed languages
          ['className', 'language-js', 'language-css', 'language-md'],
        ],
      },
    })
    .use(rehypeHighlight) // Highlight code blocks with highlight.js
    .use(rehypeAutolinkHeadings) // Add anchor links to headings
    .use(rehypeStringify) // Stringify HTML AST to HTML
    .process(markdown)

  // console.log(vfile.toString())

  // const result = await remark().use(html).process(markdown)
  return String(vfile)
}
