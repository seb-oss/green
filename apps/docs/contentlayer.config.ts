import { makeSource } from '@contentlayer/source-files'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypePrettyCode from 'rehype-pretty-code'
import rehypeSlug from 'rehype-slug'
import remarkGfm from 'remark-gfm'

import * as documentTypes from './utils/content/types'
import { rehypePrettyCodeOptions } from './utils/theme/code'

export default makeSource({
  contentDirPath: 'apps/docs/content',
  documentTypes,
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [rehypePrettyCode, rehypePrettyCodeOptions],
      [
        rehypeAutolinkHeadings,
        {
          behavior: 'wrap',
          properties: {
            className: ['anchor']
          }
        }
      ]
    ]
  },
  onSuccess: async importData => {
    const { allDocuments } = await importData()
  }
})
