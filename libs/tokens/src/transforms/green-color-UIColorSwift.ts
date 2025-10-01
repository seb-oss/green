import { resolveReferences } from 'style-dictionary/utils'
import tinycolor from 'tinycolor2'

export default {
  name: 'green/color/UIColorSwift',
  type: 'value',
  filter: (token) => token.path.includes('color'),
  transitive: true,
  transform: function (token) {
    console.log(token)

    const value = token.$value || token.value

    const alpha = token.alpha

    if (token.$value.includes('UIColor')) {
      return token.$value.replace('alpha:1', `alpha:${alpha ? alpha : 1}`)
    }

    const { r, g, b, a } = tinycolor(value).toRgb()
    const rFixed = (r / 255.0).toFixed(3)
    const gFixed = (g / 255.0).toFixed(3)
    const bFixed = (b / 255.0).toFixed(3)

    return `UIColor(red:${rFixed}, green:${gFixed}, blue:${bFixed}, alpha:${alpha ? alpha : a})`
  },
}
