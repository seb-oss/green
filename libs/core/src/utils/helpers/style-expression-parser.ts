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

const singleCharTokens = ['{', '}']
const separators = [';']
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
  for (const c of source) {
    if (separators.includes(c)) {
      lexemes.push(scanned)
      scanned = ''
      continue
    }
    if (singleCharTokens.includes(c)) {
      lexemes.push(scanned)
      lexemes.push(c)
      scanned = ''
      continue
    }
    scanned += c
  }

  if (lexemes.length === 0 && scanned.length > 0)
    return scanned.trim().split(' ')

  return lexemes.filter((l) => l.length > 0)
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

  for (const t of tokens) {
    if (!singleCharTokens.includes(t)) {
      if (level === 'val' && scope) {
        scope.values = t.trim().split(' ')
      } else {
        scope = { breakpoint: t.trim(), values: [] }
        tree.push(scope)
      }
      continue
    }
    if (t === '{') {
      level = 'val'
      continue
    }
    if (t === '}') {
      level = 'bp'
      continue
    }
  }

  return tree.map((bp) =>
    bp.values.length === 0 ? { breakpoint: '-', values: [bp.breakpoint] } : bp,
  )
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

export function toCss(rule: string, tree: BreakpointTree) {
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
    const mq = `@media ${query} {
 ${rule}: ${bp.values.map((v) => `var(--gds-sys-space-${v})`).join(' ')};
}
`
    css += mq
  }

  return css
}
