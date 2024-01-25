import { defineDocumentType } from "@contentlayer/source-files"

import { getLastEditedDate, urlFromFilePath } from "../utils"

export type DocHeading = { level: 1 | 2 | 3; title: string }

export const Changelog = defineDocumentType(() => ({
  name: "Changelog",
  filePathPattern: `changelog/**/*.mdx`,
  contentType: "mdx",
  fields: {
    global_id: {
      type: "string",
      description:
        "Random ID to uniquely identify this doc, even after it moves",
      required: true,
    },
    version: { type: "string", required: true },
    title: { type: "string", required: true },
    summary: { type: "string", required: false },
    date: { type: "date", required: true },
  },
  computedFields: {
    url_path: {
      type: "string",
      description:
        'The URL path of this page relative to site root. For example, the site root page would be "/", and doc page would be "docs/getting-started/"',
      resolve: (changelog) => {
        if (changelog._id.startsWith("changelog/index.mdx")) return "/changelog"
        return urlFromFilePath(changelog)
      },
    },
    pathSegments: {
      type: "json",
      resolve: (changelog) =>
        urlFromFilePath(changelog)
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
