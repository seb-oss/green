import * as StyleDictionary from 'style-dictionary'
import formats from './src/formats'
import transforms from './src/transforms'
import filters from './src/filters'

console.log(formats)

for (const entry of Object.entries(formats)) {
  StyleDictionary.registerFormat(entry[1])
}

for (const entry of Object.entries(transforms)) {
  StyleDictionary.registerTransform(entry[1])
}

for (const entry of Object.entries(filters)) {
  StyleDictionary.registerFilter(entry[1])
}

const config: StyleDictionary.Config = {
  source: ['src/tokens/**/*.json'],
  platforms: {
    css: {
      transformGroup: 'css',
      buildPath: 'css/',
      prefix: 'gds-',
      files: [
        {
          destination: 'pallet.css',
          format: 'css/variables',
          filter: function (token) {
            if ('darkValue' in token) return false
            return token?.attributes?.type === 'color'
          },
        },
        {
          destination: 'theme/light.css',
          format: 'css/theme',
          filter: 'color-scheme',
          options: {
            colorScheme: 'light',
            outputReferences: false,
          },
        },
        {
          destination: 'theme/dark.css',
          format: 'css/theme',
          filter: 'color-scheme',
          options: {
            colorScheme: 'dark',
            outputReferences: false,
          },
        },
      ],
    },
    scss: {
      transformGroup: 'scss',
      buildPath: 'scss/',
      prefix: 'gds-',
      files: [
        {
          destination: '_pallet.scss',
          format: 'scss/variables',
          filter: function (token) {
            if ('darkValue' in token) return false
            return token?.attributes?.type === 'color'
          },
          options: {
            outputReferences: false,
          },
        },
        {
          destination: 'theme/_light.scss',
          format: 'scss/variables',
          filter: 'color-scheme',
          options: {
            outputReferences: false,
            colorScheme: 'light',
          },
        },
        {
          destination: 'theme/_dark.scss',
          format: 'scss/variables',
          filter: 'color-scheme',
          options: {
            outputReferences: false,
            colorScheme: 'dark',
          },
        },
      ],
    },
    figma: {
      buildPath: 'figma/',
      transforms: ['name/figma'],
      files: [
        {
          format: 'json/figma',
          destination: 'tokens.json',
          options: {
            outputReferences: true,
          },
          filter: function (token) {
            // Figma currently supports Variables with color, float, boolean or string values.
            // https://www.figma.com/plugin-docs/api/VariableresolvedType/

            let returnValue = false

            token.path.forEach((item) => {
              if (['color', 'size'].includes(item)) {
                returnValue = true
              }
            })

            return returnValue
          },
        },
      ],
    },
  },
}

export default config
