import tinycolor from 'tinycolor2'

const transforms = {
  'name/figma': {
    name: 'name/figma',
    type: 'name',
    transform: (token) => {
      return token.path.slice(1, token.path.length).join('/')
    },
  },
  // For use with css `mix-color` function
  'color/mix-blend': {
    name: 'color/mix-blend',
    transitive: true,
    type: 'value',
    filter: (token) => {
      return token.alpha
    },
    transform: (token) => {
      let value

      const toMixBlend = (alpha) => `${Math.round(alpha * 100)}%`

      if (token.value) {
        value = tinycolor(token.value)
        if (token.alpha) {
          token.value = `#${value.toHex()} ${toMixBlend(token.alpha)}`
        }
      }

      return `#${value.toHex()} ${toMixBlend(token.alpha)}`
    },
  },
  'color/alpha': {
    name: 'color/alpha',
    transitive: true,
    type: 'value',
    filter: (token) => {
      return token.alpha
    },
    transform: (token) => {
      let value, darkValue

      if (token.value) {
        value = tinycolor(token.value)
        if (token.alpha) {
          token.value = value.setAlpha(token.alpha).toString()
        }
      }
      if (token.darkValue) {
        darkValue = tinycolor(token.darkValue)
        if (token.alpha) {
          token.darkValue = darkValue.setAlpha(token.alpha).toString()
        }
      }

      return value.setAlpha(token.alpha).toString()
    },
  },
  'green/color/UIColorSwift': {
    name: 'green/color/UIColorSwift',
    type: 'value',
    filter: (token) => token.path.includes('color'),
    transform: function (token) {
      const { r, g, b, a } = tinycolor(token.value).toRgb()
      const rFixed = (r / 255.0).toFixed(3)
      const gFixed = (g / 255.0).toFixed(3)
      const bFixed = (b / 255.0).toFixed(3)
      return `UIColor(red: ${rFixed}, green: ${gFixed}, blue: ${bFixed}, alpha: ${a})`
    },
  },
}

export default transforms
