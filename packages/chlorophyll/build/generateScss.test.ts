import { generateScss } from './generateScss'

describe('generateScss', () => {
  it('generates flat', () => {
    const scss = generateScss({ white: '#ffffff' }, 'color')

    expect(scss).toEqual(['$color-white: #ffffff;'])
  })
  it('generates nested', () => {
    const scss = generateScss({ green: { light: '#0000ff' } }, 'color')

    expect(scss).toEqual(['$color-green-light: #0000ff;'])
  })
  it('generates deeply nested', () => {
    const scss = generateScss({ foo: { bar: { baz: '#fab' } } }, 'color')

    expect(scss).toEqual(['$color-foo-bar-baz: #fab;'])
  })
  it('handles multiple prefixes', () => {
    const scss = generateScss({ white: '#ffffff' }, 'theme', 'dark', 'color')

    expect(scss).toEqual(['$theme-dark-color-white: #ffffff;'])
  })
  it('handles shades', () => {
    const scss = generateScss({ green: { s100: '#0000ff' } }, 'color')

    expect(scss).toEqual(['$color-green-100: #0000ff;'])
  })
})
