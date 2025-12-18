/**
 * Type definitions for Green Design System MCP Server
 */

/**
 * Component metadata from components.json
 */
export interface ComponentEntry {
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
}

/**
 * Icon metadata from icons.json
 */
export interface IconEntry {
  name: string
  tagName: string
  className: string
  description?: string
  path: string
  files: string[]
}

/**
 * Guide metadata from index.json
 */
export interface GuideEntry {
  title: string
  path: string
  category: string
  description: string
  tags: string[]
}

/**
 * Components index structure
 */
export interface ComponentsIndex {
  version: string
  generatedAt: string
  components: ComponentEntry[]
}

/**
 * Icons index structure
 */
export interface IconsIndex {
  version: string
  generatedAt: string
  icons: IconEntry[]
}

/**
 * Global index structure
 */
export interface GlobalIndex {
  version: string
  generatedAt: string
  components: string
  icons: string
  guides: GuideEntry[]
}

/**
 * Framework types
 */
export type Framework = 'angular' | 'react' | 'web-component'

/**
 * Category types for search
 */
export type Category = 'component' | 'icon' | 'all'

/**
 * Guide category types
 */
export type GuideCategory =
  | 'framework-setup'
  | 'getting-started'
  | 'concepts'
  | 'troubleshooting'
  | 'migration'
  | 'all'

/**
 * Search result
 */
export interface SearchResult {
  name: string
  tagName: string
  className: string
  description?: string
  category: 'component' | 'icon'
  availableDocs: string[]
  resourceUris: {
    [key: string]: string
  }
}

/**
 * Tool input schemas
 */
export interface SearchComponentsInput {
  query: string
  category?: Category
}

export interface GetComponentDocsInput {
  componentName: string
  framework: Framework
  includeGuidelines?: boolean
  includeInstructions?: boolean
}

export interface ListGuidesInput {
  category?: GuideCategory
  framework?: 'angular' | 'react' | 'all'
}

export interface GetGuideInput {
  name: string
}
