import { expect } from '@esm-bundle/chai'
import { tokenize, parse, toCss } from './style-expression-parser'

describe('style-expression-parser', () => {
  it('should tokenize', () => {
    const expressions = [
      'xl',
      'xl s m 2xl',
      'l{m}',
      'xl; 2xl { l }',
      'xl s s m; >s, <xl { s m }',
      'xl; >=s, <=xl { s m }',
      'flex',
      'block; xl { flex }',
      'block; hover:flex; xl { flex; hover:block }',
      'xs xs xs xs; l { s s s s; hover: m m m m }',
    ]
    const expected = [
      ['xl'],
      ['xl', 's', 'm', '2xl'],
      ['l', '{', 'm', '}'],
      ['xl', ';', '2xl', '{', 'l', '}'],
      ['xl', 's', 's', 'm', ';', '>s', ',', '<xl', '{', 's', 'm', '}'],
      ['xl', ';', '>=s', ',', '<=xl', '{', 's', 'm', '}'],
      ['flex'],
      ['block', ';', 'xl', '{', 'flex', '}'],
      // prettier-ignore
      ['block', ';', 'hover', ':', 'flex', ';', 'xl', '{', 'flex', ';', 'hover', ':', 'block', '}'],
      // prettier-ignore
      ['xs', 'xs', 'xs', 'xs', ';', 'l', '{', 's', 's', 's', 's', ';', 'hover', ':', 'm', 'm', 'm', 'm', '}'],
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
      'block; hover:flex; xl { focus:block; flex }',
    ]

    const expected = [
      [{ breakpoint: '-', values: [{ sel: '', values: ['xl'] }] }],
      [
        {
          breakpoint: '-',
          values: [{ sel: '', values: ['xl', 's', 'm', '2xl'] }],
        },
      ],
      [
        { breakpoint: '-', values: [{ sel: '', values: ['xl'] }] },
        { breakpoint: '2xl', values: [{ sel: '', values: ['l'] }] },
      ],
      [
        {
          breakpoint: '2xl',
          values: [{ sel: '', values: ['l', 'm', 'm', 'l'] }],
        },
      ],
      [
        {
          breakpoint: '-',
          values: [{ sel: '', values: ['xl', 's', 's', 'm'] }],
        },
        { breakpoint: '>s,<xl', values: [{ sel: '', values: ['s', 'm'] }] },
      ],
      [
        { breakpoint: '-', values: [{ sel: '', values: ['xl'] }] },
        { breakpoint: '>=s,<=xl', values: [{ sel: '', values: ['s', 'm'] }] },
      ],
      [
        { breakpoint: '-', values: [{ sel: '', values: ['xl'] }] },
        { breakpoint: '>=s,<=xl', values: [{ sel: '', values: ['s', 'm'] }] },
        { breakpoint: '2xl', values: [{ sel: '', values: ['l'] }] },
      ],
      [
        { breakpoint: '-', values: [{ sel: '', values: ['xl'] }] },
        {
          breakpoint: '>=512px,<=1024px',
          values: [{ sel: '', values: ['s', 'm'] }],
        },
      ],
      [{ breakpoint: '-', values: [{ sel: '', values: ['5'] }] }],
      [
        { breakpoint: '-', values: [{ sel: '', values: ['5'] }] },
        { breakpoint: 'xl', values: [{ sel: '', values: ['2-7'] }] },
      ],
      [
        {
          breakpoint: '-',
          values: [
            { sel: '', values: ['block'] },
            { sel: 'hover', values: ['flex'] },
          ],
        },
        {
          breakpoint: 'xl',
          values: [
            { sel: 'focus', values: ['block'] },
            { sel: '', values: ['flex'] },
          ],
        },
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
      'l; hover:xl; xl { xl; hover:2xl; focus:3xl }',
    ]

    const expected = [
      '@media (min-width: 0px) {.test{padding: var(--gds-sys-space-xl);}}',
      '@media (min-width: 0px) {.test{padding: var(--gds-sys-space-xl) var(--gds-sys-space-s) var(--gds-sys-space-m) var(--gds-sys-space-2xl);}}',
      '@media (min-width: 0px) {.test{padding: var(--gds-sys-space-xl);}}@media (min-width: 2560px) {.test{padding: var(--gds-sys-space-l);}}',
      '@media (min-width: 0px) {.test{padding: var(--gds-sys-space-xl);}}@media (min-width: 512px) and (max-width: 1024px) {.test{padding: var(--gds-sys-space-s) var(--gds-sys-space-m);}}',
      '@media (min-width: 0px) {.test{padding: var(--gds-sys-space-l);}@media (hover: hover) {.test:hover{padding: var(--gds-sys-space-xl);}}}@media (min-width: 1440px) {.test{padding: var(--gds-sys-space-xl);}@media (hover: hover) {.test:hover{padding: var(--gds-sys-space-2xl);}}.test:focus{padding: var(--gds-sys-space-3xl);}}',
    ]

    expressions.forEach((expression, i) => {
      expect(
        toCss(
          '.test',
          'padding',
          parse(tokenize(expression)),
          (v) => `var(--gds-sys-space-${v})`,
        ),
      ).to.equal(expected[i])
    })
  })
})
