/**
 * Search engine for components and icons
 * Handles complex matching logic with tiered relevance ranking
 */

import { SEARCH_CONFIG, SEARCH_TIERS } from './constants.js'
import { RegexError } from './errors.js'

import type { ComponentEntry, IconEntry, SearchResult } from './types.js'

/**
 * Result with internal ranking metadata
 */
interface RankedResult extends SearchResult {
  /** Match tier (lower = better) */
  tier: number
  /** Number of search terms matched */
  matchedTerms: number
}

/**
 * Match result for a single item
 */
interface MatchResult {
  /** Whether the item matches the search criteria */
  matches: boolean
  /** Match tier (lower = better) */
  tier: number
  /** Number of search terms matched */
  matchedTerms: number
}

/**
 * Compile regex pattern with safety checks
 * @param pattern - Regex pattern string
 * @returns Compiled RegExp
 * @throws RegexError if pattern is invalid or too long
 */
function compileRegexPattern(pattern: string): RegExp {
  if (pattern.length > SEARCH_CONFIG.MAX_REGEX_LENGTH) {
    throw new RegexError(
      `Regex pattern too long (max ${SEARCH_CONFIG.MAX_REGEX_LENGTH} characters)`,
      pattern,
      { maxLength: SEARCH_CONFIG.MAX_REGEX_LENGTH },
    )
  }

  try {
    return new RegExp(pattern, 'i')
  } catch (error) {
    throw new RegexError(
      `Invalid regex pattern: ${error instanceof Error ? error.message : 'unknown error'}`,
      pattern,
    )
  }
}

/**
 * Check if item matches using regex pattern
 * @param item - Component or icon entry
 * @param regex - Compiled regex pattern
 * @param originalQuery - Original query string for tier calculation
 * @returns Match result
 */
function checkRegexMatch(
  item: ComponentEntry | IconEntry,
  regex: RegExp,
  originalQuery: string,
): MatchResult {
  const tagName = item.tagName.toLowerCase()
  const name = item.name.toLowerCase()
  const className = item.className.toLowerCase()
  const description = item.description?.toLowerCase() || ''

  const matches =
    regex.test(tagName) ||
    regex.test(name) ||
    regex.test(className) ||
    regex.test(description)

  if (!matches) {
    return { matches: false, tier: 0, matchedTerms: 0 }
  }

  // Determine tier for regex matches
  const lowerQuery = originalQuery.toLowerCase()
  if (regex.test(tagName)) {
    if (tagName === lowerQuery) {
      return { matches: true, tier: SEARCH_TIERS.EXACT_MATCH, matchedTerms: 1 }
    }
    if (tagName.startsWith(lowerQuery)) {
      return { matches: true, tier: SEARCH_TIERS.STARTS_WITH, matchedTerms: 1 }
    }
    return { matches: true, tier: SEARCH_TIERS.TAG_CONTAINS, matchedTerms: 1 }
  }

  return { matches: true, tier: SEARCH_TIERS.NAME_CONTAINS, matchedTerms: 1 }
}

/**
 * Check if item matches using multi-term search
 * @param item - Component or icon entry
 * @param searchTerms - Array of search terms
 * @param matchAll - Whether all terms must match (AND logic)
 * @returns Match result
 */
function checkMultiTermMatch(
  item: ComponentEntry | IconEntry,
  searchTerms: string[],
  matchAll: boolean,
): MatchResult {
  const tagName = item.tagName.toLowerCase()
  const name = item.name.toLowerCase()
  const className = item.className.toLowerCase()
  const description = item.description?.toLowerCase() || ''

  let matchedTerms = 0
  let bestTier = SEARCH_TIERS.DESCRIPTION_CONTAINS + 1 // Start with worst tier + 1

  for (const term of searchTerms) {
    let termMatched = false
    let termTier = SEARCH_TIERS.DESCRIPTION_CONTAINS + 1

    // Check exact match
    if (tagName === `gds-${term}` || tagName === term) {
      termMatched = true
      termTier = Math.min(termTier, SEARCH_TIERS.EXACT_MATCH)
    }
    // Check starts with
    else if (tagName.startsWith(term) || tagName.startsWith(`gds-${term}`)) {
      termMatched = true
      termTier = Math.min(termTier, SEARCH_TIERS.STARTS_WITH)
    }
    // Check contains in tagName
    else if (tagName.includes(term)) {
      termMatched = true
      termTier = Math.min(termTier, SEARCH_TIERS.TAG_CONTAINS)
    }
    // Check contains in name or className
    else if (name.includes(term) || className.includes(term)) {
      termMatched = true
      termTier = Math.min(termTier, SEARCH_TIERS.NAME_CONTAINS)
    }
    // Check contains in description
    else if (description.includes(term)) {
      termMatched = true
      termTier = Math.min(termTier, SEARCH_TIERS.DESCRIPTION_CONTAINS)
    }

    if (termMatched) {
      matchedTerms++
      bestTier = Math.min(bestTier, termTier)
    }
  }

  // Determine if item matches based on matchAll logic
  const matches = matchAll
    ? matchedTerms === searchTerms.length
    : matchedTerms > 0

  return { matches, tier: matches ? bestTier : 999, matchedTerms }
}

/**
 * Parse search query into terms or regex
 * @param query - Search query
 * @param splitTerms - Whether to split query into multiple terms
 * @param useRegex - Whether to treat query as regex
 * @returns Search terms and optional regex pattern
 */
export function parseSearchQuery(
  query: string,
  splitTerms: boolean,
  useRegex: boolean,
): {
  searchTerms: string[]
  regexPattern: RegExp | null
} {
  if (useRegex) {
    const regexPattern = compileRegexPattern(query)
    return { searchTerms: [query], regexPattern }
  }

  if (splitTerms) {
    // Split on spaces and commas, remove empty strings
    const terms = query
      .toLowerCase()
      .split(/[\s,]+/)
      .filter((term) => term.length > 0)
    return { searchTerms: terms, regexPattern: null }
  }

  return { searchTerms: [query.toLowerCase()], regexPattern: null }
}

/**
 * Search components and icons with tiered relevance ranking
 * @param components - Array of component entries to search
 * @param icons - Array of icon entries to search
 * @param query - Original search query
 * @param searchTerms - Parsed search terms
 * @param regexPattern - Optional regex pattern
 * @param matchAll - Whether all terms must match
 * @param splitTerms - Whether terms were split
 * @param maxResults - Maximum number of results to return
 * @param buildResourceUris - Function to build resource URIs for a match
 * @returns Sorted array of search results
 */
export function performSearch(
  components: ComponentEntry[],
  icons: IconEntry[],
  query: string,
  searchTerms: string[],
  regexPattern: RegExp | null,
  matchAll: boolean,
  splitTerms: boolean,
  maxResults: number,
  buildResourceUris: (
    item: ComponentEntry | IconEntry,
    category: 'component' | 'icon',
  ) => { [key: string]: string },
): SearchResult[] {
  const results: RankedResult[] = []

  // Helper to check matches for an item
  const checkMatches = (item: ComponentEntry | IconEntry): MatchResult => {
    if (regexPattern) {
      return checkRegexMatch(item, regexPattern, query)
    }
    return checkMultiTermMatch(item, searchTerms, matchAll)
  }

  // Search components
  for (const component of components) {
    const { matches, tier, matchedTerms } = checkMatches(component)

    if (matches) {
      results.push({
        name: component.name,
        tagName: component.tagName,
        className: component.className,
        description: component.description,
        category: 'component',
        availableDocs: component.files,
        resourceUris: buildResourceUris(component, 'component'),
        tier,
        matchedTerms,
      })
    }
  }

  // Search icons
  for (const icon of icons) {
    const { matches, tier, matchedTerms } = checkMatches(icon)

    if (matches) {
      results.push({
        name: icon.name,
        tagName: icon.tagName,
        className: icon.className,
        description: icon.description,
        category: 'icon',
        availableDocs: icon.files,
        resourceUris: buildResourceUris(icon, 'icon'),
        tier,
        matchedTerms,
      })
    }
  }

  // Sort by relevance:
  // 1. Lower tier = better match
  // 2. More matched terms = better (when splitTerms is true)
  // 3. Alphabetically by tagName
  results.sort((a, b) => {
    if (a.tier !== b.tier) return a.tier - b.tier
    if (splitTerms && a.matchedTerms !== b.matchedTerms) {
      return b.matchedTerms - a.matchedTerms
    }
    return a.tagName.localeCompare(b.tagName)
  })

  // Limit results and remove internal ranking metadata
  return results
    .slice(0, maxResults)
    .map(({ tier, matchedTerms, ...result }) => result)
}
