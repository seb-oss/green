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
