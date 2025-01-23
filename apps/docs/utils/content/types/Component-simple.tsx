import {
  defineDocumentType,
  defineNestedType,
} from '@contentlayer/source-files'
import axios from 'axios'
import GithubSlugger from 'github-slugger'

import { getLastEditedDate, urlFromFilePath } from '../utils'

export type DocHeading = { level: 1 | 2 | 3; title: string }

const FIGMA_ACCESS_KEY = process.env.FIGMA_ACCESS_KEY
const FIGMA_PROJECT_ID = process.env.FIGMA_PROJECT_ID
const ID_REGEX = /^\d{1,8}-\d{1,8}$/ // regex to match the ID format like "12345678-2234234"

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
        if (component._id.startsWith('component/**/design.mdx'))
          return '/component'
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
    figma_svgs: {
      type: 'json',
      resolve: async (doc) => {
        const regXHeader = /node="(?<node>.+?)"/g // Regex to extract node IDs
        const nodes = Array.from(doc.body.raw.matchAll(regXHeader)).map(
          (match) => match.groups?.node,
        )

        const validNodes = nodes.filter((node) => node && ID_REGEX.test(node))

        // const imagesResponse = await axios.get(
        //   `https://api.figma.com/v1/images/${FIGMA_PROJECT_ID}/?ids=${validNodes}&format=svg`,
        //   {
        //     headers: {
        //       'X-Figma-Token': FIGMA_ACCESS_KEY,
        //     },
        //   },
        // )

        const svgDataArray = []

        for (const node of validNodes) {
          svgDataArray.push({
            node: node ? node.replace(':', '-') : '',
            svg: node,
            url: '',
          })
        }

        return svgDataArray
        // // Construct the request URL only with valid IDs
        // const idsQuery = validNodes.join(',')
        // if (!idsQuery) {
        //   console.warn('No valid nodes found for fetching SVGs.')
        //   return [] // Return an empty array if no valid nodes found
        // }

        // // Fetch images for valid node IDs
        // const imagesResponse = await axios.get(
        //   `https://api.figma.com/v1/images/${FIGMA_PROJECT_ID}/?ids=${idsQuery}&format=svg`,
        //   {
        //     headers: {
        //       'X-Figma-Token': FIGMA_ACCESS_KEY,
        //     },
        //   },
        // )

        // const svgDataArray = []

        // // Process each valid node
        // for (const node of validNodes) {
        //   const imageUrl = imagesResponse.data.images[node]
        //   if (imageUrl) {
        //     const svgResponse = await fetch(imageUrl)
        //     const svgData = await svgResponse.text()
        //     svgDataArray.push({
        //       node: node.replace(':', '-'), // Replace colon with hyphen
        //       svg: svgData, // Add the SVG content here
        //       url: imageUrl,
        //     })
        //   } else {
        //     // If the image URL is not valid, push an empty entry
        //     svgDataArray.push({ node, svg: '', url: '' })
        //     console.warn(
        //       `Node ${node} is not a valid node ID or returned no image.`,
        //     )
        //   }
        // }

        // return svgDataArray
      },
    },
  },
  extensions: {},
}))
