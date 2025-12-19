import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from '@modelcontextprotocol/sdk/types.js'

import type { Server } from '@modelcontextprotocol/sdk/server/index.js'

import {
  buildResourceUri,
  findComponent,
  findIcon,
  loadComponentsIndex,
  loadGlobalIndex,
  loadIconsIndex,
  readMcpFile,
} from './utils.js'

import type {
  GetComponentDocsInput,
  GetGuideInput,
  ListGuidesInput,
  SearchComponentsInput,
  SearchResult,
} from './types.js'

/**
 * Register tool handlers on the MCP server
 */
export function setupToolHandlers(server: Server): void {
  // List available tools
  server.setRequestHandler(ListToolsRequestSchema, async () => {
    return {
      tools: [
        {
          name: 'search_components',
          description:
            "Search for Green Design System components by name, description, or functionality. Use this when you don't know the exact component name or want to discover available components.",
          inputSchema: {
            type: 'object',
            properties: {
              query: {
                type: 'string',
                description:
                  "Component name or search term (e.g., 'button', 'dropdown', 'form input', 'arrow icon')",
              },
              category: {
                type: 'string',
                enum: ['component', 'icon', 'all'],
                description: "Filter by type. Default: 'all'",
                default: 'all',
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
      ],
    }
  })

  // Handle tool calls
  server.setRequestHandler(CallToolRequestSchema, async (request) => {
    const { name, arguments: args } = request.params

    try {
      switch (name) {
        case 'search_components':
          return await handleSearchComponents(
            args as unknown as SearchComponentsInput,
          )

        case 'get_component_docs':
          return await handleGetComponentDocs(
            args as unknown as GetComponentDocsInput,
          )

        case 'list_guides':
          return await handleListGuides(args as unknown as ListGuidesInput)

        case 'get_guide':
          return await handleGetGuide(args as unknown as GetGuideInput)

        default:
          throw new Error(`Unknown tool: ${name}`)
      }
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : 'Unknown error'
      return {
        content: [
          {
            type: 'text',
            text: `Error: ${errorMessage}`,
          },
        ],
        isError: true,
      }
    }
  })
}

/**
 * Handle search_components tool
 */
async function handleSearchComponents(input: SearchComponentsInput) {
  const { query, category = 'all' } = input
  const results: SearchResult[] = []
  const queryLower = query.toLowerCase()

  try {
    // Load indexes based on category filter
    const loadComponents = category === 'component' || category === 'all'
    const loadIcons = category === 'icon' || category === 'all'

    const [componentsIndex, iconsIndex] = await Promise.all([
      loadComponents ? loadComponentsIndex() : Promise.resolve(null),
      loadIcons ? loadIconsIndex() : Promise.resolve(null),
    ])

    // Search components
    if (componentsIndex) {
      for (const component of componentsIndex.components) {
        const matches =
          component.tagName.toLowerCase().includes(queryLower) ||
          component.name.toLowerCase().includes(queryLower) ||
          component.className.toLowerCase().includes(queryLower) ||
          component.description?.toLowerCase().includes(queryLower)

        if (matches) {
          const shortName = component.tagName.replace(/^gds-/, '')
          const resourceUris: { [key: string]: string } = {}

          for (const docType of component.files) {
            resourceUris[docType] = buildResourceUri(
              'components',
              shortName,
              docType,
            )
          }

          results.push({
            name: component.name,
            tagName: component.tagName,
            className: component.className,
            description: component.description,
            category: 'component',
            availableDocs: component.files,
            resourceUris,
          })
        }
      }
    }

    // Search icons
    if (iconsIndex) {
      for (const icon of iconsIndex.icons) {
        const matches =
          icon.tagName.toLowerCase().includes(queryLower) ||
          icon.name.toLowerCase().includes(queryLower) ||
          icon.className.toLowerCase().includes(queryLower) ||
          icon.description?.toLowerCase().includes(queryLower)

        if (matches) {
          const shortName = icon.tagName.replace(/^gds-/, '')
          const resourceUris: { [key: string]: string } = {}

          for (const docType of icon.files) {
            resourceUris[docType] = buildResourceUri(
              'icons',
              shortName,
              docType,
            )
          }

          results.push({
            name: icon.name,
            tagName: icon.tagName,
            className: icon.className,
            description: icon.description,
            category: 'icon',
            availableDocs: icon.files,
            resourceUris,
          })
        }
      }
    }

    // Sort by relevance (exact matches first)
    results.sort((a, b) => {
      const aExact = a.tagName.toLowerCase() === queryLower
      const bExact = b.tagName.toLowerCase() === queryLower
      if (aExact && !bExact) return -1
      if (!aExact && bExact) return 1
      return a.tagName.localeCompare(b.tagName)
    })

    // Limit to top 20 results
    const limitedResults = results.slice(0, 20)

    return {
      content: [
        {
          type: 'text',
          text: JSON.stringify(
            {
              query,
              resultCount: limitedResults.length,
              totalMatches: results.length,
              results: limitedResults,
            },
            null,
            2,
          ),
        },
      ],
    }
  } catch (error) {
    throw new Error(`Search failed: ${error}`)
  }
}

/**
 * Handle get_component_docs tool
 */
async function handleGetComponentDocs(input: GetComponentDocsInput) {
  const {
    componentName,
    framework,
    includeGuidelines = true,
    includeInstructions = true,
  } = input

  try {
    // Load indexes
    const [componentsIndex, iconsIndex] = await Promise.all([
      loadComponentsIndex(),
      loadIconsIndex(),
    ])

    if (!componentsIndex || !iconsIndex) {
      throw new Error('Failed to load component indexes')
    }

    // Find the component
    const component = findComponent(componentName, componentsIndex.components)
    const icon = component ? null : findIcon(componentName, iconsIndex.icons)
    const found = component || icon

    if (!found) {
      throw new Error(
        `Component not found: ${componentName}. Try using the search_components tool to find available components.`,
      )
    }

    const shortName = found.tagName.replace(/^gds-/, '')
    const category = component ? 'components' : 'icons'
    const sections: string[] = []

    // Determine which doc to fetch based on framework
    let primaryDoc: string
    if (framework === 'angular') {
      primaryDoc = 'angular'
    } else if (framework === 'react') {
      primaryDoc = 'react'
    } else {
      primaryDoc = 'api'
    }

    // Add framework-specific header
    sections.push(
      `# ${found.tagName} - ${framework.charAt(0).toUpperCase() + framework.slice(1)}`,
    )
    sections.push('')

    if (framework === 'angular' || framework === 'react') {
      sections.push(
        `⚠️ **${framework.charAt(0).toUpperCase() + framework.slice(1)}-Specific Documentation**`,
      )
      sections.push(
        `The import paths and syntax below are for ${framework.charAt(0).toUpperCase() + framework.slice(1)} applications.`,
      )
      sections.push('')
    }

    // Fetch primary documentation
    if (found.files.includes(primaryDoc)) {
      const content = await readMcpFile(`${shortName}/${primaryDoc}.md`)
      if (content) {
        // Remove the title from the fetched content if it exists (we added our own)
        const contentWithoutTitle = content.replace(/^#\s+.*?\n/, '')
        sections.push(contentWithoutTitle)
        sections.push('')
      }
    }

    // Add guidelines if requested
    if (includeGuidelines && found.files.includes('guidelines')) {
      const guidelines = await readMcpFile(`${shortName}/guidelines.md`)
      if (guidelines) {
        sections.push('---')
        sections.push('')
        sections.push('## Design Guidelines')
        sections.push('')
        sections.push(guidelines)
        sections.push('')
      }
    }

    // Add instructions if requested
    if (includeInstructions && found.files.includes('instructions')) {
      const instructions = await readMcpFile(`${shortName}/instructions.md`)
      if (instructions) {
        sections.push('---')
        sections.push('')
        sections.push('## Usage Instructions')
        sections.push('')
        sections.push(instructions)
        sections.push('')
      }
    }

    // Add framework reminder
    sections.push('---')
    sections.push('')
    sections.push('💡 **Using a different framework?**')
    sections.push('Call this tool again with:')
    if (framework !== 'angular')
      sections.push('- `framework: "angular"` for Angular documentation')
    if (framework !== 'react')
      sections.push('- `framework: "react"` for React documentation')
    if (framework !== 'web-component')
      sections.push('- `framework: "web-component"` for vanilla JS usage')

    return {
      content: [
        {
          type: 'text',
          text: sections.join('\n'),
        },
      ],
    }
  } catch (error) {
    throw error
  }
}

/**
 * Handle list_guides tool
 */
async function handleListGuides(input: ListGuidesInput) {
  const { category = 'all', framework } = input

  try {
    const globalIndex = await loadGlobalIndex()

    if (!globalIndex) {
      throw new Error('Failed to load global index')
    }

    let guides = globalIndex.guides

    // Filter by category
    if (category !== 'all') {
      guides = guides.filter((g) => g.category === category)
    }

    // Filter by framework if specified
    if (framework && framework !== 'all') {
      guides = guides.filter((g) => g.tags.includes(framework))
    }

    // Build response with resource URIs
    const guidesWithUris = guides.map((guide) => {
      const name = guide.path
        .replace(/^(guides|concepts)\//, '')
        .replace(/\.md$/, '')
      const guideCategory = guide.path.startsWith('guides/')
        ? 'guides'
        : 'concepts'
      const uri = buildResourceUri(guideCategory as 'guides' | 'concepts', name)

      return {
        title: guide.title,
        category: guide.category,
        description: guide.description,
        tags: guide.tags,
        resourceUri: uri,
      }
    })

    return {
      content: [
        {
          type: 'text',
          text: JSON.stringify(
            {
              guideCount: guidesWithUris.length,
              guides: guidesWithUris,
            },
            null,
            2,
          ),
        },
      ],
    }
  } catch (error) {
    throw new Error(`Failed to list guides: ${error}`)
  }
}

/**
 * Handle get_guide tool
 */
async function handleGetGuide(input: GetGuideInput) {
  const { name } = input

  try {
    const globalIndex = await loadGlobalIndex()

    if (!globalIndex) {
      throw new Error('Failed to load global index')
    }

    // Find the guide in the index
    const guide = globalIndex.guides.find((g) => {
      const guideName = g.path
        .replace(/^(guides|concepts)\//, '')
        .replace(/\.md$/, '')
      return guideName === name
    })

    if (!guide) {
      throw new Error(
        `Guide not found: ${name}. Use list_guides to see available guides.`,
      )
    }

    // Read the guide content
    const content = await readMcpFile(guide.path)

    return {
      content: [
        {
          type: 'text',
          text: `# ${guide.title}\n\n${content}`,
        },
      ],
    }
  } catch (error) {
    throw new Error(`Failed to get guide: ${error}`)
  }
}
