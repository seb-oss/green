import tinycolor from 'tinycolor2'

export default {
  name: 'color/mix-blend',
  transitive: true,
  type: 'value',
  filter: (token) => {
    return token.alpha
  },
  transform: (token) => {
    const toMixBlend = (alpha) => `${Math.round(alpha * 100)}%`

    if (token.path.includes('border')) {
      return tinycolor(token.$value).setAlpha(token.alpha).toRgbString()
    }
    return `${token.$value} ${toMixBlend(token.alpha)}`
  },
}
