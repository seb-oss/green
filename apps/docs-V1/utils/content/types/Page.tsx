import { defineDocumentType } from '@contentlayer/source-files'

import { getLastEditedDate, urlFromFilePath } from '../utils'

export type DocHeading = { level: 1 | 2 | 3; title: string }

export const Page = defineDocumentType(() => ({
  name: 'Page',
  filePathPattern: `page/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    icon: { type: 'string', required: false },
  },
  computedFields: {
    url_path: {
      type: 'string',
      description: 'The URL path of the page',
      resolve: (page) => {
        if (page._id.startsWith('pages/index.mdx')) return '/'
        return urlFromFilePath(page)
      },
    },
    pathSegments: {
      type: 'json',
      resolve: (page) =>
        urlFromFilePath(page)
          .split('/')
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
