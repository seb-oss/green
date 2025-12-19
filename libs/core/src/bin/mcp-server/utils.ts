import { promises as fs } from 'fs'
import * as path from 'node:path'
import { fileURLToPath } from 'url'

import type {
  ComponentEntry,
  ComponentsIndex,
  GlobalIndex,
  IconEntry,
  IconsIndex,
} from './types.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

/**
 * Resolve the path to the MCP data directory
 * When compiled: Server is at dist/libs/core/src/bin/mcp-server/
 * When compiled: MCP data is at dist/libs/core/src/generated/mcp/
 */
export function getMcpDataPath(): string {
  return path.resolve(__dirname, '../../generated/mcp')
}

/**
 * Read the package version from package.json at runtime
 */
export async function getPackageVersion(): Promise<string> {
  try {
    // When compiled, we're at dist/libs/core/src/bin/mcp-server/
    // package.json is at dist/libs/core/src/package.json
    const packageJsonPath = path.resolve(__dirname, '../../package.json')
    const content = await fs.readFile(packageJsonPath, 'utf-8')
    const pkg = JSON.parse(content)
    return pkg.version || '0.0.0'
  } catch (error) {
    console.error('Failed to read package version:', error)
    return '0.0.0'
  }
}

/**
 * Load and parse a JSON file
 */
async function loadJsonFile<T>(filePath: string): Promise<T | null> {
  try {
    const content = await fs.readFile(filePath, 'utf-8')
    return JSON.parse(content) as T
  } catch (error) {
    console.error(`Failed to load ${filePath}:`, error)
    return null
  }
}

/**
 * Load the components index
 */
export async function loadComponentsIndex(): Promise<ComponentsIndex | null> {
  const dataPath = getMcpDataPath()
  return loadJsonFile<ComponentsIndex>(path.join(dataPath, 'components.json'))
}

/**
 * Load the icons index
 */
export async function loadIconsIndex(): Promise<IconsIndex | null> {
  const dataPath = getMcpDataPath()
  return loadJsonFile<IconsIndex>(path.join(dataPath, 'icons.json'))
}

/**
 * Load the global index
 */
export async function loadGlobalIndex(): Promise<GlobalIndex | null> {
  const dataPath = getMcpDataPath()
  return loadJsonFile<GlobalIndex>(path.join(dataPath, 'index.json'))
}

/**
 * Normalize component name for matching
 * Handles both 'gds-button' and 'button' formats
 */
export function normalizeComponentName(name: string): string {
  const lower = name.toLowerCase().trim()
  // If it already has gds- prefix, return as-is
  if (lower.startsWith('gds-')) {
    return lower
  }
  // If it starts with icon-, add gds- prefix
  if (lower.startsWith('icon-')) {
    return `gds-${lower}`
  }
  // Otherwise, add gds- prefix
  return `gds-${lower}`
}

/**
 * Find a component by name (flexible matching)
 */
export function findComponent(
  name: string,
  components: ComponentEntry[],
): ComponentEntry | null {
  const normalized = normalizeComponentName(name)

  // Try exact match first
  let found = components.find((c) => c.tagName === normalized)
  if (found) return found

  // Try without gds- prefix
  const withoutPrefix = name.replace(/^gds-/, '')
  found = components.find((c) => c.tagName === `gds-${withoutPrefix}`)
  if (found) return found

  // Try case-insensitive partial match on tag name or name
  const lowerName = name.toLowerCase()
  found = components.find(
    (c) =>
      c.tagName.toLowerCase().includes(lowerName) ||
      c.name.toLowerCase().includes(lowerName),
  )

  return found || null
}

/**
 * Find an icon by name (flexible matching)
 */
export function findIcon(name: string, icons: IconEntry[]): IconEntry | null {
  const normalized = normalizeComponentName(name)

  // Try exact match first
  let found = icons.find((i) => i.tagName === normalized)
  if (found) return found

  // Try without gds- prefix
  const withoutPrefix = name.replace(/^gds-/, '').replace(/^icon-/, '')
  found = icons.find((i) => i.tagName === `gds-icon-${withoutPrefix}`)
  if (found) return found

  // Try case-insensitive partial match
  const lowerName = name.toLowerCase()
  found = icons.find(
    (i) =>
      i.tagName.toLowerCase().includes(lowerName) ||
      i.name.toLowerCase().includes(lowerName),
  )

  return found || null
}

/**
 * Read a markdown file from the MCP data directory
 */
export async function readMcpFile(
  relativePath: string,
): Promise<string | null> {
  try {
    const dataPath = getMcpDataPath()
    const fullPath = path.join(dataPath, relativePath)
    return await fs.readFile(fullPath, 'utf-8')
  } catch (error) {
    console.error(`Failed to read ${relativePath}:`, error)
    return null
  }
}

/**
 * Check if a file exists in the MCP data directory
 */
export async function fileExists(relativePath: string): Promise<boolean> {
  try {
    const dataPath = getMcpDataPath()
    const fullPath = path.join(dataPath, relativePath)
    await fs.access(fullPath)
    return true
  } catch {
    return false
  }
}

/**
 * Build a resource URI for a component/icon documentation file
 */
export function buildResourceUri(
  category: 'components' | 'icons' | 'guides' | 'concepts',
  name: string,
  docType?: string,
): string {
  if (docType) {
    return `green://${category}/${name}/${docType}`
  }
  return `green://${category}/${name}`
}

/**
 * Parse a resource URI into its components
 */
export function parseResourceUri(uri: string): {
  category: string
  name: string
  docType?: string
} | null {
  const match = uri.match(/^green:\/\/([^/]+)\/([^/]+)(?:\/([^/]+))?$/)
  if (!match) return null

  const [, category, name, docType] = match
  return { category, name, docType }
}
