import * as StyleDictionary from 'style-dictionary'
import formats from './src/formats'
import transforms from './src/transforms'
import filters from './src/filters'
import actions from './src/actions'

for (const entry of Object.entries(actions)) {
  StyleDictionary.registerAction(entry[1])
}

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
      // transformGroup: 'css',
      transforms: [
        'attribute/cti',
        'time/seconds',
        'content/icon',
        'size/rem',
        'color/css',
        'name/cti/kebab',
        'color/alpha',
      ],
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
      //transformGroup: 'scss',
      transforms: [
        'attribute/cti',
        'name/cti/kebab',
        'time/seconds',
        'content/icon',
        'size/rem',
        'color/css',
        'color/alpha',
      ],
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
    js: {
      //transformGroup: 'js',
      transforms: [
        'attribute/cti',
        'name/cti/pascal',
        'size/rem',
        'color/hex',
        'color/alpha',
      ],
      buildPath: 'js/',
      prefix: 'gds',
      files: [
        {
          destination: 'ref-tokens.js',
          format: 'javascript/module',
          filter: function (token) {
            return token.path.includes('ref')
          },
        },
        {
          destination: 'sys-tokens.js',
          format: 'javascript/module',
          filter: function (token) {
            return token.path.includes('sys')
          },
        },
      ],
    },
    figma: {
      buildPath: 'figma/',
      transforms: ['name/figma', 'color/alpha'],
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

            token.path?.forEach((item) => {
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
