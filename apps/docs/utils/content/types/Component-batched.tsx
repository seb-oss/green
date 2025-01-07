import {
  defineDocumentType,
  defineNestedType,
} from '@contentlayer/source-files'
import axios from 'axios'
import GithubSlugger from 'github-slugger'

import { getLastEditedDate, urlFromFilePath } from '../utils'

export type DocHeading = { level: 1 | 2 | 3; title: string }

const figmaAccessKey = process.env.FIGMA_ACCESS_KEY
const figmaProjectId = process.env.FIGMA_PROJECT_ID

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
        const regXHeader = /node="(?<node>.+?)"/g
        const nodes = Array.from(doc.body.raw.matchAll(regXHeader)).map(
          (match) => match.groups?.node,
        )

        // Check if there are nodes to process
        if (nodes.length === 0) {
          console.warn('No nodes found for fetching SVGs.')
          return nodes.map((node) => ({
            node: node,
            svg: '',
            url: '', // Return empty SVG if no nodes found
          }))
        }

        try {
          // Fetch all images in one request
          const response = await axios.get(
            `https://api.figma.com/v1/images/${figmaProjectId}/?ids=${nodes.join(',')}&format=svg`,
            {
              headers: {
                'X-Figma-Token': figmaAccessKey,
              },
            },
          )

          const images = response.data.images
          console.log('Fetched images:', images)

          // Fetch SVG data for all images
          const fetchPromises = Object.entries(images).map(
            async ([node, imageUrl]) => {
              try {
                const svgResponse = await fetch(imageUrl as string)
                if (!svgResponse.ok) {
                  throw new Error(
                    `Failed to fetch SVG: ${svgResponse.statusText}`,
                  )
                }
                const svgData = await svgResponse.text()
                const nodeIdWithHyphen = node.replace(':', '-') // Replace the colon with a hyphen
                return {
                  node: nodeIdWithHyphen,
                  svg: svgData,
                  url: imageUrl,
                }
              } catch (error) {
                console.error(
                  `Error fetching Figma SVG for node ${node}:`,
                  error,
                )
                return {
                  node: node,
                  svg: '',
                  url: '', // Ensure url is empty if there's an error
                }
              }
            },
          )

          const svgData = await Promise.all(fetchPromises)
          return svgData
        } catch (error) {
          console.error('Error processing Figma SVGS:', error)
          return nodes.map((node) => ({
            node: node,
            svg: '',
            url: '', // Ensure url is empty if there's an error
          }))
        }
      },
    },
  },
  extensions: {},
}))
