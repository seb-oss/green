#!/usr/bin/env node
/**
 * MCP Data Generator
 *
 * Generates MCP-compatible documentation artifacts for Green Design System components.
 *
 * Output structure:
 * libs/core/src/generated/mcp/<component-name>/
 *   ├─ api.md                 (component API from component-meta)
 *   ├─ guidelines.md          (design guidelines from API)
 *   ├─ instructions.md        (copied from agents.md if exists)
 *   └─ index.json             (metadata about available files)
 */
import { promises as fs } from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

import {
  kebabToCamelCase,
  reactEventHandlerName,
  toPascalCase,
} from '../../src/utils/helpers/casing.js'
import {
  CemParser,
  ComponentData,
} from '../../src/utils/helpers/component-meta.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const COMPONENTS_DIR = path.join(__dirname, '../../src/components')
const OUTPUT_DIR = path.join(__dirname, '../../src/generated/mcp')
const GUIDELINES_API_URL = 'https://api.seb.io/components/components.json'
const GUIDELINES_BASE_URL = 'https://api.seb.io/'
const DOCS_CONFIG_PATH = path.join(__dirname, 'mcp-docs.config.json')

interface GuidelineEntry {
  title: string
  slug: string
  summary: string
  path: string
}

interface GuidelineContent {
  overview?: Array<{
    title?: string
    'section-content'?: string
    content?: string
    columns?: Array<{
      content?: string
      title?: string
      [key: string]: any
    }>
    [key: string]: any
  }>
  'ux-text'?: Array<{
    title?: string
    content?: string
    [key: string]: any
  }>
  [key: string]: any
}

interface MCPIndex {
  name: string
  files: {
    api?: string
    guidelines?: string
    instructions?: string
    angular?: string
    react?: string
  }
  subcomponents?: Array<{
    tagName: string
    description?: string
  }>
}

interface MCPGlobalIndex {
  version: string
  generatedAt: string
  components: string // Reference to components.json file
  icons: string // Reference to icons.json file
  guides: Array<{
    title: string
    path: string
    category: string
    description: string
    tags: string[]
  }>
}

interface MCPComponentsIndex {
  version: string
  generatedAt: string
  components: Array<{
    name: string
    tagName: string
    className: string
    description?: string
    path: string
    files: string[]
    subcomponents?: Array<{
      tagName: string
      description?: string
    }>
  }>
}

interface MCPIconsIndex {
  version: string
  generatedAt: string
  icons: Array<{
    name: string
    tagName: string
    className: string
    description?: string
    path: string
    files: string[]
  }>
}

interface GuideConfig {
  source: string
  output: string
  title: string
  description: string
  category: string
  tags: string[]
}

interface DocsConfig {
  guides: GuideConfig[]
  concepts: GuideConfig[]
}

/**
 * Normalizes a component name for matching with API slugs
 * Removes 'gds-' prefix and all dashes
 */
function normalizeComponentName(name: string): string {
  return name.replace(/^gds-/, '').replace(/-/g, '')
}

/**
 * Converts MDX content to plain Markdown
 * Removes MDX-specific syntax like imports and JSX elements
 */
function convertMdxToMarkdown(mdxContent: string): string {
  let markdown = mdxContent

  // Remove import statements
  markdown = markdown.replace(/^import\s+.*?from\s+['"].*?['"]\s*$/gm, '')

  // Remove JSX-style comments
  markdown = markdown.replace(/\{\/\*[\s\S]*?\*\/\}/g, '')

  // Remove <Meta> tags
  markdown = markdown.replace(/<Meta\s+[^>]*\/>/g, '')
  markdown = markdown.replace(/<Meta\s+[^>]*>[\s\S]*?<\/Meta>/g, '')

  // Remove other common Storybook components (keep content where applicable)
  markdown = markdown.replace(/<Markdown>([\s\S]*?)<\/Markdown>/g, '$1')

  // Remove custom JSX components but keep their content
  markdown = markdown.replace(
    /<[A-Z][a-zA-Z0-9]*[^>]*>([\s\S]*?)<\/[A-Z][a-zA-Z0-9]*>/g,
    '$1',
  )

  // Remove self-closing custom JSX components
  markdown = markdown.replace(/<[A-Z][a-zA-Z0-9]*[^>]*\/>/g, '')

  // Remove JSX attributes from HTML-like tags
  markdown = markdown.replace(/<(\w+)\s+[^>]*?={{[^}]*}}[^>]*?>/g, '<$1>')

  // Clean up excessive blank lines (more than 2)
  markdown = markdown.replace(/\n{3,}/g, '\n\n')

  // Trim leading/trailing whitespace
  markdown = markdown.trim()

  return markdown
}

/**
 * Fetches guidelines data from the API
 */
async function fetchGuidelines(): Promise<Map<string, GuidelineEntry>> {
  try {
    console.log('📡 Fetching guidelines from API...')
    const response = await fetch(GUIDELINES_API_URL)

    if (!response.ok) {
      console.warn(`⚠️  Failed to fetch guidelines: ${response.status}`)
      return new Map()
    }

    const data = (await response.json()) as { components: GuidelineEntry[] }
    const guidelinesMap = new Map<string, GuidelineEntry>()

    for (const entry of data.components || []) {
      const normalizedSlug = normalizeComponentName(entry.slug)
      guidelinesMap.set(normalizedSlug, entry)
    }

    console.log(`✅ Fetched ${guidelinesMap.size} guideline entries`)
    return guidelinesMap
  } catch (error) {
    console.warn('⚠️  Error fetching guidelines:', error)
    return new Map()
  }
}

/**
 * Fetches detailed guideline content for a specific component
 */
async function fetchGuidelineContent(
  guideline: GuidelineEntry,
): Promise<string | null> {
  try {
    const url = `${GUIDELINES_BASE_URL}${guideline.path}`
    const response = await fetch(url)

    if (!response.ok) {
      console.warn(
        `⚠️  Failed to fetch content for ${guideline.slug}: ${response.status}`,
      )
      return null
    }

    const content = (await response.json()) as GuidelineContent
    return extractGuidelineText(content, guideline)
  } catch (error) {
    console.warn(`⚠️  Error fetching content for ${guideline.slug}:`, error)
    return null
  }
}

/**
 * Extracts meaningful text from guideline content
 */
function extractGuidelineText(
  content: GuidelineContent,
  guideline: GuidelineEntry,
): string {
  const sections: string[] = []

  // Add title and summary
  sections.push(`# ${guideline.title}\n`)
  if (guideline.summary) {
    sections.push(`${guideline.summary}\n`)
  }

  // Extract overview sections
  if (Array.isArray(content.overview)) {
    sections.push('\n## Overview\n')

    for (const section of content.overview) {
      if (section.title) {
        sections.push(`### ${section.title}\n`)
      }

      if (section['section-content']) {
        sections.push(`${section['section-content']}\n`)
      }

      if (section.content) {
        sections.push(`${section.content}\n`)
      }

      // Extract content from columns if present
      if (Array.isArray(section.columns)) {
        for (const column of section.columns) {
          if (column.title) {
            sections.push(`#### ${column.title}\n`)
          }
          if (column.content) {
            sections.push(`${column.content}\n`)
          }
        }
      }
    }
  }

  // Extract UX text sections
  if (Array.isArray(content['ux-text'])) {
    sections.push('\n## UX Guidelines\n')

    for (const section of content['ux-text']) {
      if (section.title) {
        sections.push(`### ${section.title}\n`)
      }
      if (section.content) {
        sections.push(`${section.content}\n`)
      }
    }
  }

  return sections.filter((s) => s.trim()).join('\n')
}

/**
 * Escapes pipe characters and newlines for markdown table cells
 */
function escapeTableCell(text: string): string {
  return text.replace(/\\/g, '\\\\').replace(/\|/g, '\\|').replace(/\n/g, ' ')
}

/**
 * Generates API documentation markdown from component metadata
 */
function generateApiMarkdown(component: ComponentData): string {
  const sections: string[] = []

  sections.push(`# ${component.tagName}\n`)

  if (component.description) {
    sections.push(`${component.description}\n`)
  }

  sections.push(`**Class**: \`${component.className}\`\n`)
  sections.push(`**Tag**: \`<${component.tagName}>\`\n`)

  // Properties
  if (component.properties.length > 0) {
    sections.push('\n## Properties\n')
    sections.push('| Name | Type | Default | Description |')
    sections.push('|------|------|---------|-------------|')

    for (const prop of component.properties) {
      const name = escapeTableCell(prop.name || '')
      const type = escapeTableCell(prop.type?.text || 'any')
      const defaultValue = escapeTableCell(prop.defaultValue || '-')
      const description = escapeTableCell(prop.description || '')

      sections.push(
        `| \`${name}\` | \`${type}\` | \`${defaultValue}\` | ${description} |`,
      )
    }
    sections.push('')
  }

  // Events
  if (component.events.length > 0) {
    sections.push('\n## Events\n')
    sections.push('| Name | Type | Description |')
    sections.push('|------|------|-------------|')

    for (const event of component.events) {
      const name = escapeTableCell(event.name || '')
      const type = escapeTableCell(event.type || 'Event')
      const description = escapeTableCell(event.description || '')

      sections.push(`| \`${name}\` | \`${type}\` | ${description} |`)
    }
    sections.push('')
  }

  // Slots
  if (component.slots.length > 0) {
    sections.push('\n## Slots\n')
    sections.push('| Name | Description |')
    sections.push('|------|-------------|')

    for (const slot of component.slots) {
      const name =
        slot.name === 'default' ? '(default)' : escapeTableCell(slot.name)
      const description = escapeTableCell(slot.description || '')

      sections.push(`| \`${name}\` | ${description} |`)
    }
    sections.push('')
  }

  // Methods
  if (component.methods.length > 0) {
    sections.push('\n## Methods\n')

    for (const method of component.methods) {
      const params = method.parameters
        .map((p) => `${p.name}${p.optional ? '?' : ''}: ${p.type}`)
        .join(', ')

      const returnType = method.returnType?.text || 'void'

      sections.push(`### \`${method.name}(${params}): ${returnType}\`\n`)

      if (method.description) {
        sections.push(`${method.description}\n`)
      }

      if (method.parameters.length > 0) {
        sections.push('**Parameters:**\n')
        for (const param of method.parameters) {
          const optional = param.optional ? ' _(optional)_' : ''
          sections.push(`- \`${param.name}\`: \`${param.type}\`${optional}`)
          if (param.description) {
            sections.push(`  ${param.description}`)
          }
        }
        sections.push('')
      }
    }
  }

  // Additional metadata
  if (component.isFormControl) {
    sections.push('\n## Form Control\n')
    sections.push(
      'This component is a form control and inherits form-related properties and methods.\n',
    )
  }

  if (component.isLinkComponent) {
    sections.push('\n## Routing Support\n')
    sections.push('This component supports routing via the `href` property.\n')
  }

  // Subcomponents
  if (component.subcomponents && component.subcomponents.length > 0) {
    sections.push('\n## Related Components\n')
    sections.push(
      'This component is designed to work with the following child components:\n',
    )

    for (const sub of component.subcomponents) {
      sections.push(
        `- **\`${sub.tagName}\`** - ${sub.description || 'Used with this component'}`,
      )
    }
    sections.push('')

    // Add usage example
    sections.push('### Usage Example\n')
    sections.push('```html')
    sections.push(`<${component.tagName}>`)
    for (const sub of component.subcomponents) {
      sections.push(`  <${sub.tagName}>...</${sub.tagName}>`)
    }
    sections.push(`</${component.tagName}>`)
    sections.push('```\n')
  }

  return sections.join('\n')
}

/**
 * Generates Angular-specific documentation
 */
function generateAngularMarkdown(component: ComponentData): string {
  const sections: string[] = []

  sections.push(`# ${component.tagName} - Angular\n`)
  sections.push(`## Import\n`)
  sections.push('```typescript')
  sections.push(
    `import { ${component.className}Component } from '@sebgroup/green-core-ng'`,
  )
  sections.push('```\n')

  sections.push(`## Usage\n`)
  sections.push(`Use the component in your Angular templates:\n`)
  sections.push('```html')

  const hasSlots = component.slots.length > 0
  const hasSubcomponents =
    component.subcomponents && component.subcomponents.length > 0

  if (!hasSlots && !hasSubcomponents) {
    // Self-closing for components without slots or subcomponents
    sections.push(`<${component.tagName}></${component.tagName}>`)
  } else {
    sections.push(`<${component.tagName}>`)
    if (hasSubcomponents) {
      for (const sub of component.subcomponents!) {
        sections.push(`  <${sub.tagName}>...</${sub.tagName}>`)
      }
    } else if (hasSlots) {
      sections.push('  <!-- content -->')
    }
    sections.push(`</${component.tagName}>`)
  }

  sections.push('```\n')

  // Event handlers
  if (component.events.length > 0) {
    sections.push(`## Event Handling\n`)
    sections.push(
      'Events are emitted using Angular output syntax. Event names are converted from kebab-case to camelCase:\n',
    )
    sections.push('| Web Component Event | Angular Output | Handler Example |')
    sections.push('|---------------------|----------------|-----------------|')

    for (const event of component.events) {
      const angularEventName = kebabToCamelCase(event.name)
      const example = `(${angularEventName})="handler($event)"`
      sections.push(
        `| \`${event.name}\` | \`${angularEventName}\` | \`${example}\` |`,
      )
    }
    sections.push('')
  }

  return sections.join('\n')
}

/**
 * Generates React-specific documentation
 */
function generateReactMarkdown(component: ComponentData): string {
  const sections: string[] = []

  sections.push(`# ${component.tagName} - React\n`)
  sections.push(`## Import\n`)
  sections.push('```typescript')
  sections.push(
    `import { ${component.className} } from '@sebgroup/green-core/react'`,
  )
  sections.push('```\n')

  sections.push(`## Usage\n`)
  sections.push(`Use the component as a React JSX element:\n`)
  sections.push('```tsx')

  const hasSlots = component.slots.length > 0
  const hasSubcomponents =
    component.subcomponents && component.subcomponents.length > 0

  if (!hasSlots && !hasSubcomponents) {
    // Self-closing for components without slots or subcomponents
    sections.push(`<${component.className} />`)
  } else {
    sections.push(`<${component.className}>`)
    if (hasSubcomponents) {
      for (const sub of component.subcomponents!) {
        const subClassName = toPascalCase(sub.tagName)
        sections.push(`  <${subClassName}>...</${subClassName}>`)
      }
    } else if (hasSlots) {
      sections.push('  {/* content */}')
    }
    sections.push(`</${component.className}>`)
  }

  sections.push('```\n')

  // Event handlers
  if (component.events.length > 0) {
    sections.push(`## Event Handling\n`)
    sections.push(
      'Events are handled using React event handler props. Event names are converted from kebab-case to camelCase with an "on" prefix:\n',
    )
    sections.push(
      '| Web Component Event | React Handler Prop | Handler Example |',
    )
    sections.push(
      '|---------------------|--------------------|-----------------|',
    )

    for (const event of component.events) {
      const reactHandlerName = reactEventHandlerName(event.name)
      const example = `${reactHandlerName}={handler}`
      sections.push(
        `| \`${event.name}\` | \`${reactHandlerName}\` | \`${example}\` |`,
      )
    }
    sections.push('')
  }

  return sections.join('\n')
}

/**
 * Processes a single component
 */
async function processComponent(
  component: ComponentData,
  guidelinesMap: Map<string, GuidelineEntry>,
): Promise<void> {
  console.log(`\n📦 Processing: ${component.tagName}`)

  // Derive output directory name from tag name (e.g., 'gds-button' -> 'button')
  const dirName = component.tagName.replace(/^gds-/, '')
  const outputDir = path.join(OUTPUT_DIR, dirName)

  // Get the directory where the component source file is located
  // component.sourcePath is relative to libs/core/, e.g. 'src/components/radio/radio.ts'
  const componentSourceDir = path.join(
    __dirname,
    '../..',
    path.dirname(component.sourcePath),
  )

  // Create output directory
  await fs.mkdir(outputDir, { recursive: true })

  const index: MCPIndex = {
    name: component.tagName,
    files: {},
  }

  // Add subcomponents to index if present
  if (component.subcomponents && component.subcomponents.length > 0) {
    index.subcomponents = component.subcomponents.map((sub) => ({
      tagName: sub.tagName,
      description: sub.description,
    }))
  }

  // Generate API documentation
  try {
    const apiMarkdown = generateApiMarkdown(component)
    const apiPath = path.join(outputDir, 'api.md')
    await fs.writeFile(apiPath, apiMarkdown, 'utf-8')
    index.files.api = 'api.md'
    console.log('  ✅ Generated api.md')
  } catch (error) {
    console.error('  ❌ Failed to generate api.md:', error)
  }

  // Check for agents.md in the component source directory and copy as instructions.md
  try {
    const agentsPath = path.join(componentSourceDir, 'agents.md')
    await fs.access(agentsPath)

    const content = await fs.readFile(agentsPath, 'utf-8')
    const instructionsPath = path.join(outputDir, 'instructions.md')
    await fs.writeFile(instructionsPath, content, 'utf-8')
    index.files.instructions = 'instructions.md'
    console.log('  ✅ Copied instructions.md')
  } catch {
    // agents.md doesn't exist, skip silently
  }

  // Fetch and save guidelines
  const normalizedName = normalizeComponentName(component.tagName)
  const guideline = guidelinesMap.get(normalizedName)

  if (guideline) {
    try {
      const guidelineContent = await fetchGuidelineContent(guideline)

      if (guidelineContent) {
        const guidelinesPath = path.join(outputDir, 'guidelines.md')
        await fs.writeFile(guidelinesPath, guidelineContent, 'utf-8')
        index.files.guidelines = 'guidelines.md'
        console.log('  ✅ Generated guidelines.md')
      } else {
        console.log('  ⚠️  No guideline content available')
      }
    } catch (error) {
      console.error('  ❌ Failed to fetch guidelines:', error)
    }
  } else {
    console.log(
      `  ⚠️  No guideline found for normalized name: ${normalizedName}`,
    )
  }

  // Generate Angular documentation
  try {
    const angularMarkdown = generateAngularMarkdown(component)
    const angularPath = path.join(outputDir, 'angular.md')
    await fs.writeFile(angularPath, angularMarkdown, 'utf-8')
    index.files.angular = 'angular.md'
    console.log('  ✅ Generated angular.md')
  } catch (error) {
    console.error('  ❌ Failed to generate angular.md:', error)
  }

  // Generate React documentation
  try {
    const reactMarkdown = generateReactMarkdown(component)
    const reactPath = path.join(outputDir, 'react.md')
    await fs.writeFile(reactPath, reactMarkdown, 'utf-8')
    index.files.react = 'react.md'
    console.log('  ✅ Generated react.md')
  } catch (error) {
    console.error('  ❌ Failed to generate react.md:', error)
  }

  // Write index.json
  try {
    const indexPath = path.join(outputDir, 'index.json')
    await fs.writeFile(indexPath, JSON.stringify(index, null, 2), 'utf-8')
    console.log('  ✅ Generated index.json')
  } catch (error) {
    console.error('  ❌ Failed to generate index.json:', error)
  }
}

/**
 * Generates the global MCP index listing all components
 */
async function generateGlobalIndex(
  processedComponents: Array<{ component: ComponentData; dirName: string }>,
  guides: MCPGlobalIndex['guides'],
): Promise<void> {
  console.log('\n📋 Generating global index...')

  const indexComponents: MCPComponentsIndex['components'] = []
  const indexIcons: MCPIconsIndex['icons'] = []

  // Build index from processed components
  for (const { component, dirName } of processedComponents) {
    try {
      const componentDir = path.join(OUTPUT_DIR, dirName)
      const indexPath = path.join(componentDir, 'index.json')

      const indexContent = await fs.readFile(indexPath, 'utf-8')
      const componentIndex = JSON.parse(indexContent) as MCPIndex

      // Build file list
      const files: string[] = []
      if (componentIndex.files.api) files.push('api')
      if (componentIndex.files.guidelines) files.push('guidelines')
      if (componentIndex.files.instructions) files.push('instructions')
      if (componentIndex.files.angular) files.push('angular')
      if (componentIndex.files.react) files.push('react')

      const entry = {
        name: componentIndex.name,
        tagName: component.tagName,
        className: component.className,
        description: component.description,
        path: `${dirName}/`,
        files,
      }

      // Separate icons from regular components
      if (component.isIconComponent) {
        indexIcons.push(entry)
      } else {
        indexComponents.push({
          ...entry,
          subcomponents: componentIndex.subcomponents,
        })
      }
    } catch (error) {
      console.warn(`  ⚠️  Error reading index for ${component.tagName}:`, error)
    }
  }

  // Sort both arrays alphabetically by tag name
  indexComponents.sort((a, b) => a.tagName.localeCompare(b.tagName))
  indexIcons.sort((a, b) => a.tagName.localeCompare(b.tagName))

  const timestamp = new Date().toISOString()

  // Write components index
  const componentsIndex: MCPComponentsIndex = {
    version: '1.0.0',
    generatedAt: timestamp,
    components: indexComponents,
  }
  const componentsIndexPath = path.join(OUTPUT_DIR, 'components.json')
  await fs.writeFile(
    componentsIndexPath,
    JSON.stringify(componentsIndex, null, 2),
    'utf-8',
  )

  // Write icons index
  const iconsIndex: MCPIconsIndex = {
    version: '1.0.0',
    generatedAt: timestamp,
    icons: indexIcons,
  }
  const iconsIndexPath = path.join(OUTPUT_DIR, 'icons.json')
  await fs.writeFile(
    iconsIndexPath,
    JSON.stringify(iconsIndex, null, 2),
    'utf-8',
  )

  // Write global index with references
  const globalIndex: MCPGlobalIndex = {
    version: '1.0.0',
    generatedAt: timestamp,
    components: './components.json',
    icons: './icons.json',
    guides,
  }
  const globalIndexPath = path.join(OUTPUT_DIR, 'index.json')
  await fs.writeFile(
    globalIndexPath,
    JSON.stringify(globalIndex, null, 2),
    'utf-8',
  )

  console.log(
    `✅ Generated components index with ${indexComponents.length} components`,
  )
  console.log(`✅ Generated icons index with ${indexIcons.length} icons`)
  console.log(`✅ Generated global index with ${guides.length} guides`)
}

/**
 * Processes documentation guides from MDX to Markdown
 */
async function processGuides(): Promise<MCPGlobalIndex['guides']> {
  console.log('\n📚 Processing documentation guides...')

  try {
    // Read the docs config
    const configContent = await fs.readFile(DOCS_CONFIG_PATH, 'utf-8')
    const docsConfig: DocsConfig = JSON.parse(configContent)

    const allGuides = [...docsConfig.guides, ...docsConfig.concepts]
    const guideMetadata: MCPGlobalIndex['guides'] = []

    for (const guide of allGuides) {
      try {
        // Read MDX source
        const sourcePath = path.join(__dirname, '../..', guide.source)
        const mdxContent = await fs.readFile(sourcePath, 'utf-8')

        // Convert to Markdown
        const markdownContent = convertMdxToMarkdown(mdxContent)

        // Write Markdown output
        const outputPath = path.join(OUTPUT_DIR, guide.output)
        await fs.mkdir(path.dirname(outputPath), { recursive: true })
        await fs.writeFile(outputPath, markdownContent, 'utf-8')

        // Add to metadata
        guideMetadata.push({
          title: guide.title,
          path: guide.output,
          category: guide.category,
          description: guide.description,
          tags: guide.tags,
        })

        console.log(`  ✅ ${guide.title}`)
      } catch (error) {
        console.warn(`  ⚠️  Failed to process ${guide.title}:`, error)
      }
    }

    console.log(`✅ Processed ${guideMetadata.length} guides`)
    return guideMetadata
  } catch (error) {
    console.warn('⚠️  Error processing guides:', error)
    return []
  }
}

/**
 * Main execution
 */
async function main() {
  console.log('🚀 Starting MCP data generation...\n')

  try {
    // Parse all components from custom-elements.json
    console.log('📖 Parsing component metadata...')
    const { components } = await CemParser.parseAllComponents(
      '../../../custom-elements.json',
    )
    console.log(`✅ Found ${components.length} components\n`)

    // Fetch guidelines
    const guidelinesMap = await fetchGuidelines()

    // Process each component
    let successCount = 0
    let errorCount = 0
    const processedComponents: Array<{
      component: ComponentData
      dirName: string
    }> = []

    for (const component of components) {
      try {
        await processComponent(component, guidelinesMap)

        // Derive directory name from tag name (e.g., 'gds-button' -> 'button')
        const dirName = component.tagName.replace(/^gds-/, '')
        processedComponents.push({ component, dirName })

        successCount++
      } catch (error) {
        console.error(`❌ Failed to process ${component.tagName}:`, error)
        errorCount++
      }
    }

    // Process documentation guides
    let guides: MCPGlobalIndex['guides'] = []
    try {
      guides = await processGuides()
    } catch (error) {
      console.error('❌ Failed to process guides:', error)
      errorCount++
    }

    // Generate global index
    try {
      await generateGlobalIndex(processedComponents, guides)
    } catch (error) {
      console.error('❌ Failed to generate global index:', error)
      errorCount++
    }

    // Summary
    console.log('\n' + '='.repeat(60))
    console.log('📊 Summary:')
    console.log(`   ✅ Successful: ${successCount}`)
    console.log(`   ❌ Errors: ${errorCount}`)
    console.log(`   📁 Output: ${OUTPUT_DIR}`)
    console.log('='.repeat(60))
    console.log('\n✨ MCP data generation complete!\n')
  } catch (error) {
    console.error('💥 Fatal error:', error)
    process.exit(1)
  }
}

main()
