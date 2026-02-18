import { describe, expect, it } from 'vitest'

import { CATEGORIES, FRAMEWORKS, SEARCH_CONFIG } from './constants.js'
import { RegexError, ValidationError } from './errors.js'
import {
  parseSearchQuery,
  performSearch as performSearchInternal,
} from './search.js'
// Import only pure functions for testing (no filesystem dependencies)
import {
  sanitizeComponentName,
  validateGetComponentDocsInput,
  validateGetGuideInput,
  validateListGuidesInput,
  validateSearchComponentsInput,
} from './validation.js'

import type { ComponentEntry, IconEntry, SearchResult } from './types.js'

// Helper to wrap performSearch with an easier test interface
function performSearch(params: {
  query: string
  components: ComponentEntry[]
  icons: IconEntry[]
  category?: 'component' | 'icon' | 'all'
  splitTerms?: boolean
  matchAll?: boolean
  useRegex?: boolean
  maxResults?: number
}): SearchResult[] {
  const {
    query,
    components,
    icons,
    splitTerms = true,
    matchAll = false,
    useRegex = false,
    maxResults = 20,
  } = params

  // Use the real parseSearchQuery so that all validation (length, ReDoS, etc.) is exercised
  const { searchTerms: parsedTerms, regexPattern } = parseSearchQuery(
    query,
    splitTerms,
    useRegex,
  )

  // For empty query with splitTerms, treat as single term search for everything
  const searchTerms =
    !useRegex && splitTerms && query.trim() === '' ? ['gds'] : parsedTerms

  // Helper to build resource URIs
  const buildResourceUris = (
    item: ComponentEntry | IconEntry,
    category: 'component' | 'icon',
  ) => {
    const uris: { [key: string]: string } = {}
    for (const file of item.files) {
      uris[file] = `green://${category}s/${item.tagName}/${file}`
    }
    return uris
  }

  return performSearchInternal(
    components,
    icons,
    query,
    searchTerms,
    regexPattern,
    matchAll,
    splitTerms,
    maxResults,
    buildResourceUris,
  )
}

// Mock data for testing
const mockComponents: ComponentEntry[] = [
  {
    name: 'Button',
    tagName: 'gds-button',
    className: 'GdsButton',
    description: 'A clickable button component',
    path: 'components/button',
    files: ['api', 'guidelines'],
  },
  {
    name: 'Input',
    tagName: 'gds-input',
    className: 'GdsInput',
    description: 'An input field for text entry',
    path: 'components/input',
    files: ['api', 'guidelines'],
  },
  {
    name: 'Dropdown',
    tagName: 'gds-dropdown',
    className: 'GdsDropdown',
    description: 'A dropdown menu component for selecting options',
    path: 'components/dropdown',
    files: ['api', 'guidelines'],
  },
]

const mockIcons: IconEntry[] = [
  {
    name: 'Arrow',
    tagName: 'gds-icon-arrow',
    className: 'GdsIconArrow',
    description: 'Arrow icon',
    path: 'icons/arrow',
    files: ['api'],
  },
  {
    name: 'Check',
    tagName: 'gds-icon-check',
    className: 'GdsIconCheck',
    description: 'Checkmark icon',
    path: 'icons/check',
    files: ['api'],
  },
]

describe('MCP Tools', () => {
  describe('validation', () => {
    describe('validateSearchComponentsInput', () => {
      it('should validate valid search input', () => {
        const input = {
          query: 'button',
          category: 'component',
          splitTerms: true,
          matchAll: false,
          useRegex: false,
          maxResults: 20,
        }

        const result = validateSearchComponentsInput(input)

        expect(result.query).toBe('button')
        expect(result.category).toBe('component')
        expect(result.splitTerms).toBe(true)
        expect(result.matchAll).toBe(false)
        expect(result.useRegex).toBe(false)
        expect(result.maxResults).toBe(20)
      })

      it('should use default values for optional parameters', () => {
        const input = {
          query: 'button',
        }

        const result = validateSearchComponentsInput(input)

        expect(result.query).toBe('button')
        expect(result.category).toBe('all')
        expect(result.splitTerms).toBe(true)
        expect(result.matchAll).toBe(false)
        expect(result.useRegex).toBe(false)
        expect(result.maxResults).toBe(SEARCH_CONFIG.DEFAULT_MAX_RESULTS)
      })

      it('should reject missing query', () => {
        expect(() => validateSearchComponentsInput({})).toThrow(ValidationError)
      })

      it('should reject invalid category', () => {
        expect(() =>
          validateSearchComponentsInput({ query: 'test', category: 'invalid' }),
        ).toThrow(ValidationError)
      })

      it('should reject maxResults out of range', () => {
        expect(() =>
          validateSearchComponentsInput({ query: 'test', maxResults: 0 }),
        ).toThrow(ValidationError)

        expect(() =>
          validateSearchComponentsInput({ query: 'test', maxResults: 101 }),
        ).toThrow(ValidationError)
      })
    })

    describe('validateGetComponentDocsInput', () => {
      it('should validate valid component docs input', () => {
        const input = {
          componentName: 'button',
          framework: 'angular',
          includeGuidelines: true,
          includeInstructions: false,
        }

        const result = validateGetComponentDocsInput(input)

        expect(result.componentName).toBe('button')
        expect(result.framework).toBe('angular')
        expect(result.includeGuidelines).toBe(true)
        expect(result.includeInstructions).toBe(false)
      })

      it('should use default values for optional parameters', () => {
        const input = {
          componentName: 'button',
          framework: 'react',
        }

        const result = validateGetComponentDocsInput(input)

        expect(result.componentName).toBe('button')
        expect(result.framework).toBe('react')
        expect(result.includeGuidelines).toBe(true)
        expect(result.includeInstructions).toBe(true)
      })

      it('should reject missing componentName', () => {
        expect(() =>
          validateGetComponentDocsInput({ framework: 'angular' }),
        ).toThrow(ValidationError)
      })

      it('should reject missing framework', () => {
        expect(() =>
          validateGetComponentDocsInput({ componentName: 'button' }),
        ).toThrow(ValidationError)
      })

      it('should reject invalid framework', () => {
        expect(() =>
          validateGetComponentDocsInput({
            componentName: 'button',
            framework: 'invalid',
          }),
        ).toThrow(ValidationError)
      })
    })

    describe('validateListGuidesInput', () => {
      it('should validate valid list guides input', () => {
        const input = {
          category: 'framework-setup',
          framework: 'angular',
        }

        const result = validateListGuidesInput(input)

        expect(result.category).toBe('framework-setup')
        expect(result.framework).toBe('angular')
      })

      it('should use default category when not provided', () => {
        const result = validateListGuidesInput({})

        expect(result.category).toBeUndefined()
      })
    })

    describe('validateGetGuideInput', () => {
      it('should validate valid get guide input', () => {
        const input = {
          name: 'angular',
        }

        const result = validateGetGuideInput(input)

        expect(result.name).toBe('angular')
      })

      it('should reject missing name', () => {
        expect(() => validateGetGuideInput({})).toThrow(ValidationError)
      })
    })

    describe('sanitizeComponentName', () => {
      it('should allow valid component names', () => {
        expect(sanitizeComponentName('button')).toBe('button')
        expect(sanitizeComponentName('gds-button')).toBe('gds-button')
        expect(sanitizeComponentName('icon-arrow')).toBe('icon-arrow')
      })

      it('should sanitize path traversal attempts', () => {
        expect(sanitizeComponentName('../button')).toBe('button')
        expect(sanitizeComponentName('../../etc/passwd')).toBe('etcpasswd')
      })

      it('should sanitize absolute paths', () => {
        expect(sanitizeComponentName('/button')).toBe('button')
      })

      it('should allow hyphens but strip underscores', () => {
        expect(sanitizeComponentName('my-component')).toBe('my-component')
        expect(sanitizeComponentName('my_component')).toBe('mycomponent')
      })
    })
  })

  describe('performSearch', () => {
    it('should find components by name', () => {
      const results = performSearch({
        query: 'button',
        components: mockComponents,
        icons: mockIcons,
        category: 'all',
      })

      expect(results).toHaveLength(1)
      expect(results[0].name).toBe('Button')
      expect(results[0].tagName).toBe('gds-button')
    })

    it('should find components by partial match', () => {
      const results = performSearch({
        query: 'input',
        components: mockComponents,
        icons: mockIcons,
        category: 'component',
      })

      expect(results).toHaveLength(1)
      expect(results[0].name).toBe('Input')
    })

    it('should filter by category', () => {
      const results = performSearch({
        query: 'arrow',
        components: mockComponents,
        icons: mockIcons,
        category: 'icon',
      })

      expect(results).toHaveLength(1)
      expect(results[0].category).toBe('icon')
      expect(results[0].name).toBe('Arrow')
    })

    it('should support regex search', () => {
      const results = performSearch({
        query: '/^gds-.*on$/',
        components: mockComponents,
        icons: mockIcons,
        category: 'all',
        useRegex: true,
      })

      expect(results.length).toBeGreaterThan(0)
      results.forEach((result) => {
        expect(result.tagName).toMatch(/^gds-.*on$/)
      })
    })

    it('should respect maxResults parameter', () => {
      const results = performSearch({
        query: 'gds',
        components: mockComponents,
        icons: mockIcons,
        category: 'all',
        maxResults: 2,
      })

      expect(results).toHaveLength(2)
    })

    it('should return empty array for no matches', () => {
      const results = performSearch({
        query: 'nonexistent',
        components: mockComponents,
        icons: mockIcons,
        category: 'all',
      })

      expect(results).toBeInstanceOf(Array)
      expect(results).toHaveLength(0)
    })

    it('should match multiple terms when splitTerms is true', () => {
      const results = performSearch({
        query: 'dropdown menu',
        components: mockComponents,
        icons: mockIcons,
        category: 'all',
        splitTerms: true,
      })

      expect(results).toHaveLength(1)
      expect(results[0].name).toBe('Dropdown')
    })

    it('should rank exact name matches higher', () => {
      const components = [
        {
          name: 'Button Group',
          tagName: 'gds-button-group',
          className: 'GdsButtonGroup',
          description: 'A group of buttons',
          path: 'components/button-group',
          files: ['api'],
        },
        ...mockComponents,
      ]

      const results = performSearch({
        query: 'button',
        components,
        icons: mockIcons,
        category: 'all',
      })

      // Exact match "Button" should rank higher than "Button Group"
      expect(results[0].name).toBe('Button')
    })

    it('should match tag names', () => {
      const results = performSearch({
        query: 'gds-input',
        components: mockComponents,
        icons: mockIcons,
        category: 'all',
      })

      expect(results).toHaveLength(1)
      expect(results[0].tagName).toBe('gds-input')
    })

    it('should match class names', () => {
      const results = performSearch({
        query: 'gdsdropdown',
        components: mockComponents,
        icons: mockIcons,
        category: 'all',
      })

      expect(results).toHaveLength(1)
      expect(results[0].className).toBe('GdsDropdown')
    })

    it('should match descriptions', () => {
      const results = performSearch({
        query: 'selecting options',
        components: mockComponents,
        icons: mockIcons,
        category: 'all',
      })

      expect(results).toHaveLength(1)
      expect(results[0].name).toBe('Dropdown')
    })

    it('should sort results by relevance', () => {
      const components = [
        {
          name: 'Custom Button',
          tagName: 'gds-custom-button',
          className: 'GdsCustomButton',
          description: 'A custom button variant',
          path: 'components/custom-button',
          files: ['api'],
        },
        ...mockComponents,
      ]

      const results = performSearch({
        query: 'button',
        components,
        icons: mockIcons,
        category: 'all',
      })

      // Name match should come before description match
      expect(results[0].name).toBe('Button')
    })

    it('should handle broad query', () => {
      const results = performSearch({
        query: 'gds',
        components: mockComponents,
        icons: mockIcons,
        category: 'all',
        maxResults: 10,
      })

      // Broad query should match all items
      expect(results.length).toBe(5) // 3 components + 2 icons
    })

    it('should throw error for invalid regex', () => {
      expect(() =>
        performSearch({
          query: '/[invalid(/',
          components: mockComponents,
          icons: mockIcons,
          category: 'all',
          useRegex: true,
        }),
      ).toThrow()
    })

    it('should throw error for regex that is too long', () => {
      const longPattern = 'a'.repeat(101)

      expect(() =>
        performSearch({
          query: longPattern,
          components: mockComponents,
          icons: mockIcons,
          category: 'all',
          useRegex: true,
        }),
      ).toThrow()
    })

    it('should throw error for regex with nested quantifiers (ReDoS)', () => {
      const redosPatterns = ['(a+)+', '(a*)*b', '(a+){2,}', '([a-z]+)*']

      for (const pattern of redosPatterns) {
        expect(() =>
          performSearch({
            query: pattern,
            components: mockComponents,
            icons: mockIcons,
            category: 'all',
            useRegex: true,
          }),
        ).toThrow(/nested quantifiers|catastrophic backtracking/)
      }
    })
  })

  describe('constants', () => {
    it('should have valid frameworks', () => {
      expect(FRAMEWORKS).toContain('angular')
      expect(FRAMEWORKS).toContain('react')
      expect(FRAMEWORKS).toContain('web-component')
    })

    it('should have valid categories', () => {
      expect(CATEGORIES).toContain('component')
      expect(CATEGORIES).toContain('icon')
      expect(CATEGORIES).toContain('all')
    })

    it('should have valid search config', () => {
      expect(SEARCH_CONFIG.MAX_REGEX_LENGTH).toBeGreaterThan(0)
      expect(SEARCH_CONFIG.DEFAULT_MAX_RESULTS).toBeGreaterThan(0)
    })
  })
})
