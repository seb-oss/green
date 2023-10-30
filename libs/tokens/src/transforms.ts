import * as StyleDictionary from 'style-dictionary'

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
      console.log(token)
    },
  },
}

export default transforms
