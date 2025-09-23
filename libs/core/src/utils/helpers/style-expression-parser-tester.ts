/* eslint no-console: "off" */
// This file is here to help with development of the style expression parser, since the regular
// tests are a bit clunky for this kind of work.
//
// Run it like this: `npx tsx libs/core/src/utils/helpers/style-expression-parser-tester.ts`

import { inspect } from 'util'

import { parse, toCss, tokenize } from './style-expression-parser.ts'

const inspectConfig = { showHidden: false, depth: null, colors: true }

const expression = 's; m { l }'

const tokenArray = tokenize(expression)

const ast = parse(tokenArray)

const css = toCss(':host', 'padding', ast, (v) => `var(--gds-sys-space-${v})`)

console.log('---- TOKENS ----')
console.log(inspect(tokenArray, inspectConfig))
console.log('---- AST ----')
console.log(inspect(ast, inspectConfig))
console.log('---- CSS ----')
console.log(inspect(css, inspectConfig))
console.log('-------------')
