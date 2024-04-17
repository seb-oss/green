import { defineDocumentType } from "@contentlayer/source-files"

import { getLastEditedDate, urlFromFilePath } from "../utils"

export type DocHeading = { level: 1 | 2 | 3; title: string }

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `blog/**/*.mdx`,
  contentType: "mdx",
  fields: {
    global_id: {
      type: "string",
      description:
        "Random ID to uniquely identify this doc, even after it moves",
      required: true,
    },
    title: { type: "string", required: true },
    date: { type: "date", required: true },
    author: { type: "string", required: false },
    description: { type: "string", required: false },
  },
  computedFields: {
    url_path: {
      type: "string",
      description:
        'The URL path of this page relative to site root. For example, the site root page would be "/", and doc page would be "docs/getting-started/"',
      resolve: (post) => {
        if (post._id.startsWith("blog/index.mdx")) return "/blog"
        return urlFromFilePath(post)
      },
    },
    pathSegments: {
      type: "json",
      resolve: (post) =>
        urlFromFilePath(post)
          .split("/")
          // skip `/docs` prefix
          .slice(2)
          .map((dirName) => {
            const re = /^((\d+)-)?(.*)$/
            const [, , orderStr, pathName] = dirName.match(re) ?? []
            const order = orderStr ? parseInt(orderStr) : 0
            return { order, pathName }
          }),
    },
    last_edited: { type: "date", resolve: getLastEditedDate },
  },
  extensions: {},
}))
