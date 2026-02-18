#!/usr/bin/env node
/**
 * Green Design System Context CLI
 *
 * A command-line interface for accessing Green Design System documentation,
 * component APIs, guides, and usage instructions. Provides the same context
 * as the Green MCP server, but accessible from the terminal without requiring
 * MCP protocol support.
 *
 * All output goes to stdout so it can be piped to filtering utilities
 * (grep, jq, less, etc.). Errors and diagnostics go to stderr.
 *
 * Security considerations:
 * - All user input is validated and sanitized through the shared validation
 *   module (path traversal prevention, regex length limits, input type checks)
 * - No shell execution or external command invocation
 * - No network access — all data is read from pre-generated local files
 * - Arguments are parsed from process.argv directly (no eval or injection risk)
 *
 * @module context-cli
 * @see {@link ../mcp-server/handlers.ts} for the shared handler logic
 */
import { McpError } from '../mcp-server/errors.js'
import {
  handleGetComponentDocs,
  handleGetGuide,
  handleGetInstructions,
  handleListGuides,
  handleSearchComponents,
} from '../mcp-server/handlers.js'
import { getPackageVersion } from '../mcp-server/utils.js'

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

/** Parsed result from the argument parser */
interface ParsedArgs {
  /** The subcommand (or null for top-level flags like --help / --version) */
  command: string | null
  /** Positional arguments following the subcommand */
  positional: string[]
  /** Named flags (e.g. --category → category) mapped to their values */
  flags: Record<string, string | boolean>
}

// ---------------------------------------------------------------------------
// Constants — help text
// ---------------------------------------------------------------------------

const PROGRAM_NAME = 'green-core-context'

const HELP_TEXT = `
Green Design System — Context CLI

Provides design system documentation, component APIs, guides, and usage
instructions directly from the command line. Outputs to stdout for easy
piping to grep, jq, less, etc.

USAGE
  ${PROGRAM_NAME} <command> [options]

COMMANDS
  search <query>                    Search for components and icons
  docs <component> <framework>      Get component documentation
  guides                            List available guides
  guide <name>                      Get a specific guide's content
  instructions                      Get base usage instructions

GLOBAL OPTIONS
  -h, --help                        Show this help message
  -v, --version                     Show version number

Run '${PROGRAM_NAME} <command> --help' for command-specific options.
`.trim()

const SEARCH_HELP = `
Search for Green Design System components and icons by name, description,
or functionality.

USAGE
  ${PROGRAM_NAME} search <query> [options]

ARGUMENTS
  query                             Search term (required)

OPTIONS
  --category <type>                 Filter by type: component, icon, all
                                    (default: all)
  --no-split-terms                  Don't split query on spaces/commas
  --match-all                       Require ALL terms to match (AND logic)
  --use-regex                       Treat query as a regular expression
  --max-results <n>                 Maximum results to return, 1-100
                                    (default: 20)
  -h, --help                        Show this help message

EXAMPLES
  ${PROGRAM_NAME} search button
  ${PROGRAM_NAME} search "dropdown menu" --match-all
  ${PROGRAM_NAME} search "^gds-card" --use-regex
  ${PROGRAM_NAME} search arrow --category icon
  ${PROGRAM_NAME} search button | jq '.results[0]'
`.trim()

const DOCS_HELP = `
Get complete documentation for a specific Green component, including
framework-specific import paths, API reference, and design guidelines.

USAGE
  ${PROGRAM_NAME} docs <component> <framework> [options]

ARGUMENTS
  component                         Component name, e.g. "button" or
                                    "gds-button" (required)
  framework                         Target framework: angular, react, or
                                    web-component (required)

OPTIONS
  --no-guidelines                   Exclude UX/design guidelines
  --no-instructions                 Exclude agent-specific instructions
  -h, --help                        Show this help message

EXAMPLES
  ${PROGRAM_NAME} docs button angular
  ${PROGRAM_NAME} docs gds-dropdown react
  ${PROGRAM_NAME} docs card web-component --no-guidelines
`.trim()

const GUIDES_HELP = `
List available setup guides and conceptual documentation.

USAGE
  ${PROGRAM_NAME} guides [options]

OPTIONS
  --category <type>                 Filter by category: framework-setup,
                                    getting-started, concepts,
                                    troubleshooting, migration, all
                                    (default: all)
  --framework <name>                Filter by framework: angular, react, all
  -h, --help                        Show this help message

EXAMPLES
  ${PROGRAM_NAME} guides
  ${PROGRAM_NAME} guides --category concepts
  ${PROGRAM_NAME} guides --framework angular
`.trim()

const GUIDE_HELP = `
Get the full content of a specific guide.

USAGE
  ${PROGRAM_NAME} guide <name>

ARGUMENTS
  name                              Guide name, e.g. "angular", "installing",
                                    "troubleshooting" (required).
                                    Run '${PROGRAM_NAME} guides' to see
                                    available guide names.

OPTIONS
  -h, --help                        Show this help message

EXAMPLES
  ${PROGRAM_NAME} guide angular
  ${PROGRAM_NAME} guide troubleshooting | less
`.trim()

const INSTRUCTIONS_HELP = `
Get the base instructions for using Green Design System. Contains critical
rules, typography guidelines, layout system requirements, and best practices.

USAGE
  ${PROGRAM_NAME} instructions

OPTIONS
  -h, --help                        Show this help message
`.trim()

// ---------------------------------------------------------------------------
// Argument parsing
// ---------------------------------------------------------------------------

/**
 * Parse process.argv into a structured object.
 *
 * Supports:
 * - Positional arguments
 * - Long flags: --flag, --flag value, --flag=value
 * - Short flags: -h, -v
 * - Boolean negation: --no-<flag> → flag = false
 *
 * @param argv - Raw argument array (typically process.argv.slice(2))
 * @returns Parsed command, positional args, and flags
 */
export function parseArgs(argv: string[]): ParsedArgs {
  const positional: string[] = []
  const flags: Record<string, string | boolean> = {}
  let i = 0

  while (i < argv.length) {
    const arg = argv[i]

    if (arg === '--') {
      // Everything after -- is positional
      positional.push(...argv.slice(i + 1))
      break
    }

    if (arg.startsWith('--')) {
      // Handle --flag=value
      const eqIndex = arg.indexOf('=')
      if (eqIndex !== -1) {
        const key = arg.slice(2, eqIndex)
        flags[key] = arg.slice(eqIndex + 1)
      } else {
        const key = arg.slice(2)

        // Boolean negation: --no-<flag>
        if (key.startsWith('no-')) {
          flags[key.slice(3)] = false
        } else {
          // Peek at next arg to see if it's a value
          const next = argv[i + 1]
          if (next !== undefined && !next.startsWith('-')) {
            flags[key] = next
            i++
          } else {
            flags[key] = true
          }
        }
      }
    } else if (arg.startsWith('-') && arg.length === 2) {
      // Short flag: -h, -v
      flags[arg.slice(1)] = true
    } else {
      positional.push(arg)
    }

    i++
  }

  return {
    command: positional.length > 0 ? positional[0] : null,
    positional: positional.slice(1),
    flags,
  }
}

// ---------------------------------------------------------------------------
// Command handlers — map CLI args to shared handler functions
// ---------------------------------------------------------------------------

/**
 * Execute the "search" command.
 * Maps CLI flags to the handleSearchComponents handler input.
 */
async function runSearch(args: ParsedArgs): Promise<void> {
  if (args.flags['h'] || args.flags['help']) {
    process.stdout.write(SEARCH_HELP + '\n')
    return
  }

  const query = args.positional[0]
  if (!query) {
    process.stderr.write('Error: search requires a <query> argument.\n\n')
    process.stderr.write(SEARCH_HELP + '\n')
    process.exitCode = 1
    return
  }

  const input: Record<string, unknown> = { query }

  if (args.flags['category'] !== undefined) {
    input.category = args.flags['category']
  }
  if (args.flags['split-terms'] === false) {
    input.splitTerms = false
  }
  if (args.flags['match-all']) {
    input.matchAll = true
  }
  if (args.flags['use-regex']) {
    input.useRegex = true
  }
  if (args.flags['max-results'] !== undefined) {
    const n = Number(args.flags['max-results'])
    if (Number.isNaN(n)) {
      process.stderr.write('Error: --max-results must be a number.\n')
      process.exitCode = 1
      return
    }
    input.maxResults = n
  }

  const result = await handleSearchComponents(input)
  process.stdout.write(result.content[0].text + '\n')
}

/**
 * Execute the "docs" command.
 * Maps CLI flags to the handleGetComponentDocs handler input.
 */
async function runDocs(args: ParsedArgs): Promise<void> {
  if (args.flags['h'] || args.flags['help']) {
    process.stdout.write(DOCS_HELP + '\n')
    return
  }

  const componentName = args.positional[0]
  const framework = args.positional[1]

  if (!componentName || !framework) {
    process.stderr.write(
      'Error: docs requires <component> and <framework> arguments.\n\n',
    )
    process.stderr.write(DOCS_HELP + '\n')
    process.exitCode = 1
    return
  }

  const input: Record<string, unknown> = { componentName, framework }

  if (args.flags['guidelines'] === false) {
    input.includeGuidelines = false
  }
  if (args.flags['instructions'] === false) {
    input.includeInstructions = false
  }

  const result = await handleGetComponentDocs(input)
  process.stdout.write(result.content[0].text + '\n')
}

/**
 * Execute the "guides" command.
 * Maps CLI flags to the handleListGuides handler input.
 */
async function runGuides(args: ParsedArgs): Promise<void> {
  if (args.flags['h'] || args.flags['help']) {
    process.stdout.write(GUIDES_HELP + '\n')
    return
  }

  const input: Record<string, unknown> = {}

  if (args.flags['category'] !== undefined) {
    input.category = args.flags['category']
  }
  if (args.flags['framework'] !== undefined) {
    input.framework = args.flags['framework']
  }

  const result = await handleListGuides(input)
  process.stdout.write(result.content[0].text + '\n')
}

/**
 * Execute the "guide" command.
 * Maps CLI flags to the handleGetGuide handler input.
 */
async function runGuide(args: ParsedArgs): Promise<void> {
  if (args.flags['h'] || args.flags['help']) {
    process.stdout.write(GUIDE_HELP + '\n')
    return
  }

  const name = args.positional[0]
  if (!name) {
    process.stderr.write('Error: guide requires a <name> argument.\n\n')
    process.stderr.write(GUIDE_HELP + '\n')
    process.exitCode = 1
    return
  }

  const result = await handleGetGuide({ name })
  process.stdout.write(result.content[0].text + '\n')
}

/**
 * Execute the "instructions" command.
 */
async function runInstructions(args: ParsedArgs): Promise<void> {
  if (args.flags['h'] || args.flags['help']) {
    process.stdout.write(INSTRUCTIONS_HELP + '\n')
    return
  }

  const result = await handleGetInstructions()
  process.stdout.write(result.content[0].text + '\n')
}

// ---------------------------------------------------------------------------
// Main entry point
// ---------------------------------------------------------------------------

/**
 * CLI entry point. Parses arguments, routes to the appropriate command
 * handler, and writes output to stdout. Errors are written to stderr
 * with a non-zero exit code.
 */
async function main(): Promise<void> {
  const args = parseArgs(process.argv.slice(2))

  // Global --version / -v
  if (args.flags['v'] || args.flags['version']) {
    const version = await getPackageVersion()
    process.stdout.write(version + '\n')
    return
  }

  // Global --help / -h (or no command)
  if (!args.command || args.flags['h'] || args.flags['help']) {
    process.stdout.write(HELP_TEXT + '\n')
    return
  }

  // Route to the appropriate command handler
  switch (args.command) {
    case 'search':
      await runSearch(args)
      break

    case 'docs':
      await runDocs(args)
      break

    case 'guides':
      await runGuides(args)
      break

    case 'guide':
      await runGuide(args)
      break

    case 'instructions':
      await runInstructions(args)
      break

    default:
      process.stderr.write(`Error: Unknown command '${args.command}'.\n\n`)
      process.stdout.write(HELP_TEXT + '\n')
      process.exitCode = 1
  }
}

// Run and handle top-level errors
main().catch((error) => {
  // Format known errors with their structured message
  if (error instanceof McpError) {
    process.stderr.write(`Error [${error.code}]: ${error.message}\n`)
  } else if (error instanceof Error) {
    process.stderr.write(`Error: ${error.message}\n`)
  } else {
    process.stderr.write(`Error: ${String(error)}\n`)
  }
  process.exitCode = 1
})
