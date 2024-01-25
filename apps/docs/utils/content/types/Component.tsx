import {
  defineDocumentType,
  defineNestedType,
} from "@contentlayer/source-files"
import axios from "axios"
import GithubSlugger from "github-slugger"

import { getLastEditedDate, urlFromFilePath } from "../utils"

export type DocHeading = { level: 1 | 2 | 3; title: string }

const figmaAccessKey = process.env.FIGMA_ACCESS_KEY
const figmaProjectId = process.env.FIGMA_PROJECT_ID

export const Component = defineDocumentType(() => ({
  name: "Component",
  filePathPattern: `component/**/*.mdx`,
  contentType: "mdx",
  fields: {
    global_id: {
      type: "string",
      description:
        "Random ID to uniquely identify this doc, even after it moves",
      required: true,
    },
    title: { type: "string", required: true },
    summary: { type: "string", required: false },
    date: { type: "date", required: false },
    tags: { type: "string", required: false },
    status: { type: "string", required: false },
    node: { type: "string", required: false },
  },
  computedFields: {
    url_path: {
      type: "string",
      description:
        'The URL path of this page relative to site root. For example, the site root page would be "/", and doc page would be "docs/getting-started/"',
      resolve: (component) => {
        if (component._id.startsWith("component/**/design.mdx"))
          return "/component"
        return urlFromFilePath(component)
      },
    },
    headings: {
      type: "json",
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
          }
        )
        return headings
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
    figma_hero_svg: {
      type: "json",
      resolve: async (doc) => {
        const node = doc.node

        try {
          const response = await axios.get(
            `https://api.figma.com/v1/images/${figmaProjectId}/?ids=${node}&format=svg`,
            {
              headers: {
                "X-Figma-Token": figmaAccessKey,
              },
            }
          )

          const images = response.data.images
          const imageUrl = Object.values(images)[0] as string
          const svgResponse = await axios.get(imageUrl)

          return {
            node: node,
            svg: svgResponse.data,
          }
        } catch (error) {
          console.error("Error fetching Figma hero SVG:")
          return {
            node: node,
            svg: "",
          }
        }
      },
    },
    figma_svgs: {
      type: "json",
      resolve: async (doc) => {
        const regXHeader = /node="(?<node>.+?)"/g
        let nodes: { node: string | undefined; svg: any }[] = []

        try {
          nodes = await Promise.all(
            Array.from(doc.body.raw.matchAll(regXHeader)).map(async (match) => {
              const groups = match.groups
              const node = groups?.node

              try {
                const response = await axios.get(
                  `https://api.figma.com/v1/images/${figmaProjectId}/?ids=${node}&format=svg`,
                  {
                    headers: {
                      "X-Figma-Token": figmaAccessKey,
                    },
                  }
                )

                const images = response.data.images
                const imageUrl = Object.values(images)[0] as string
                const svgResponse = await axios.get(imageUrl)

                return {
                  node: node,
                  svg: svgResponse.data,
                }
              } catch (error) {
                console.error(`Error fetching Figma SVG`)
                return {
                  node: node,
                  svg: "",
                }
              }
            })
          )
        } catch (error) {
          console.error("Error processing Figma SVGS:")
        }

        return nodes
      },
    },
  },
  extensions: {},
}))
