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
  handleResolveUri,
  handleSearchComponents,
} from '../mcp-server/handlers.js'
import { getPackageVersion } from '../mcp-server/utils.js'
import {
  DOCS_FRAMEWORK_CANONICAL,
  normalizeDocsFramework,
} from './framework.js'
import { parseArgs } from './parse-args.js'

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------
import type { ParsedArgs } from './parse-args.js'

function getPrimaryTextContent(
  result: Awaited<ReturnType<typeof handleSearchComponents>>,
): string {
  const textBlock = result.content.find(
    (
      block,
    ): block is Extract<(typeof result.content)[number], { type: 'text' }> =>
      block.type === 'text',
  )

  if (!textBlock) {
    throw new Error('Tool response did not include a text content block')
  }

  return textBlock.text
}

export { parseArgs } from './parse-args.js'

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
  get <uri>                         Fetch raw content by green:// URI
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
  framework                         Target framework (required)
                                    Allowed: ${DOCS_FRAMEWORK_CANONICAL.join(', ')}
                                    Aliases: web, webcomponent, web-components

OPTIONS
  --no-guidelines                   Exclude UX/design guidelines
  --no-instructions                 Exclude agent-specific instructions
  -h, --help                        Show this help message

EXAMPLES
  ${PROGRAM_NAME} docs button angular
  ${PROGRAM_NAME} docs gds-dropdown react
  ${PROGRAM_NAME} docs card web
  ${PROGRAM_NAME} docs card web-component --no-guidelines
`.trim()

const GET_HELP = `
Fetch raw content for a green:// resource URI. Use 'search' to discover
URIs, then use 'get' to retrieve the raw document content.

USAGE
  ${PROGRAM_NAME} get <uri>

ARGUMENTS
  uri                               A green:// resource URI (required)

SUPPORTED URI FORMATS
  green://components/{name}/{doc}   Component docs (api, angular, react,
                                    guidelines, instructions)
  green://icons/{name}/{doc}        Icon docs (api, angular, react)
  green://guides/{name}             Setup and framework guides
  green://concepts/{name}           Conceptual documentation
  green://instructions              Base instructions document

OPTIONS
  -h, --help                        Show this help message

EXAMPLES
  ${PROGRAM_NAME} get green://components/button/api
  ${PROGRAM_NAME} get green://components/dropdown/angular
  ${PROGRAM_NAME} get green://guides/react
  ${PROGRAM_NAME} get green://concepts/tokens
  ${PROGRAM_NAME} get green://instructions
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
  process.stdout.write(getPrimaryTextContent(result) + '\n')
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
  const frameworkInput = args.positional[1]

  if (!componentName || !frameworkInput) {
    process.stderr.write(
      'Error: docs requires <component> and <framework> arguments.\n\n',
    )
    process.stderr.write(DOCS_HELP + '\n')
    process.exitCode = 1
    return
  }

  const framework = normalizeDocsFramework(frameworkInput)
  if (!framework) {
    process.stderr.write(
      `Error: Invalid framework '${frameworkInput}'. Allowed values: ${DOCS_FRAMEWORK_CANONICAL.join(', ')}.\n`,
    )
    process.stderr.write(
      'Aliases accepted for web-component: web, webcomponent, web-components.\n\n',
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
  process.stdout.write(getPrimaryTextContent(result) + '\n')
}

/**
 * Execute the "get" command.
 * Resolves a green:// URI to its raw content via handleResolveUri.
 */
async function runGet(args: ParsedArgs): Promise<void> {
  if (args.flags['h'] || args.flags['help']) {
    process.stdout.write(GET_HELP + '\n')
    return
  }

  const uri = args.positional[0]
  if (!uri) {
    process.stderr.write('Error: get requires a <uri> argument.\n\n')
    process.stderr.write(GET_HELP + '\n')
    process.exitCode = 1
    return
  }

  const result = await handleResolveUri(uri)
  process.stdout.write(getPrimaryTextContent(result) + '\n')
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
  process.stdout.write(getPrimaryTextContent(result) + '\n')
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
  process.stdout.write(getPrimaryTextContent(result) + '\n')
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
  // Replace MCP-specific references with CLI-appropriate language
  const cliText = getPrimaryTextContent(result)
    .replace(/\bMCP server\b/gi, 'Context CLI')
    .replace(/\bMCP Server\b/g, 'Context CLI')
    .replace(/\bMCP\b/g, 'CLI')
  process.stdout.write(cliText + '\n')
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

  // Global --help / -h (only when no command is provided)
  if (!args.command) {
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

    case 'get':
      await runGet(args)
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
