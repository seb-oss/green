import { expect } from '@esm-bundle/chai'

import { CATEGORIES, FRAMEWORKS, SEARCH_CONFIG } from './constants.js'
import { RegexError, ValidationError } from './errors.js'
import { performSearch as performSearchInternal } from './search.js'
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

  // Parse query
  let searchTerms: string[] | null = null
  let regexPattern: RegExp | null = null

  if (useRegex) {
    // Remove regex delimiters if present
    const pattern =
      query.startsWith('/') && query.endsWith('/') ? query.slice(1, -1) : query
    // Validate regex length
    if (pattern.length > SEARCH_CONFIG.MAX_REGEX_LENGTH) {
      throw new RegexError(
        `Regex pattern too long (max ${SEARCH_CONFIG.MAX_REGEX_LENGTH} characters)`,
        pattern,
        { maxLength: SEARCH_CONFIG.MAX_REGEX_LENGTH },
      )
    }
    try {
      regexPattern = new RegExp(pattern, 'i')
    } catch (error) {
      throw new RegexError('Invalid regex pattern', pattern, {
        originalError: error instanceof Error ? error.message : String(error),
      })
    }
  } else if (splitTerms) {
    // For empty query with splitTerms, treat as single term search for everything
    searchTerms =
      query.trim() === ''
        ? ['gds'] // Match all gds-* components
        : query
            .toLowerCase()
            .split(/[\s,]+/)
            .filter((t) => t.length > 0)
  } else {
    searchTerms = [query.toLowerCase()]
  }

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
    searchTerms || [],
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

        expect(result.query).to.equal('button')
        expect(result.category).to.equal('component')
        expect(result.splitTerms).to.be.true
        expect(result.matchAll).to.be.false
        expect(result.useRegex).to.be.false
        expect(result.maxResults).to.equal(20)
      })

      it('should use default values for optional parameters', () => {
        const input = {
          query: 'button',
        }

        const result = validateSearchComponentsInput(input)

        expect(result.query).to.equal('button')
        expect(result.category).to.equal('all')
        expect(result.splitTerms).to.be.true
        expect(result.matchAll).to.be.false
        expect(result.useRegex).to.be.false
        expect(result.maxResults).to.equal(SEARCH_CONFIG.DEFAULT_MAX_RESULTS)
      })

      it('should reject missing query', () => {
        expect(() => validateSearchComponentsInput({})).to.throw(
          ValidationError,
        )
      })

      it('should reject invalid category', () => {
        expect(() =>
          validateSearchComponentsInput({ query: 'test', category: 'invalid' }),
        ).to.throw(ValidationError)
      })

      it('should reject maxResults out of range', () => {
        expect(() =>
          validateSearchComponentsInput({ query: 'test', maxResults: 0 }),
        ).to.throw(ValidationError)

        expect(() =>
          validateSearchComponentsInput({ query: 'test', maxResults: 101 }),
        ).to.throw(ValidationError)
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

        expect(result.componentName).to.equal('button')
        expect(result.framework).to.equal('angular')
        expect(result.includeGuidelines).to.be.true
        expect(result.includeInstructions).to.be.false
      })

      it('should use default values for optional parameters', () => {
        const input = {
          componentName: 'button',
          framework: 'react',
        }

        const result = validateGetComponentDocsInput(input)

        expect(result.componentName).to.equal('button')
        expect(result.framework).to.equal('react')
        expect(result.includeGuidelines).to.be.true
        expect(result.includeInstructions).to.be.true
      })

      it('should reject missing componentName', () => {
        expect(() =>
          validateGetComponentDocsInput({ framework: 'angular' }),
        ).to.throw(ValidationError)
      })

      it('should reject missing framework', () => {
        expect(() =>
          validateGetComponentDocsInput({ componentName: 'button' }),
        ).to.throw(ValidationError)
      })

      it('should reject invalid framework', () => {
        expect(() =>
          validateGetComponentDocsInput({
            componentName: 'button',
            framework: 'invalid',
          }),
        ).to.throw(ValidationError)
      })
    })

    describe('validateListGuidesInput', () => {
      it('should validate valid list guides input', () => {
        const input = {
          category: 'framework-setup',
          framework: 'angular',
        }

        const result = validateListGuidesInput(input)

        expect(result.category).to.equal('framework-setup')
        expect(result.framework).to.equal('angular')
      })

      it('should use default category when not provided', () => {
        const result = validateListGuidesInput({})

        expect(result.category).to.be.undefined
      })
    })

    describe('validateGetGuideInput', () => {
      it('should validate valid get guide input', () => {
        const input = {
          name: 'angular',
        }

        const result = validateGetGuideInput(input)

        expect(result.name).to.equal('angular')
      })

      it('should reject missing name', () => {
        expect(() => validateGetGuideInput({})).to.throw(ValidationError)
      })
    })

    describe('sanitizeComponentName', () => {
      it('should allow valid component names', () => {
        expect(sanitizeComponentName('button')).to.equal('button')
        expect(sanitizeComponentName('gds-button')).to.equal('gds-button')
        expect(sanitizeComponentName('icon-arrow')).to.equal('icon-arrow')
      })

      it('should sanitize path traversal attempts', () => {
        expect(sanitizeComponentName('../button')).to.equal('button')
        expect(sanitizeComponentName('../../etc/passwd')).to.equal('etcpasswd')
      })

      it('should sanitize absolute paths', () => {
        expect(sanitizeComponentName('/button')).to.equal('button')
      })

      it('should allow hyphens but strip underscores', () => {
        expect(sanitizeComponentName('my-component')).to.equal('my-component')
        expect(sanitizeComponentName('my_component')).to.equal('mycomponent')
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

      expect(results).to.have.lengthOf(1)
      expect(results[0].name).to.equal('Button')
      expect(results[0].tagName).to.equal('gds-button')
    })

    it('should find components by partial match', () => {
      const results = performSearch({
        query: 'input',
        components: mockComponents,
        icons: mockIcons,
        category: 'component',
      })

      expect(results).to.have.lengthOf(1)
      expect(results[0].name).to.equal('Input')
    })

    it('should filter by category', () => {
      const results = performSearch({
        query: 'arrow',
        components: mockComponents,
        icons: mockIcons,
        category: 'icon',
      })

      expect(results).to.have.lengthOf(1)
      expect(results[0].category).to.equal('icon')
      expect(results[0].name).to.equal('Arrow')
    })

    it('should support regex search', () => {
      const results = performSearch({
        query: '/^gds-.*on$/',
        components: mockComponents,
        icons: mockIcons,
        category: 'all',
        useRegex: true,
      })

      expect(results.length).to.be.greaterThan(0)
      results.forEach((result) => {
        expect(result.tagName).to.match(/^gds-.*on$/)
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

      expect(results).to.have.lengthOf(2)
    })

    it('should return empty array for no matches', () => {
      const results = performSearch({
        query: 'nonexistent',
        components: mockComponents,
        icons: mockIcons,
        category: 'all',
      })

      expect(results).to.be.an('array')
      expect(results).to.have.lengthOf(0)
    })

    it('should match multiple terms when splitTerms is true', () => {
      const results = performSearch({
        query: 'dropdown menu',
        components: mockComponents,
        icons: mockIcons,
        category: 'all',
        splitTerms: true,
      })

      expect(results).to.have.lengthOf(1)
      expect(results[0].name).to.equal('Dropdown')
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
      expect(results[0].name).to.equal('Button')
    })

    it('should match tag names', () => {
      const results = performSearch({
        query: 'gds-input',
        components: mockComponents,
        icons: mockIcons,
        category: 'all',
      })

      expect(results).to.have.lengthOf(1)
      expect(results[0].tagName).to.equal('gds-input')
    })

    it('should match class names', () => {
      const results = performSearch({
        query: 'gdsdropdown',
        components: mockComponents,
        icons: mockIcons,
        category: 'all',
      })

      expect(results).to.have.lengthOf(1)
      expect(results[0].className).to.equal('GdsDropdown')
    })

    it('should match descriptions', () => {
      const results = performSearch({
        query: 'selecting options',
        components: mockComponents,
        icons: mockIcons,
        category: 'all',
      })

      expect(results).to.have.lengthOf(1)
      expect(results[0].name).to.equal('Dropdown')
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
      expect(results[0].name).to.equal('Button')
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
      expect(results.length).to.equal(5) // 3 components + 2 icons
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
      ).to.throw()
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
      ).to.throw()
    })
  })

  describe('constants', () => {
    it('should have valid frameworks', () => {
      expect(FRAMEWORKS).to.include('angular')
      expect(FRAMEWORKS).to.include('react')
      expect(FRAMEWORKS).to.include('web-component')
    })

    it('should have valid categories', () => {
      expect(CATEGORIES).to.include('component')
      expect(CATEGORIES).to.include('icon')
      expect(CATEGORIES).to.include('all')
    })

    it('should have valid search config', () => {
      expect(SEARCH_CONFIG.MAX_REGEX_LENGTH).to.be.greaterThan(0)
      expect(SEARCH_CONFIG.DEFAULT_MAX_RESULTS).to.be.greaterThan(0)
    })
  })
})
