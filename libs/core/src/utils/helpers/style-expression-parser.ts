type Tokens = string[]
type BreakpointSpecifier = { condition: string; value: string }[]
type BreakpointValues = { sel: string; values: string[] }
type BreakpointData = { breakpoint: string; values: BreakpointValues[] }
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

const controlTokens = ['{', '}', ';', ':', ',']
const whitespace = [' ', '/n']

/**
 * Takes a string and returns an array of tokens. Each token is a string or control character.
 *
 * @param source The source string to tokenize
 * @returns An array of tokens
 */
export function tokenize(source = ''): Tokens {
  const lexemes = []
  let scanned = ''

  for (let i = 0; i < source.length; i++) {
    const c = source[i]

    if (!whitespace.includes(c)) scanned += c

    if (controlTokens.includes(c)) {
      lexemes.push(scanned.slice(0, -1))
      lexemes.push(c)
      scanned = ''
      continue
    }

    if (whitespace.includes(c) || i === source.length - 1) {
      lexemes.push(scanned)
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
  // This is the tree we are building and returning at the end
  const tree: BreakpointTree = []

  // The current breakpoint scope we are adding to
  let bpScope: BreakpointData = { breakpoint: '-', values: [] }

  // A function to create an empty breakpoint value bucket
  const getEmptyBucket = (): BreakpointValues => ({ sel: '', values: [] })

  // The current value bucket we are adding to
  let valueBucket: BreakpointValues = getEmptyBucket()

  // Step through the tokens
  for (const t of tokens) {
    // Add non-control tokens to the value bucket
    if (!controlTokens.includes(t)) {
      valueBucket.values.push(t)
      continue
    }

    // If we come across '{', then create a new breakpoint scope, and empty the
    // value bucket into the breakpoint specifier
    if (t === '{') {
      bpScope = { breakpoint: valueBucket.values.join(','), values: [] }
      valueBucket = getEmptyBucket()
    }

    // If we come across ';', then empty the value bucket into the breakpoint scope
    // And if the tree is still empty at this point, we add the breakpoint scope to the tree
    if (t === ';') {
      if (tree.length === 0) {
        tree.push(bpScope)
      }
      if (valueBucket.values.length > 0) {
        bpScope.values.push(valueBucket)
        valueBucket = getEmptyBucket()
      }
    }

    // If we come across ':', then pop the last value from the value bucket and use
    // it as the selector for a new value bucket
    if (t === ':') {
      const sel = valueBucket.values.pop() ?? ''
      valueBucket.sel = sel
    }

    // If we come across '}', then close the breakpoint scope and add it to the tree
    if (bpScope && t === '}') {
      bpScope.values.push(valueBucket)
      valueBucket = getEmptyBucket()
      tree.push(bpScope)
    }
  }

  // If the value bucket is not empty at the end, add it to a new '-' breakpoint
  if (valueBucket.values.length > 0) {
    bpScope.values.push(valueBucket)
  }

  if (tree.length === 0) {
    tree.push(bpScope)
  }

  return tree
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

/**
 * Takes a selector, a rule, and a tree of breakpoints and returns a CSS string.
 */
export function toCss(
  selector: string,
  property: string,
  tree: BreakpointTree,
  valueTemplate: (value: string) => string = (v) => v,
  styleTemplate: (property: string, values: string[]) => string = (p, vs) =>
    `${p}: ${vs.join(' ')};`,
) {
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

    // For each set of values in the breakpoint, construct a selector based on the
    // specified selector and the base selector, and apply the style template to each
    const mq = `@media ${query} {${bp.values
      .map((bpValues: BreakpointValues) => {
        let sel = selector
        if (bpValues.sel.length > 0)
          sel =
            selector === ':host'
              ? `:host(:${bpValues.sel})`
              : `${selector}:${bpValues.sel}`

        const style = styleTemplate(
          property,
          bpValues.values.map(valueTemplate),
        )

        // If the selector is hover, we wrap the style in a hover media query so that
        // it excludes touch devices
        if (bpValues.sel === 'hover')
          return `@media (hover: hover) {${sel}{${style}}}`
        else return `${sel}{${style}}`
      })
      .join('')}}`
    css += mq
  }

  return css
}
