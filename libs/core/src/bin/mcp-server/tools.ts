import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from '@modelcontextprotocol/sdk/types.js'

import type { Server } from '@modelcontextprotocol/sdk/server/index.js'

import { capitalize } from '../../utils/helpers/casing.js'
import { DOC_TYPES, SEARCH_CONFIG } from './constants.js'
import { formatErrorResponse, logError, NotFoundError } from './errors.js'
import { parseSearchQuery, performSearch } from './search.js'
import {
  buildResourceUri,
  findComponent,
  findIcon,
  loadComponentsIndex,
  loadGlobalIndex,
  loadIconsIndex,
  readMcpFile,
} from './utils.js'
import {
  validateGetComponentDocsInput,
  validateGetGuideInput,
  validateListGuidesInput,
  validateSearchComponentsInput,
} from './validation.js'

import type { ComponentEntry, IconEntry } from './types.js'

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

/**
 * Handle search_components tool
 * @param input - Search input (will be validated)
 * @returns Search results
 */
async function handleSearchComponents(input: unknown) {
  // Validate input
  const validatedInput = validateSearchComponentsInput(input)
  const {
    query,
    category = 'all',
    splitTerms = true,
    matchAll = false,
    useRegex = false,
    maxResults = SEARCH_CONFIG.DEFAULT_MAX_RESULTS,
  } = validatedInput

  // Load indexes based on category filter
  const loadComponents = category === 'component' || category === 'all'
  const loadIcons = category === 'icon' || category === 'all'

  const [componentsIndex, iconsIndex] = await Promise.all([
    loadComponents ? loadComponentsIndex() : Promise.resolve(null),
    loadIcons ? loadIconsIndex() : Promise.resolve(null),
  ])

  const components = componentsIndex?.components || []
  const icons = iconsIndex?.icons || []

  // Parse search query
  const { searchTerms, regexPattern } = parseSearchQuery(
    query,
    splitTerms,
    useRegex,
  )

  // Build resource URIs helper
  const buildUris = (
    item: ComponentEntry | IconEntry,
    cat: 'component' | 'icon',
  ): { [key: string]: string } => {
    const shortName = item.tagName.replace(/^gds-/, '')
    const resourceCategory = cat === 'component' ? 'components' : 'icons'
    const uris: { [key: string]: string } = {}

    for (const docType of item.files) {
      uris[docType] = buildResourceUri(resourceCategory, shortName, docType)
    }

    return uris
  }

  // Perform search
  const results = performSearch(
    components,
    icons,
    query,
    searchTerms,
    regexPattern,
    matchAll,
    splitTerms,
    maxResults,
    buildUris,
  )

  return {
    content: [
      {
        type: 'text',
        text: JSON.stringify(
          {
            query,
            resultCount: results.length,
            results,
          },
          null,
          2,
        ),
      },
    ],
  }
}

/**
 * Handle get_component_docs tool
 * @param input - Component docs input (will be validated)
 * @returns Component documentation
 */
async function handleGetComponentDocs(input: unknown) {
  // Validate input
  const validatedInput = validateGetComponentDocsInput(input)
  const {
    componentName,
    framework,
    includeGuidelines = true,
    includeInstructions = true,
  } = validatedInput

  // Load indexes
  const [componentsIndex, iconsIndex] = await Promise.all([
    loadComponentsIndex(),
    loadIconsIndex(),
  ])

  if (!componentsIndex || !iconsIndex) {
    throw new NotFoundError(
      'Failed to load component indexes',
      'index',
      'components/icons',
    )
  }

  // Find the component
  const component = findComponent(componentName, componentsIndex.components)
  const icon = component ? null : findIcon(componentName, iconsIndex.icons)
  const found = component || icon

  if (!found) {
    throw new NotFoundError(
      `Component not found: ${componentName}. Try using the search_components tool to find available components.`,
      'component',
      componentName,
    )
  }

  const shortName = found.tagName.replace(/^gds-/, '')
  const sections: string[] = []

  // Determine which doc to fetch based on framework
  let primaryDoc: string
  if (framework === 'angular') {
    primaryDoc = DOC_TYPES.ANGULAR
  } else if (framework === 'react') {
    primaryDoc = DOC_TYPES.REACT
  } else {
    primaryDoc = DOC_TYPES.API
  }

  // Add framework-specific header
  sections.push(`# ${found.tagName} - ${capitalize(framework)}`)
  sections.push('')

  if (framework === 'angular' || framework === 'react') {
    sections.push(`⚠️ **${capitalize(framework)}-Specific Documentation**`)
    sections.push(
      `The import paths and syntax below are for ${capitalize(framework)} applications.`,
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

  // Always include API reference for framework-specific docs
  // This ensures agents have complete property/event/slot/method information
  if (
    (framework === 'angular' || framework === 'react') &&
    found.files.includes(DOC_TYPES.API)
  ) {
    const apiContent = await readMcpFile(`${shortName}/${DOC_TYPES.API}.md`)
    if (apiContent) {
      sections.push('---')
      sections.push('')
      sections.push('## Component API Reference')
      sections.push('')
      sections.push(
        'The following properties, events, slots, and methods are available:',
      )
      sections.push('')

      // Remove the title and class/tag info from API content (already shown above)
      // Keep only the Properties, Events, Slots, Methods sections
      const apiWithoutHeader = apiContent
        .replace(/^#\s+.*?\n/, '')
        .replace(/\*\*Class\*\*:.*?\n/, '')
        .replace(/\*\*Tag\*\*:.*?\n/, '')
        .trim()

      sections.push(apiWithoutHeader)
      sections.push('')
    }
  }

  // Add guidelines if requested
  if (includeGuidelines && found.files.includes(DOC_TYPES.GUIDELINES)) {
    const guidelines = await readMcpFile(
      `${shortName}/${DOC_TYPES.GUIDELINES}.md`,
    )
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
  if (includeInstructions && found.files.includes(DOC_TYPES.INSTRUCTIONS)) {
    const instructions = await readMcpFile(
      `${shortName}/${DOC_TYPES.INSTRUCTIONS}.md`,
    )
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
}

/**
 * Handle list_guides tool
 * @param input - List guides input (will be validated)
 * @returns List of available guides
 */
async function handleListGuides(input: unknown) {
  // Validate input
  const validatedInput = validateListGuidesInput(input)
  const { category = 'all', framework } = validatedInput

  const globalIndex = await loadGlobalIndex()

  if (!globalIndex) {
    throw new NotFoundError('Failed to load global index', 'index', 'global')
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
}

/**
 * Handle get_guide tool
 * @param input - Get guide input (will be validated)
 * @returns Guide content
 */
async function handleGetGuide(input: unknown) {
  // Validate input
  const validatedInput = validateGetGuideInput(input)
  const { name } = validatedInput

  const globalIndex = await loadGlobalIndex()

  if (!globalIndex) {
    throw new NotFoundError('Failed to load global index', 'index', 'global')
  }

  // Find the guide in the index
  const guide = globalIndex.guides.find((g) => {
    const guideName = g.path
      .replace(/^(guides|concepts)\//, '')
      .replace(/\.md$/, '')
    return guideName === name
  })

  if (!guide) {
    throw new NotFoundError(
      `Guide not found: ${name}. Use list_guides to see available guides.`,
      'guide',
      name,
    )
  }

  // Read the guide content
  const content = await readMcpFile(guide.path)

  if (!content) {
    throw new NotFoundError(
      `Guide file not found: ${guide.path}`,
      'file',
      guide.path,
    )
  }

  return {
    content: [
      {
        type: 'text',
        text: `# ${guide.title}\n\n${content}`,
      },
    ],
  }
}

/**
 * Handle get_instructions tool
 * @returns Instructions content
 */
async function handleGetInstructions() {
  const globalIndex = await loadGlobalIndex()

  if (!globalIndex) {
    throw new NotFoundError('Failed to load global index', 'index', 'global')
  }

  if (!globalIndex.instructions) {
    throw new NotFoundError(
      'Instructions not available. The MCP may not have been generated with instructions support.',
      'file',
      'INSTRUCTIONS.md',
    )
  }

  // Read the instructions file
  const content = await readMcpFile('INSTRUCTIONS.md')

  if (!content) {
    throw new NotFoundError(
      'Instructions file not found',
      'file',
      'INSTRUCTIONS.md',
    )
  }

  return {
    content: [
      {
        type: 'text',
        text: content,
      },
    ],
  }
}
