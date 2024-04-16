import { defineDocumentType } from "@contentlayer/source-files"

import { getLastEditedDate, urlFromFilePath } from "../utils"

export type DocHeading = { level: 1 | 2 | 3; title: string }

export const Member = defineDocumentType(() => ({
  name: "Member",
  filePathPattern: `team/**/*.mdx`,
  contentType: "mdx",
  fields: {
    global_id: {
      type: "string",
      description:
        "Random ID to uniquely identify this doc, even after it moves",
      required: true,
    },
    name: { type: "string", required: true },
    handle: { type: "string", required: false },
    email: { type: "string", required: false },
    title: { type: "string", required: false },
    location: { type: "string", required: false },
    department: { type: "string", required: false },
  },
  computedFields: {
    url_path: {
      type: "string",
      description:
        'The URL path of this page relative to site root. For example, the site root page would be "/", and doc page would be "docs/getting-started/"',
      resolve: (member) => {
        if (member._id.startsWith("member/index.mdx")) return "/member"
        return urlFromFilePath(member)
      },
    },
    pathSegments: {
      type: "json",
      resolve: (team) =>
        urlFromFilePath(team)
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
