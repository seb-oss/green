import {
  ListResourcesRequestSchema,
  ReadResourceRequestSchema,
} from '@modelcontextprotocol/sdk/types.js'

import type { Server } from '@modelcontextprotocol/sdk/server/index.js'

import { PATHS, URI_SCHEME } from './constants.js'
import { formatErrorResponse, logError, NotFoundError } from './errors.js'
import {
  buildResourceUri,
  loadComponentsIndex,
  loadGlobalIndex,
  loadIconsIndex,
  parseResourceUri,
  readMcpFile,
} from './utils.js'

/**
 * Register resource handlers on the MCP server
 */
export function setupResourceHandlers(server: Server): void {
  // Handle ListResources - return all available documentation resources
  server.setRequestHandler(ListResourcesRequestSchema, async () => {
    const resources: Array<{
      uri: string
      name: string
      description?: string
      mimeType: string
    }> = []

    try {
      // Load all indexes
      const [componentsIndex, iconsIndex, globalIndex] = await Promise.all([
        loadComponentsIndex(),
        loadIconsIndex(),
        loadGlobalIndex(),
      ])

      // Add component resources
      if (componentsIndex) {
        for (const component of componentsIndex.components) {
          const shortName = component.tagName.replace(/^gds-/, '')

          // Add each available doc type as a resource
          for (const docType of component.files) {
            const uri = buildResourceUri('components', shortName, docType)
            let description = `${component.tagName} - ${docType} documentation`

            if (docType === 'angular') {
              description = `Angular-specific documentation for ${component.tagName}`
            } else if (docType === 'react') {
              description = `React-specific documentation for ${component.tagName}`
            } else if (docType === 'api') {
              description = `Web Component API documentation for ${component.tagName}`
            } else if (docType === 'guidelines') {
              description = `UX and design guidelines for ${component.tagName}`
            } else if (docType === 'instructions') {
              description = `Agent-specific usage instructions for ${component.tagName}`
            }

            resources.push({
              uri,
              name: `${component.tagName} (${docType})`,
              description,
              mimeType: 'text/markdown',
            })
          }
        }
      }

      // Add icon resources
      if (iconsIndex) {
        for (const icon of iconsIndex.icons) {
          const shortName = icon.tagName.replace(/^gds-/, '')

          // Icons typically have api, angular, and react docs
          for (const docType of icon.files) {
            const uri = buildResourceUri('icons', shortName, docType)
            resources.push({
              uri,
              name: `${icon.tagName} (${docType})`,
              description: `${icon.tagName} icon - ${docType} documentation`,
              mimeType: 'text/markdown',
            })
          }
        }
      }

      // Add guide resources
      if (globalIndex) {
        // Add root instructions if available
        if (globalIndex.instructions) {
          resources.push({
            uri: URI_SCHEME.INSTRUCTIONS,
            name: 'Green Design System Instructions',
            description:
              'General instructions and guidelines for agents using the Green Design System MCP',
            mimeType: 'text/markdown',
          })
        }

        for (const guide of globalIndex.guides) {
          // Extract name from path (e.g., 'guides/angular.md' -> 'angular')
          const name = guide.path
            .replace(/^(guides|concepts)\//, '')
            .replace(/\.md$/, '')
          const category = guide.path.startsWith('guides/')
            ? 'guides'
            : 'concepts'
          const uri = buildResourceUri(category as 'guides' | 'concepts', name)

          resources.push({
            uri,
            name: guide.title,
            description: guide.description,
            mimeType: 'text/markdown',
          })
        }
      }

      return { resources }
    } catch (error) {
      logError(error, 'listResources')
      return { resources: [] }
    }
  })

  // Handle ReadResource - return content for a specific resource
  server.setRequestHandler(ReadResourceRequestSchema, async (request) => {
    const { uri } = request.params

    try {
      // Handle root instructions resource
      if (uri === URI_SCHEME.INSTRUCTIONS) {
        const content = await readMcpFile(PATHS.INSTRUCTIONS_FILE)
        if (!content) {
          throw new NotFoundError(
            'Instructions file not found',
            'file',
            PATHS.INSTRUCTIONS_FILE,
          )
        }
        return {
          contents: [
            {
              uri,
              mimeType: 'text/markdown',
              text: content,
            },
          ],
        }
      }

      const parsed = parseResourceUri(uri)
      if (!parsed) {
        throw new NotFoundError(`Invalid resource URI format`, 'uri', uri)
      }

      const { category, name, docType } = parsed

      let filePath: string

      if (category === 'components' || category === 'icons') {
        if (!docType) {
          throw new NotFoundError(
            `Document type required for ${category}`,
            'docType',
            uri,
          )
        }
        // Path: button/api.md or icon-arrow/api.md
        filePath = `${name}/${docType}.md`
      } else if (category === 'guides' || category === 'concepts') {
        // Path: guides/angular.md or concepts/tokens.md
        filePath = `${category}/${name}.md`
      } else {
        throw new NotFoundError(
          `Unknown category: ${category}`,
          'category',
          uri,
        )
      }

      const content = await readMcpFile(filePath)

      if (!content) {
        throw new NotFoundError(`Resource not found`, 'file', filePath, { uri })
      }

      return {
        contents: [
          {
            uri,
            mimeType: 'text/markdown',
            text: content,
          },
        ],
      }
    } catch (error) {
      logError(error, 'readResource')
      throw error
    }
  })
}
