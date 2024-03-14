import * as StyleDictionary from 'style-dictionary'
import * as tinycolor from 'tinycolor2'

const transforms: Record<
  string,
  StyleDictionary.Named<StyleDictionary.Transform<unknown>>
> = {
  'name/figma': {
    name: 'name/figma',
    type: 'name',
    transformer: (token: StyleDictionary.DesignToken) => {
      return token.path.slice(1, token.path.length).join('/')
    },
  },
  'size/px': {
    name: 'size/px',
    type: 'name',
    matcher: function (prop) {
      return prop.attributes.category === 'size'
    },
    transformer: function (prop) {
      return `${prop.original.value}px`
    },
  },
  // For use with css `mix-color` function
  'color/mix-blend': {
    name: 'color/mix-blend',
    transitive: true,
    type: 'value',
    matcher: (token: StyleDictionary.DesignToken) => {
      return token.alpha
    },
    transformer: (token: StyleDictionary.DesignToken) => {
      let value: tinycolor.Instance, darkValue: tinycolor.Instance

      const toMixBlend = (alpha: number) => `${Math.round(alpha * 100)}%`

      if (token.value) {
        value = tinycolor(token.value)
        if (token.alpha) {
          token.value = `#${value.toHex()} ${toMixBlend(token.alpha)}`
        }
      }
      if (token.darkValue) {
        darkValue = tinycolor(token.darkValue)
        if (token.alpha) {
          token.darkValue = `#${darkValue.toHex()} ${toMixBlend(token.alpha)}`
        }
      }

      return `#${value.toHex()} ${toMixBlend(token.alpha)}`
    },
  },
  'color/alpha': {
    name: 'color/alpha',
    transitive: true,
    type: 'value',
    matcher: (token: StyleDictionary.DesignToken) => {
      return token.alpha
    },
    transformer: (token: StyleDictionary.DesignToken) => {
      let value: tinycolor.Instance, darkValue: tinycolor.Instance

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
}

export default transforms
