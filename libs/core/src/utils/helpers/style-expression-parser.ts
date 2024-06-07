type Tokens = string[]
type BreakpointSpecifier = { condition: string; value: string }[]
type BreakpointData = { breakpoint: string; values: string[] }
type BreakpointTree = BreakpointData[]

const viewportBreakpoints: Record<string, string> = {
  '0': '0px',
  '2xs': '320px',
  xs: '425px',
  s: '768px',
  m: '1024px',
  l: '1280px',
  xl: '1440px',
  '2xl': '2560px',
  '3xl': '3840px',
  '4xl': '4320px',
  '5xl': '6016px',
  '6xl': '7680px',
}

const breakpointValueRegex = /^([<|>]=?)?([0-9a-z]+)/

const singleCharTokens = ['{', '}', ';', ',']
const whitespace = [' ', '/n']

/**
 * Takes a string and returns an array of tokens. Each token is a string or control character.
 *
 * @param source The source string to tokenize
 * @returns An array of tokens
 */
export function tokenize(source: string): Tokens {
  const lexemes = []
  let scanned = ''

  for (let i = 0; i < source.length; i++) {
    const c = source[i]

    if (!whitespace.includes(c)) scanned += c

    if (whitespace.includes(c) || i === source.length - 1) {
      lexemes.push(scanned)
      scanned = ''
      continue
    }

    if (singleCharTokens.includes(c)) {
      lexemes.push(scanned.slice(0, -1))
      lexemes.push(c)
      scanned = ''
      continue
    }
  }

  return lexemes.filter((l) => l !== '')
}

/**
 * Takes an array of tokens and returns a basic AST structure.
 *
 * @param tokens An array of tokens
 * @returns A tree structure
 */
export function parse(tokens: Tokens): BreakpointTree {
  const tree = []
  let level = 'bp'
  let scope: BreakpointData | undefined = undefined
  let expectMultiCondition = false

  for (const t of tokens) {
    if (!singleCharTokens.includes(t)) {
      if (level === 'val' && scope) {
        scope.values.push(t)
      } else {
        if (scope && expectMultiCondition) {
          scope.breakpoint += `,${t}`
          expectMultiCondition = false
          continue
        }
        if (!scope) {
          scope = { breakpoint: t, values: [] }
          tree.push(scope)
        } else {
          // This means short hand 0 breakpoint
          level = 'val'
          scope.values.push(scope.breakpoint)
          scope.values.push(t)
          scope.breakpoint = '-'
        }
      }
      continue
    }

    if (t === ',') {
      expectMultiCondition = true
      continue
    }

    if (t === '{') {
      level = 'val'
      continue
    }

    if (t === '}' || t === ';') {
      level = 'bp'
      scope = undefined
      continue
    }
  }

  return tree.map((bp) => {
    // Fix remaining shorthand 0 breakpoints
    if (bp.values.length === 0) {
      bp.values.push(bp.breakpoint)
      bp.breakpoint = '-'
    }
    return bp
  })
}

function parseBreakpoint(bp: string): BreakpointSpecifier {
  const bps = bp.split(',')
  return bps.map((b) => {
    const match = b.trim().match(breakpointValueRegex)
    if (!match) {
      throw new Error(`Invalid breakpoint specifier: ${b}`)
    }
    return { condition: match[1], value: match[2] }
  })
}

export function toCss(selector: string, rule: string, tree: BreakpointTree) {
  let css = ''
  for (const bp of tree) {
    const bpSpecs =
      bp.breakpoint === '-'
        ? [{ condition: '>=', value: '0' }]
        : parseBreakpoint(bp.breakpoint)
    const query = bpSpecs
      .map(
        (b) =>
          `(${b.condition?.includes('<') ? 'max-width' : 'min-width'}: ${viewportBreakpoints[b.value] ?? b.value})`,
      )
      .join(' and ')
    const mq = `@media ${query} {${selector}{${rule}: ${bp.values.map((v) => `var(--gds-sys-space-${v})`).join(' ')};}}`
    css += mq
  }

  return css
}
