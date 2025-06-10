export default {
  name: 'color/mix-blend',
  transitive: true,
  type: 'value',
  filter: (token) => {
    return token.$value.alpha
  },
  transform: (token) => {
    const toMixBlend = (alpha) => `${Math.round(alpha * 100)}%`
    return `${token.$value.hex}${toMixBlend(token.$value.alpha)}`
  },
}
