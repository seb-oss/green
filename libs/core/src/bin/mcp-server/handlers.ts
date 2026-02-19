/**
 * Tool handler implementations for the Green Design System.
 *
 * This module contains the core business logic for each tool operation:
 * searching components, fetching documentation, listing guides, and
 * retrieving instructions. These handlers are shared between the MCP
 * server (tools.ts) and the context CLI (context-cli/index.ts).
 *
 * Each handler:
 * 1. Validates its input via the validation module
 * 2. Loads pre-generated MCP data from disk
 * 3. Applies business logic (search, filtering, assembly)
 * 4. Returns a uniform `{ content: [{ type: 'text', text: string }] }` response
 *
 * @module handlers
 */

import type { CallToolResult } from '@modelcontextprotocol/sdk/types.js'

import { capitalize } from '../../utils/helpers/casing.js'
import { DOC_TYPES, PATHS, SEARCH_CONFIG, URI_SCHEME } from './constants.js'
import { NotFoundError } from './errors.js'
import { parseSearchQuery, performSearch } from './search.js'
import {
  buildResourceUri,
  findComponent,
  findIcon,
  loadComponentsIndex,
  loadGlobalIndex,
  loadIconsIndex,
  parseResourceUri,
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
 * Standard response shape returned by all handlers.
 * Mirrors the MCP content response format so both the MCP server
 * and the CLI can consume results uniformly.
 */
export type HandlerResponse = CallToolResult

/**
 * Handle search_components — search for components and icons by name,
 * description, or functionality.
 *
 * @param input - Raw input object (validated internally)
 * @returns Search results as JSON text
 * @throws {ValidationError} If input fails validation
 */
export async function handleSearchComponents(
  input: unknown,
): Promise<HandlerResponse> {
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

  // Parse search query into terms or regex
  const { searchTerms, regexPattern } = parseSearchQuery(
    query,
    splitTerms,
    useRegex,
  )

  // Build resource URIs for each matched item
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

  // Perform tiered relevance search
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
 * Handle get_component_docs — retrieve full documentation for a specific
 * component, including framework-specific imports, API reference, design
 * guidelines, and agent usage instructions.
 *
 * @param input - Raw input object (validated internally)
 * @returns Assembled markdown documentation
 * @throws {ValidationError} If input fails validation
 * @throws {NotFoundError} If the component cannot be found
 */
export async function handleGetComponentDocs(
  input: unknown,
): Promise<HandlerResponse> {
  const validatedInput = validateGetComponentDocsInput(input)
  const {
    componentName,
    framework,
    includeGuidelines = true,
    includeInstructions = true,
  } = validatedInput

  // Load both indexes — we need to search components and icons
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

  // Find the component (falls back to icon search)
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
 * Handle list_guides — list available setup guides and conceptual
 * documentation, optionally filtered by category and framework.
 *
 * @param input - Raw input object (validated internally)
 * @returns JSON list of guides with metadata and resource URIs
 * @throws {ValidationError} If input fails validation
 * @throws {NotFoundError} If the global index cannot be loaded
 */
export async function handleListGuides(
  input: unknown,
): Promise<HandlerResponse> {
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
 * Handle get_guide — retrieve the full content of a specific guide.
 *
 * @param input - Raw input object (validated internally)
 * @returns Guide content as markdown
 * @throws {ValidationError} If input fails validation
 * @throws {NotFoundError} If the guide cannot be found
 */
export async function handleGetGuide(input: unknown): Promise<HandlerResponse> {
  const validatedInput = validateGetGuideInput(input)
  const { name } = validatedInput

  const globalIndex = await loadGlobalIndex()

  if (!globalIndex) {
    throw new NotFoundError('Failed to load global index', 'index', 'global')
  }

  // Find the guide in the index by matching on the name portion of its path
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
 * Handle get_instructions — retrieve the base instructions document
 * containing critical rules, typography guidelines, layout system
 * requirements, and general best practices.
 *
 * @returns Instructions content as markdown
 * @throws {NotFoundError} If instructions are not available
 */
export async function handleGetInstructions(): Promise<HandlerResponse> {
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

/**
 * Handle URI resolution — read the raw content of a green:// resource URI.
 *
 * Supports all URI types:
 * - green://components/{name}/{docType}  (e.g. green://components/button/api)
 * - green://icons/{name}/{docType}       (e.g. green://icons/arrow/api)
 * - green://guides/{name}                (e.g. green://guides/angular)
 * - green://concepts/{name}              (e.g. green://concepts/tokens)
 * - green://instructions                 (the root instructions document)
 *
 * @param uri - A green:// resource URI string
 * @returns Raw markdown content of the resource
 * @throws {NotFoundError} If the URI is invalid or the resource doesn't exist
 */
export async function handleResolveUri(uri: string): Promise<HandlerResponse> {
  // Handle root instructions URI
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
      content: [{ type: 'text', text: content }],
    }
  }

  const parsed = parseResourceUri(uri)
  if (!parsed) {
    throw new NotFoundError(`Invalid resource URI format: ${uri}`, 'uri', uri)
  }

  const { category, name, docType } = parsed

  let filePath: string

  if (category === 'components' || category === 'icons') {
    if (!docType) {
      throw new NotFoundError(
        `Document type required for ${category} URIs (e.g. green://${category}/${name}/api)`,
        'docType',
        uri,
      )
    }
    filePath = `${name}/${docType}.md`
  } else if (category === 'guides' || category === 'concepts') {
    filePath = `${category}/${name}.md`
  } else {
    throw new NotFoundError(`Unknown category: ${category}`, 'category', uri)
  }

  const content = await readMcpFile(filePath)

  if (!content) {
    throw new NotFoundError(`Resource not found: ${uri}`, 'file', filePath)
  }

  return {
    content: [{ type: 'text', text: content }],
  }
}
