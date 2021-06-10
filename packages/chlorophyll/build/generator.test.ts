import { generate } from './generator'

describe('generator', () => {
  it('generates flat', () => {
    const scss = generate({ white: '#ffffff' }, 'color')

    expect(scss).toEqual(['$color-white: #ffffff;'])
  })
  it('generates nested', () => {
    const scss = generate({ green: { light: '#0000ff' } }, 'color')

    expect(scss).toEqual(['$color-green-light: #0000ff;'])
  })
  it('generates deeply nested', () => {
    const scss = generate({ foo: { bar: { baz: '#fab' } } }, 'color')

    expect(scss).toEqual(['$color-foo-bar-baz: #fab;'])
  })
  it('handles multiple prefixes', () => {
    const scss = generate({ white: '#ffffff' }, 'theme', 'dark', 'color')

    expect(scss).toEqual(['$theme-dark-color-white: #ffffff;'])
  })
  it('handles shades', () => {
    const scss = generate({ green: { s100: '#0000ff' } }, 'color')

    expect(scss).toEqual(['$color-green-100: #0000ff;'])
  })
  it('handles camelCase variables', () => {
    const scss = generate({ borderWidth: '5px' }, 'button')

    expect(scss).toEqual(['$button-border-width: 5px;'])
  })
})
