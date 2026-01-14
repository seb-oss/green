import { promises as fs } from 'fs'
import * as path from 'node:path'
import { fileURLToPath } from 'url'

import { PATHS, SERVER_CONFIG } from './constants.js'
import { DataLoadError, logError } from './errors.js'

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
 * @returns Absolute path to MCP data directory
 */
export function getMcpDataPath(): string {
  return path.resolve(__dirname, '../../generated/mcp')
}

/**
 * Read the package version from package.json at runtime
 * @returns Package version string or default version
 */
export async function getPackageVersion(): Promise<string> {
  try {
    // When compiled, we're at dist/libs/core/src/bin/mcp-server/
    // package.json is at dist/libs/core/src/package.json
    const packageJsonPath = path.resolve(
      __dirname,
      `../../${PATHS.PACKAGE_JSON}`,
    )
    const content = await fs.readFile(packageJsonPath, 'utf-8')
    const pkg = JSON.parse(content)
    return pkg.version || SERVER_CONFIG.DEFAULT_VERSION
  } catch (error) {
    logError(error, 'getPackageVersion')
    return SERVER_CONFIG.DEFAULT_VERSION
  }
}

/**
 * Load and parse a JSON file
 * @param filePath - Path to JSON file
 * @returns Parsed JSON data or null if failed
 */
async function loadJsonFile<T>(filePath: string): Promise<T | null> {
  try {
    const content = await fs.readFile(filePath, 'utf-8')
    return JSON.parse(content) as T
  } catch (error) {
    throw new DataLoadError(
      `Failed to load JSON file: ${error instanceof Error ? error.message : 'unknown error'}`,
      filePath,
    )
  }
}

/**
 * Load the components index
 * @returns Components index or null if failed
 */
export async function loadComponentsIndex(): Promise<ComponentsIndex | null> {
  try {
    const dataPath = getMcpDataPath()
    return await loadJsonFile<ComponentsIndex>(
      path.join(dataPath, PATHS.COMPONENTS_INDEX),
    )
  } catch (error) {
    logError(error, 'loadComponentsIndex')
    return null
  }
}

/**
 * Load the icons index
 * @returns Icons index or null if failed
 */
export async function loadIconsIndex(): Promise<IconsIndex | null> {
  try {
    const dataPath = getMcpDataPath()
    return await loadJsonFile<IconsIndex>(
      path.join(dataPath, PATHS.ICONS_INDEX),
    )
  } catch (error) {
    logError(error, 'loadIconsIndex')
    return null
  }
}

/**
 * Load the global index
 * @returns Global index or null if failed
 */
export async function loadGlobalIndex(): Promise<GlobalIndex | null> {
  try {
    const dataPath = getMcpDataPath()
    return await loadJsonFile<GlobalIndex>(
      path.join(dataPath, PATHS.GLOBAL_INDEX),
    )
  } catch (error) {
    logError(error, 'loadGlobalIndex')
    return null
  }
}

/**
 * Normalize component name for matching
 * Handles both 'gds-button' and 'button' formats
 * @param name - Component name to normalize
 * @returns Normalized component name with gds- prefix
 *
 * @example
 * normalizeComponentName('button') // => 'gds-button'
 * normalizeComponentName('gds-button') // => 'gds-button'
 * normalizeComponentName('icon-arrow') // => 'gds-icon-arrow'
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
 * Find a component by name with flexible matching
 * @param name - Component name to search for
 * @param components - Array of component entries
 * @returns Matching component or null if not found
 *
 * @example
 * findComponent('button', components) // Finds gds-button
 * findComponent('gds-button', components) // Exact match
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
 * Find an icon by name with flexible matching
 * @param name - Icon name to search for
 * @param icons - Array of icon entries
 * @returns Matching icon or null if not found
 *
 * @example
 * findIcon('arrow', icons) // Finds gds-icon-arrow
 * findIcon('icon-arrow', icons) // Finds gds-icon-arrow
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
 * @param relativePath - Path relative to MCP data directory
 * @returns File contents or null if failed
 *
 * @example
 * readMcpFile('button/api.md')
 * readMcpFile('guides/angular.md')
 */
export async function readMcpFile(
  relativePath: string,
): Promise<string | null> {
  try {
    const dataPath = getMcpDataPath()
    const fullPath = path.join(dataPath, relativePath)
    return await fs.readFile(fullPath, 'utf-8')
  } catch (error) {
    logError(error, 'readMcpFile')
    return null
  }
}

/**
 * Check if a file exists in the MCP data directory
 * @param relativePath - Path relative to MCP data directory
 * @returns True if file exists, false otherwise
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
 * @param category - Resource category
 * @param name - Component/icon/guide name
 * @param docType - Optional documentation type
 * @returns Resource URI
 *
 * @example
 * buildResourceUri('components', 'button', 'api') // => 'green://components/button/api'
 * buildResourceUri('guides', 'angular') // => 'green://guides/angular'
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
 * @param uri - Resource URI to parse
 * @returns Parsed URI components or null if invalid
 *
 * @example
 * parseResourceUri('green://components/button/api')
 * // => { category: 'components', name: 'button', docType: 'api' }
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
