/**
 * MCP tool registration for the Green Design System MCP Server.
 *
 * This module wires MCP protocol schemas to shared handler functions.
 * The actual business logic lives in ./handlers.ts so it can be reused
 * by other consumers (e.g. the context CLI).
 *
 * @module tools
 */

import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from '@modelcontextprotocol/sdk/types.js'

import type { Server } from '@modelcontextprotocol/sdk/server/index.js'

import { SEARCH_CONFIG } from './constants.js'
import { formatErrorResponse, logError } from './errors.js'
import {
  handleGetComponentDocs,
  handleGetGuide,
  handleGetInstructions,
  handleListGuides,
  handleSearchComponents,
} from './handlers.js'

/**
 * Register tool handlers on the MCP server.
 *
 * Defines the MCP tool schemas (names, descriptions, input schemas) and
 * delegates each tool call to the corresponding shared handler function.
 */
export function setupToolHandlers(server: Server): void {
  // List available tools
  server.setRequestHandler(ListToolsRequestSchema, async () => {
    return {
      tools: [
        {
          name: 'search_components',
          description:
            "Search for Green Design System components by name, description, or functionality. Use this when you don't know the exact component name or want to discover available components. Supports multi-term searches and regex patterns.",
          inputSchema: {
            type: 'object',
            properties: {
              query: {
                type: 'string',
                description:
                  "Component name or search term. Can be multiple terms separated by spaces/commas (e.g., 'button input radio'). Use regex format (e.g., '^gds-button') if useRegex is true.",
              },
              category: {
                type: 'string',
                enum: ['component', 'icon', 'all'],
                description: "Filter by type. Default: 'all'",
                default: 'all',
              },
              splitTerms: {
                type: 'boolean',
                description:
                  'Split query on spaces and commas to search for multiple terms. Default: true',
                default: true,
              },
              matchAll: {
                type: 'boolean',
                description:
                  'When splitTerms is true, require ALL terms to match (AND logic). Default: false (OR logic)',
                default: false,
              },
              useRegex: {
                type: 'boolean',
                description:
                  'Treat query as a regular expression pattern. Default: false',
                default: false,
              },
              maxResults: {
                type: 'number',
                description: `Maximum number of results to return (1-100). Default: ${SEARCH_CONFIG.DEFAULT_MAX_RESULTS}`,
                default: SEARCH_CONFIG.DEFAULT_MAX_RESULTS,
                minimum: 1,
                maximum: 100,
              },
            },
            required: ['query'],
          },
        },
        {
          name: 'get_component_docs',
          description:
            'Get complete documentation for a specific Green component. ALWAYS specify the framework parameter to get correct import paths, event handling syntax, and framework-specific examples.',
          inputSchema: {
            type: 'object',
            properties: {
              componentName: {
                type: 'string',
                description:
                  "Component tag name (e.g., 'gds-button') or short name (e.g., 'button')",
              },
              framework: {
                type: 'string',
                enum: ['angular', 'react', 'web-component'],
                description:
                  "REQUIRED: Framework you're using. Determines import paths and syntax. Use 'web-component' for vanilla JS/framework-agnostic usage.",
              },
              includeGuidelines: {
                type: 'boolean',
                description: 'Include UX/design guidelines in response',
                default: true,
              },
              includeInstructions: {
                type: 'boolean',
                description:
                  'Include agent-specific usage instructions if available',
                default: true,
              },
            },
            required: ['componentName', 'framework'],
          },
        },
        {
          name: 'list_guides',
          description:
            'List available setup guides and conceptual documentation for Green Design System',
          inputSchema: {
            type: 'object',
            properties: {
              category: {
                type: 'string',
                enum: [
                  'framework-setup',
                  'getting-started',
                  'concepts',
                  'troubleshooting',
                  'migration',
                  'all',
                ],
                description: "Filter by category. Default: 'all'",
                default: 'all',
              },
              framework: {
                type: 'string',
                enum: ['angular', 'react', 'all'],
                description: 'Filter guides relevant to specific framework',
              },
            },
            required: [],
          },
        },
        {
          name: 'get_guide',
          description:
            'Get the full content of a specific guide. Use list_guides first to discover available guides and their names.',
          inputSchema: {
            type: 'object',
            properties: {
              name: {
                type: 'string',
                description:
                  "The guide name (e.g., 'angular', 'react', 'installing', 'troubleshooting'). Use list_guides to see available guides.",
              },
            },
            required: ['name'],
          },
        },
        {
          name: 'get_instructions',
          description:
            'Get the base instructions for using the Green Design System MCP. These instructions contain critical rules, typography guidelines, layout system requirements, and general best practices that should be read before implementing any Green components.',
          inputSchema: {
            type: 'object',
            properties: {},
            required: [],
          },
        },
      ],
    }
  })

  // Handle tool calls
  server.setRequestHandler(CallToolRequestSchema, async (request) => {
    const { name, arguments: args } = request.params

    try {
      switch (name) {
        case 'search_components':
          return await handleSearchComponents(args)

        case 'get_component_docs':
          return await handleGetComponentDocs(args)

        case 'list_guides':
          return await handleListGuides(args)

        case 'get_guide':
          return await handleGetGuide(args)

        case 'get_instructions':
          return await handleGetInstructions()

        default:
          throw new Error(`Unknown tool: ${name}`)
      }
    } catch (error) {
      logError(error, `handleToolCall:${name}`)
      return formatErrorResponse(error)
    }
  })
}
