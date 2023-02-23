import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import rehypeSanitize from 'rehype-sanitize'
import rehypeStringify from 'rehype-stringify'


// ref: https://github.com/remarkjs/remark#example-turning-markdown-into-html
// ref: https://vivliostyle.github.io/vivliostyle_doc/ja/vivliostyle-user-group-vol2/spring-raining/index.html

export default async function markdownToHtml(markdown: string) {
  const vfile = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeSanitize)
    .use(rehypeStringify)
    .process(markdown)

  console.log(vfile.toString())

  // const result = await remark().use(html).process(markdown)
  return String(vfile)
}
