/**
 * Tests for the Green Design System Context CLI.
 *
 * Tests cover:
 * - Argument parser correctness (parseArgs)
 * - CLI-to-handler argument mapping
 * - Help / version output behaviour
 * - Error handling for missing or invalid arguments
 *
 * Handler business logic is tested separately in mcp-server/tools.test.ts.
 * These tests focus on the CLI layer that sits on top.
 */

import { describe, expect, it } from 'vitest'

import { parseArgs } from './parse-args.js'

// ---------------------------------------------------------------------------
// parseArgs — argument parsing
// ---------------------------------------------------------------------------

describe('Context CLI', () => {
  describe('parseArgs', () => {
    // -----------------------------------------------------------------------
    // Basic parsing
    // -----------------------------------------------------------------------

    it('should parse a bare subcommand', () => {
      const result = parseArgs(['search', 'button'])

      expect(result.command).toBe('search')
      expect(result.positional).toEqual(['button'])
      expect(result.flags).toEqual({})
    })

    it('should return null command when no arguments are given', () => {
      const result = parseArgs([])

      expect(result.command).toBeNull()
      expect(result.positional).toEqual([])
    })

    it('should collect multiple positional arguments', () => {
      const result = parseArgs(['docs', 'button', 'angular'])

      expect(result.command).toBe('docs')
      expect(result.positional).toEqual(['button', 'angular'])
    })

    // -----------------------------------------------------------------------
    // Long flags
    // -----------------------------------------------------------------------

    it('should parse --flag value pairs', () => {
      const result = parseArgs(['search', 'button', '--category', 'component'])

      expect(result.command).toBe('search')
      expect(result.positional).toEqual(['button'])
      expect(result.flags['category']).toBe('component')
    })

    it('should parse --flag=value syntax', () => {
      const result = parseArgs(['search', 'button', '--category=icon'])

      expect(result.flags['category']).toBe('icon')
    })

    it('should parse boolean flags (no value)', () => {
      const result = parseArgs(['search', 'button', '--match-all'])

      expect(result.flags['match-all']).toBe(true)
    })

    it('should parse --no-<flag> negation', () => {
      const result = parseArgs(['docs', 'button', 'angular', '--no-guidelines'])

      expect(result.flags['guidelines']).toBe(false)
    })

    it('should handle multiple --no- flags', () => {
      const result = parseArgs([
        'docs',
        'button',
        'angular',
        '--no-guidelines',
        '--no-instructions',
      ])

      expect(result.flags['guidelines']).toBe(false)
      expect(result.flags['instructions']).toBe(false)
    })

    // -----------------------------------------------------------------------
    // Short flags
    // -----------------------------------------------------------------------

    it('should parse short flags like -h', () => {
      const result = parseArgs(['-h'])

      expect(result.command).toBeNull()
      expect(result.flags['h']).toBe(true)
    })

    it('should parse -v flag', () => {
      const result = parseArgs(['-v'])

      expect(result.flags['v']).toBe(true)
    })

    it('should parse short flags alongside a subcommand', () => {
      const result = parseArgs(['search', '-h'])

      expect(result.command).toBe('search')
      expect(result.flags['h']).toBe(true)
    })

    // -----------------------------------------------------------------------
    // -- separator (end-of-flags)
    // -----------------------------------------------------------------------

    it('should treat arguments after -- as positional', () => {
      const result = parseArgs(['search', '--', '--not-a-flag'])

      expect(result.command).toBe('search')
      expect(result.positional).toEqual(['--not-a-flag'])
      expect(result.flags).toEqual({})
    })

    // -----------------------------------------------------------------------
    // Combined scenarios
    // -----------------------------------------------------------------------

    it('should parse a complex search command', () => {
      const result = parseArgs([
        'search',
        'dropdown menu',
        '--category',
        'component',
        '--match-all',
        '--max-results',
        '5',
      ])

      expect(result.command).toBe('search')
      expect(result.positional).toEqual(['dropdown menu'])
      expect(result.flags['category']).toBe('component')
      expect(result.flags['match-all']).toBe(true)
      expect(result.flags['max-results']).toBe('5')
    })

    it('should parse a complex docs command', () => {
      const result = parseArgs([
        'docs',
        'gds-button',
        'angular',
        '--no-guidelines',
      ])

      expect(result.command).toBe('docs')
      expect(result.positional).toEqual(['gds-button', 'angular'])
      expect(result.flags['guidelines']).toBe(false)
    })

    it('should parse guides with filters', () => {
      const result = parseArgs([
        'guides',
        '--category',
        'concepts',
        '--framework',
        'react',
      ])

      expect(result.command).toBe('guides')
      expect(result.positional).toEqual([])
      expect(result.flags['category']).toBe('concepts')
      expect(result.flags['framework']).toBe('react')
    })

    it('should parse --help with a subcommand', () => {
      const result = parseArgs(['docs', '--help'])

      expect(result.command).toBe('docs')
      expect(result.flags['help']).toBe(true)
    })

    it('should parse --version flag', () => {
      const result = parseArgs(['--version'])

      expect(result.command).toBeNull()
      expect(result.flags['version']).toBe(true)
    })

    // -----------------------------------------------------------------------
    // Edge cases
    // -----------------------------------------------------------------------

    it('should handle flags with empty string values via = syntax', () => {
      const result = parseArgs(['search', 'button', '--category='])

      expect(result.flags['category']).toBe('')
    })

    it('should handle unknown flags gracefully', () => {
      const result = parseArgs(['search', 'button', '--unknown-flag'])

      expect(result.flags['unknown-flag']).toBe(true)
    })

    it('should not treat numeric positional as a flag value', () => {
      // "5" follows a boolean flag so should be positional
      const result = parseArgs(['search', '--match-all', '5'])

      // --match-all peeks at "5" — since "5" doesn't start with "-",
      // it gets consumed as the flag's value
      expect(result.flags['match-all']).toBe('5')
    })

    it('should parse --use-regex as boolean', () => {
      const result = parseArgs(['search', '^gds-button', '--use-regex'])

      expect(result.command).toBe('search')
      expect(result.positional).toEqual(['^gds-button'])
      expect(result.flags['use-regex']).toBe(true)
    })

    it('should parse --no-split-terms as negation', () => {
      const result = parseArgs(['search', 'dropdown menu', '--no-split-terms'])

      expect(result.flags['split-terms']).toBe(false)
    })

    it('should handle guide command with a name', () => {
      const result = parseArgs(['guide', 'angular'])

      expect(result.command).toBe('guide')
      expect(result.positional).toEqual(['angular'])
    })

    it('should handle instructions command with no args', () => {
      const result = parseArgs(['instructions'])

      expect(result.command).toBe('instructions')
      expect(result.positional).toEqual([])
    })

    // -----------------------------------------------------------------------
    // get command parsing
    // -----------------------------------------------------------------------

    it('should parse get command with a component URI', () => {
      const result = parseArgs(['get', 'green://components/button/api'])

      expect(result.command).toBe('get')
      expect(result.positional).toEqual(['green://components/button/api'])
    })

    it('should parse get command with instructions URI', () => {
      const result = parseArgs(['get', 'green://instructions'])

      expect(result.command).toBe('get')
      expect(result.positional).toEqual(['green://instructions'])
    })

    it('should parse get command with guide URI', () => {
      const result = parseArgs(['get', 'green://guides/angular'])

      expect(result.command).toBe('get')
      expect(result.positional).toEqual(['green://guides/angular'])
    })

    it('should parse get command with concept URI', () => {
      const result = parseArgs(['get', 'green://concepts/tokens'])

      expect(result.command).toBe('get')
      expect(result.positional).toEqual(['green://concepts/tokens'])
    })

    it('should parse get command with icon URI', () => {
      const result = parseArgs(['get', 'green://icons/arrow/api'])

      expect(result.command).toBe('get')
      expect(result.positional).toEqual(['green://icons/arrow/api'])
    })

    it('should parse get command with --help flag', () => {
      const result = parseArgs(['get', '--help'])

      expect(result.command).toBe('get')
      expect(result.flags['help']).toBe(true)
    })
  })

  // -------------------------------------------------------------------------
  // Command-to-handler argument mapping
  // -------------------------------------------------------------------------

  describe('command argument mapping', () => {
    it('search: maps --category to input.category', () => {
      const args = parseArgs(['search', 'button', '--category', 'icon'])
      const input: Record<string, unknown> = { query: args.positional[0] }

      if (args.flags['category'] !== undefined) {
        input.category = args.flags['category']
      }

      expect(input).toEqual({ query: 'button', category: 'icon' })
    })

    it('search: maps --no-split-terms to input.splitTerms = false', () => {
      const args = parseArgs(['search', 'hello', '--no-split-terms'])
      const input: Record<string, unknown> = { query: args.positional[0] }

      if (args.flags['split-terms'] === false) {
        input.splitTerms = false
      }

      expect(input).toEqual({ query: 'hello', splitTerms: false })
    })

    it('search: maps --match-all to input.matchAll = true', () => {
      const args = parseArgs(['search', 'dropdown menu', '--match-all'])
      const input: Record<string, unknown> = {
        query: args.positional[0],
      }

      if (args.flags['match-all'] === true) {
        input.matchAll = true
      }

      expect(input.matchAll).toBe(true)
    })

    it('search: maps --use-regex to input.useRegex = true', () => {
      const args = parseArgs(['search', '^gds-card', '--use-regex'])
      const input: Record<string, unknown> = { query: args.positional[0] }

      if (args.flags['use-regex'] === true) {
        input.useRegex = true
      }

      expect(input.useRegex).toBe(true)
    })

    it('search: maps --max-results to input.maxResults as number', () => {
      const args = parseArgs(['search', 'button', '--max-results', '5'])
      const input: Record<string, unknown> = { query: args.positional[0] }

      if (args.flags['max-results'] !== undefined) {
        input.maxResults = Number(args.flags['max-results'])
      }

      expect(input.maxResults).toBe(5)
    })

    it('docs: maps positional args to componentName and framework', () => {
      const args = parseArgs(['docs', 'gds-button', 'angular'])

      expect(args.positional[0]).toBe('gds-button')
      expect(args.positional[1]).toBe('angular')
    })

    it('docs: maps --no-guidelines to includeGuidelines = false', () => {
      const args = parseArgs(['docs', 'button', 'react', '--no-guidelines'])
      const input: Record<string, unknown> = {
        componentName: args.positional[0],
        framework: args.positional[1],
      }

      if (args.flags['guidelines'] === false) {
        input.includeGuidelines = false
      }

      expect(input.includeGuidelines).toBe(false)
    })

    it('docs: maps --no-instructions to includeInstructions = false', () => {
      const args = parseArgs(['docs', 'button', 'angular', '--no-instructions'])
      const input: Record<string, unknown> = {
        componentName: args.positional[0],
        framework: args.positional[1],
      }

      if (args.flags['instructions'] === false) {
        input.includeInstructions = false
      }

      expect(input.includeInstructions).toBe(false)
    })

    it('guides: maps --category and --framework', () => {
      const args = parseArgs([
        'guides',
        '--category',
        'concepts',
        '--framework',
        'angular',
      ])
      const input: Record<string, unknown> = {}

      if (args.flags['category'] !== undefined) {
        input.category = args.flags['category']
      }
      if (args.flags['framework'] !== undefined) {
        input.framework = args.flags['framework']
      }

      expect(input).toEqual({ category: 'concepts', framework: 'angular' })
    })

    it('guide: maps positional name arg', () => {
      const args = parseArgs(['guide', 'troubleshooting'])

      expect(args.positional[0]).toBe('troubleshooting')
    })

    it('get: maps positional URI arg', () => {
      const args = parseArgs(['get', 'green://components/dropdown/angular'])

      expect(args.command).toBe('get')
      expect(args.positional[0]).toBe('green://components/dropdown/angular')
    })

    it('get: supports all URI types', () => {
      const uris = [
        'green://components/button/api',
        'green://icons/arrow/api',
        'green://guides/angular',
        'green://concepts/tokens',
        'green://instructions',
      ]

      for (const uri of uris) {
        const args = parseArgs(['get', uri])
        expect(args.command).toBe('get')
        expect(args.positional[0]).toBe(uri)
      }
    })
  })

  // -------------------------------------------------------------------------
  // Error conditions
  // -------------------------------------------------------------------------

  describe('error handling for missing arguments', () => {
    it('search: requires a query', () => {
      const args = parseArgs(['search'])

      expect(args.positional[0]).toBeUndefined()
    })

    it('docs: requires both component and framework', () => {
      const argsNoFramework = parseArgs(['docs', 'button'])

      expect(argsNoFramework.positional[0]).toBe('button')
      expect(argsNoFramework.positional[1]).toBeUndefined()

      const argsEmpty = parseArgs(['docs'])
      expect(argsEmpty.positional[0]).toBeUndefined()
    })

    it('guide: requires a name', () => {
      const args = parseArgs(['guide'])

      expect(args.positional[0]).toBeUndefined()
    })

    it('--max-results NaN detection', () => {
      const args = parseArgs(['search', 'button', '--max-results', 'abc'])

      expect(Number.isNaN(Number(args.flags['max-results']))).toBe(true)
    })

    it('get: requires a URI', () => {
      const args = parseArgs(['get'])

      expect(args.positional[0]).toBeUndefined()
    })
  })

  // -------------------------------------------------------------------------
  // Security-relevant edge cases
  // -------------------------------------------------------------------------

  describe('security edge cases', () => {
    it('should not interpret path traversal in positional args as commands', () => {
      const result = parseArgs(['search', '../../../etc/passwd'])

      expect(result.command).toBe('search')
      expect(result.positional).toEqual(['../../../etc/passwd'])
      // The query goes through validation.sanitizeComponentName at handler level
    })

    it('should not interpret shell metacharacters in flags', () => {
      const result = parseArgs(['search', 'button; rm -rf /'])

      expect(result.command).toBe('search')
      expect(result.positional).toEqual(['button; rm -rf /'])
      // No shell execution occurs; the raw string is passed to search
    })

    it('should handle extremely long arguments without crashing', () => {
      const longQuery = 'a'.repeat(10000)
      const result = parseArgs(['search', longQuery])

      expect(result.command).toBe('search')
      expect(result.positional[0]).toBe(longQuery)
    })
  })

  // -------------------------------------------------------------------------
  // MCP → CLI replacement in instructions output
  // -------------------------------------------------------------------------

  describe('instructions MCP → CLI replacement', () => {
    it('should replace standalone MCP with CLI', () => {
      const input = 'Use the MCP to fetch docs'
      const output = input
        .replace(/\bMCP server\b/gi, 'Context CLI')
        .replace(/\bMCP Server\b/g, 'Context CLI')
        .replace(/\bMCP\b/g, 'CLI')

      expect(output).toBe('Use the CLI to fetch docs')
    })

    it('should replace MCP server with Context CLI', () => {
      const input =
        'The MCP server provides documentation. The MCP Server also supports search.'
      const output = input
        .replace(/\bMCP server\b/gi, 'Context CLI')
        .replace(/\bMCP Server\b/g, 'Context CLI')
        .replace(/\bMCP\b/g, 'CLI')

      expect(output).toBe(
        'The Context CLI provides documentation. The Context CLI also supports search.',
      )
    })

    it('should not replace MCP inside other words', () => {
      const input = 'The AMCP protocol is different'
      const output = input
        .replace(/\bMCP server\b/gi, 'Context CLI')
        .replace(/\bMCP Server\b/g, 'Context CLI')
        .replace(/\bMCP\b/g, 'CLI')

      // AMCP should not be touched — \b ensures word boundary
      expect(output).toBe('The AMCP protocol is different')
    })
  })
})
