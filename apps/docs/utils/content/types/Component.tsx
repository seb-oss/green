import { defineDocumentType } from '@contentlayer/source-files'
import GithubSlugger from 'github-slugger'

import { getLastEditedDate, urlFromFilePath } from '../utils'

export type DocHeading = { level: 1 | 2 | 3; title: string }

export const Component = defineDocumentType(() => ({
  name: 'Component',
  filePathPattern: `component/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    summary: { type: 'string', required: false },
    date: { type: 'date', required: false },
    tags: { type: 'string', required: false },
    status: { type: 'string', required: false },
    node: { type: 'string', required: false },
    private: { type: 'boolean', required: false },
  },
  computedFields: {
    url_path: {
      type: 'string',
      description:
        'The URL path of this page relative to site root. For example, the site root page would be "/", and doc page would be "docs/getting-started/"',
      resolve: (component) => {
        // if (component._id.startsWith('component/**/design.mdx'))
        // return '/component'
        return urlFromFilePath(component)
      },
    },
    headings: {
      type: 'json',
      resolve: async (doc) => {
        const regXHeader = /\n(?<flag>#{1,6})\s+(?<content>.+)/g
        const slugger = new GithubSlugger()
        const headings = Array.from(doc.body.raw.matchAll(regXHeader)).map(
          (match) => {
            const groups = (match as RegExpMatchArray).groups
            const flag = groups?.flag
            const content = groups?.content
            return {
              level: flag ? flag.length : 0,
              text: content,
              slug: content ? slugger.slug(content) : undefined,
            }
          },
        )
        return headings
      },
    },
    pathSegments: {
      type: 'json',
      resolve: (post) =>
        urlFromFilePath(post)
          .split('/')
          // skip `/docs` prefix
          .slice(2)
          .map((dirName) => {
            const re = /^((\d+)-)?(.*)$/
            const [, , orderStr, pathName] = dirName.match(re) ?? []
            const order = orderStr ? parseInt(orderStr) : 0
            return { order, pathName }
          }),
    },
    last_edited: { type: 'date', resolve: getLastEditedDate },
  },
  extensions: {},
}))
