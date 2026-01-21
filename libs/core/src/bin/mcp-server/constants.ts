/**
 * Constants for the Green Design System MCP Server
 */

/**
 * Server configuration constants
 */
export const SERVER_CONFIG = {
  /** Server name used in MCP protocol */
  SERVER_NAME: 'green-design-system',
  /** Fallback version if package.json cannot be read */
  DEFAULT_VERSION: '0.0.0',
} as const

/**
 * Search configuration constants
 */
export const SEARCH_CONFIG = {
  /** Maximum length for regex patterns to prevent ReDoS attacks */
  MAX_REGEX_LENGTH: 100,
  /** Default maximum number of search results to return */
  DEFAULT_MAX_RESULTS: 20,
  /** Minimum query length required for search */
  MIN_QUERY_LENGTH: 1,
} as const

/**
 * Search result tier priorities (lower number = better match)
 * Used to rank search results by relevance
 */
export const SEARCH_TIERS = {
  /** Exact match with tag name (e.g., "gds-button" matches "gds-button") */
  EXACT_MATCH: 1,
  /** Tag name starts with search term (e.g., "button" matches "gds-button-group") */
  STARTS_WITH: 2,
  /** Tag name contains search term (e.g., "button" matches "gds-radio-button") */
  TAG_CONTAINS: 3,
  /** Name or className contains search term */
  NAME_CONTAINS: 4,
  /** Description contains search term */
  DESCRIPTION_CONTAINS: 5,
} as const

/**
 * File and path constants
 */
export const PATHS = {
  /** Name of the root instructions file */
  INSTRUCTIONS_FILE: 'INSTRUCTIONS.md',
  /** Components index file name */
  COMPONENTS_INDEX: 'components.json',
  /** Icons index file name */
  ICONS_INDEX: 'icons.json',
  /** Global index file name */
  GLOBAL_INDEX: 'index.json',
  /** Package.json file name */
  PACKAGE_JSON: 'package.json',
} as const

/**
 * URI scheme for Green resources
 */
export const URI_SCHEME = {
  /** Protocol scheme for Green resources */
  SCHEME: 'green://',
  /** Instructions resource URI */
  INSTRUCTIONS: 'green://instructions',
} as const

/**
 * Component prefixes
 */
export const PREFIXES = {
  /** Standard component prefix */
  COMPONENT: 'gds-',
  /** Icon component prefix */
  ICON: 'gds-icon-',
} as const

/**
 * Framework types
 */
export const FRAMEWORKS = ['angular', 'react', 'web-component'] as const

/**
 * Category types
 */
export const CATEGORIES = ['component', 'icon', 'all'] as const

/**
 * Guide categories
 */
export const GUIDE_CATEGORIES = [
  'framework-setup',
  'getting-started',
  'concepts',
  'troubleshooting',
  'migration',
  'all',
] as const

/**
 * Documentation types available for components
 */
export const DOC_TYPES = {
  /** Web Component API documentation */
  API: 'api',
  /** Angular-specific documentation */
  ANGULAR: 'angular',
  /** React-specific documentation */
  REACT: 'react',
  /** UX and design guidelines */
  GUIDELINES: 'guidelines',
  /** Agent-specific usage instructions */
  INSTRUCTIONS: 'instructions',
} as const
