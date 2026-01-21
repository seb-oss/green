/**
 * Type definitions for MCP data generator
 */

export interface GuidelineEntry {
  title: string
  slug: string
  summary: string
  path: string
}

export interface GuidelineContent {
  overview?: Array<{
    title?: string
    'section-content'?: string
    content?: string
    columns?: Array<{
      content?: string
      title?: string
    }>
  }>
  'ux-text'?: Array<{
    title?: string
    content?: string
  }>
}

export interface MCPIndex {
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

export interface MCPGlobalIndex {
  generatedAt: string
  instructions?: string // Reference to general instructions file
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

export interface MCPComponentsIndex {
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

export interface MCPIconsIndex {
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

export interface GuideConfig {
  source: string
  output: string
  title: string
  description: string
  category: string
  tags: string[]
}

export interface DocsConfig {
  guides: GuideConfig[]
  concepts: GuideConfig[]
}
