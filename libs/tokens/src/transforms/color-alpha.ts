import tinycolor from 'tinycolor2'

export default {
  name: 'color/alpha',
  transitive: true,
  type: 'value',
  filter: (token) => {
    return token.alpha
  },
  transform: (token) => {
    const value = tinycolor(token.$value)
    const alpha = token.alpha

    token.value = value.setAlpha(alpha).toString()

    return value.setAlpha(alpha).toString()
  },
}
