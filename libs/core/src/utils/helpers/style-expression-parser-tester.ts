/* eslint no-console: "off" */
// This file is here to help with development of the style expression parser, since the regular
// tests are a bit clunky for this kind of work.
//
// Run it like this: `npx tsx libs/core/src/utils/helpers/style-expression-parser-tester.ts`

import { inspect } from 'util'

import { parse, toCss, tokenize } from './style-expression-parser'

const expression = 'block; hover:flex; xl { focus:block; flex }'
const ast = parse(tokenize(expression))
const css = toCss(':host', 'background', ast)
console.log(
  'AST',
  inspect(ast, { showHidden: false, depth: null, colors: true }),
)
console.log(inspect(css, { showHidden: false, depth: null, colors: true }))
