import tinycolor from 'tinycolor2'

export default {
  name: 'color/alpha',
  transitive: true,
  type: 'value',
  filter: (token) => {
    return token.$value.alpha
  },
  transform: (token) => {
    const value = tinycolor(token.$value.hex)
    if (token.$value.alpha) {
      token.value = value.setAlpha(token.$value.alpha).toString()
    }
    return value.setAlpha(token.$value.alpha).toString()
  },
}
