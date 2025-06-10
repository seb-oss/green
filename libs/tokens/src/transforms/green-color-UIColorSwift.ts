import tinycolor from 'tinycolor2'

export default {
  name: 'green/color/UIColorSwift',
  type: 'value',
  filter: (token) => token.path.includes('color'),
  transform: function (token) {
    const value = token.$value || token.value
    let alpha = null
    if (value.alpha) {
      alpha = value.alpha
    }
    const { r, g, b, a } = tinycolor(value).toRgb()
    const rFixed = (r / 255.0).toFixed(3)
    const gFixed = (g / 255.0).toFixed(3)
    const bFixed = (b / 255.0).toFixed(3)
    return `UIColor(red:${rFixed}, green:${gFixed}, blue:${bFixed}, alpha:${alpha ? alpha : a})`
  },
}
