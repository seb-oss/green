/** Parsed result from the argument parser */
export interface ParsedArgs {
  /** The subcommand (or null for top-level flags like --help / --version) */
  command: string | null
  /** Positional arguments following the subcommand */
  positional: string[]
  /** Named flags (e.g. --category → category) mapped to their values */
  flags: Record<string, string | boolean>
}

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
