import { expect } from '@esm-bundle/chai'
import { tokenize, parse, toCss } from './style-expression-parser'

describe('style-expression-parser', () => {
  it('should tokenize', () => {
    const expressions = [
      'xl',
      'xl s m 2xl',
      'xl; 2xl { l }',
      'xl s s m; >s, <xl { s m }',
      'xl; >=s, <=xl { s m }',
      'flex',
      'block; xl { flex }',
    ]
    const expected = [
      ['xl'],
      ['xl', 's', 'm', '2xl'],
      ['xl', ';', '2xl', '{', 'l', '}'],
      ['xl', 's', 's', 'm', ';', '>s', ',', '<xl', '{', 's', 'm', '}'],
      ['xl', ';', '>=s', ',', '<=xl', '{', 's', 'm', '}'],
      ['flex'],
      ['block', ';', 'xl', '{', 'flex', '}'],
    ]

    expressions.forEach((expression, i) => {
      expect(tokenize(expression)).to.deep.equal(expected[i])
    })
  })

  it('should parse', () => {
    const expressions = [
      'xl',
      'xl s m 2xl',
      'xl; 2xl { l }',
      '2xl { l m m l }',
      'xl s s m; >s, <xl { s m }',
      'xl; >=s, <=xl { s m }',
      'xl; >=s, <=xl { s m }; 2xl { l }',
      'xl; >=512px, <=1024px { s m }',
      '5',
      '5; xl { 2-7 }',
    ]

    const expected = [
      [{ breakpoint: '-', values: ['xl'] }],
      [{ breakpoint: '-', values: ['xl', 's', 'm', '2xl'] }],
      [
        { breakpoint: '-', values: ['xl'] },
        { breakpoint: '2xl', values: ['l'] },
      ],
      [{ breakpoint: '2xl', values: ['l', 'm', 'm', 'l'] }],
      [
        { breakpoint: '-', values: ['xl', 's', 's', 'm'] },
        { breakpoint: '>s,<xl', values: ['s', 'm'] },
      ],
      [
        { breakpoint: '-', values: ['xl'] },
        { breakpoint: '>=s,<=xl', values: ['s', 'm'] },
      ],
      [
        { breakpoint: '-', values: ['xl'] },
        { breakpoint: '>=s,<=xl', values: ['s', 'm'] },
        { breakpoint: '2xl', values: ['l'] },
      ],
      [
        { breakpoint: '-', values: ['xl'] },
        { breakpoint: '>=512px,<=1024px', values: ['s', 'm'] },
      ],
      [{ breakpoint: '-', values: ['5'] }],
      [
        { breakpoint: '-', values: ['5'] },
        { breakpoint: 'xl', values: ['2-7'] },
      ],
    ]

    expressions.forEach((expression, i) => {
      expect(parse(tokenize(expression))).to.deep.equal(expected[i])
    })
  })

  it('should convert to css', () => {
    const expressions = [
      'xl',
      'xl s m 2xl',
      'xl; 2xl { l }',
      'xl; >=512px, <=1024px { s m }',
    ]

    const expected = [
      '@media (min-width: 0px) {.test{padding: var(--gds-sys-space-xl);}}',
      '@media (min-width: 0px) {.test{padding: var(--gds-sys-space-xl) var(--gds-sys-space-s) var(--gds-sys-space-m) var(--gds-sys-space-2xl);}}',
      '@media (min-width: 0px) {.test{padding: var(--gds-sys-space-xl);}}@media (min-width: 2560px) {.test{padding: var(--gds-sys-space-l);}}',
      '@media (min-width: 0px) {.test{padding: var(--gds-sys-space-xl);}}@media (min-width: 512px) and (max-width: 1024px) {.test{padding: var(--gds-sys-space-s) var(--gds-sys-space-m);}}',
    ]

    expressions.forEach((expression, i) => {
      expect(toCss('.test', 'padding', parse(tokenize(expression)))).to.equal(
        expected[i],
      )
    })
  })
})
