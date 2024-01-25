import { makeSource } from '@contentlayer/source-files'
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import highlight from 'rehype-highlight'
import rehypePrettyCode from 'rehype-pretty-code';
import { contentDirPath } from './utils/content/utils'
import * as documentTypes from './utils/content/types'

export default makeSource({
  contentDirPath,
  documentTypes,
  // mdx: { rehypePlugins: [highlight] },

  mdx: {
    remarkPlugins: [remarkGfm],
    
    rehypePlugins: [
      rehypeSlug,
      [
        rehypePrettyCode,
        {
          theme: 'one-dark-pro',
          onVisitLine(node: { children: string | any[]; }) {
            if (node.children.length === 0) {
              node.children = [{ type: 'text', value: ' ' }];
            }
          },
          onVisitHighlightedLine(node: { properties: { className: string[]; }; }) {
            node.properties.className.push('line--highlighted');
          },
          onVisitHighlightedWord(node: { properties: { className: string[]; }; }) {
            node.properties.className = ['word--highlighted'];
          },
        },
      ],
      [
        rehypeAutolinkHeadings,
        {
          behavior: "wrap",
          properties: {
            className: ['anchor'],
          },
        },
      ],
    ],
  },
  onSuccess: async (importData) => {
    const { allDocuments } = await importData()
    // await validateDuplicateIds(allDocuments)
  },
})