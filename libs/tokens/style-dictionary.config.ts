import * as StyleDictionary from 'style-dictionary'
import actions from './src/actions'
import filters from './src/filters'
import formats from './src/formats'
import transforms from './src/transforms'

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
          filter: (token) => {
            if (token.version === '2016') {
              return false
            }
            return token.path.includes('ref')
          },
        },
        {
          destination: 'light.css',
          format: 'css/theme',
          filter: (token) => {
            if (token.version === '2016') {
              return false
            }
            return !!token.darkValue
          },
          options: {
            colorScheme: 'light',
          },
        },
        {
          destination: 'dark.css',
          format: 'css/theme',
          filter: (token) => {
            if (token.version === '2016') {
              return false
            }

            return !!token.darkValue
          },
          options: {
            colorScheme: 'dark',
          },
        },
        {
          destination: 'pallet-2016.css',
          format: 'css/variables',
          filter: (token) => {
            if (token.version !== '2016') {
              return false
            }
            return token.path.includes('ref')
          },
        },
        {
          destination: 'light-2016.css',
          format: 'css/theme',
          filter: (token) => {
            if (token.version !== '2016') {
              return false
            }
            return !!token.darkValue
          },
          options: {
            colorScheme: 'light',
          },
        },
        {
          destination: 'dark-2016.css',
          format: 'css/theme',
          filter: (token) => {
            if (token.version !== '2016') {
              return false
            }

            return !!token.darkValue
          },
          options: {
            colorScheme: 'dark',
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
          filter: (token) => {
            if (token.version === '2016') {
              return false
            }
            return token.path.includes('ref')
          },
        },
        {
          destination: '_light.scss',
          format: 'scss/variables',
          filter: (token) => {
            if (token.version === '2016') {
              return false
            }
            return !!token.darkValue
          },
          options: {
            colorScheme: 'light',
          },
        },
        {
          destination: '_dark.scss',
          format: 'scss/variables',
          filter: (token) => {
            if (token.version === '2016') {
              return false
            }
            return !!token.darkValue
          },
          options: {
            colorScheme: 'dark',
          },
        },
        {
          destination: '_mixin-sys.scss',
          format: 'scss/mixin',
          filter: (token) => {
            if (token.version === '2016') {
              return false
            }
            return token.type === 'color' && !!token.darkValue
          },
        },
        {
          destination: '_mixin-ref.scss',
          format: 'scss/mixin',
          filter: (token) => {
            if (token.version === '2016') {
              return false
            }
            return token.type === 'color' && !token.darkValue
          },
        },
        {
          destination: '_pallet-2016.scss',
          format: 'scss/variables',
          filter: (token) => {
            if (token.darkValue) {
              return false
            }
            return token.version === '2016'
          },
          options: {
            outputReferences: false,
          },
        },
        {
          destination: '_light-2016.scss',
          format: 'scss/variables',
          filter: (token) => {
            if (!token.darkValue) {
              return false
            }
            return token.version === '2016'
          },
          options: {
            outputReferences: false,
          },
        },
        {
          destination: '_dark-2016.scss',
          format: 'scss/variables',
          filter: (token) => {
            if (!token.darkValue) {
              return false
            }
            return token.version === '2016'
          },
          options: {
            outputReferences: false,
          },
        },
        {
          destination: '_mixin-sys-light-2016.scss',
          format: 'scss/mixin',
          options: {
            colorScheme: 'light',
          },
          filter: (token) => {
            if (token.version !== '2016') {
              return false
            }
            return token.type === 'color' && !!token.darkValue
          },
        },

        {
          destination: '_mixin-sys-dark-2016.scss',
          format: 'scss/mixin',
          options: {
            colorScheme: 'dark',
          },
          filter: (token) => {
            if (token.version !== '2016') {
              return false
            }
            return token.type === 'color' && !!token.darkValue
          },
        },
        {
          destination: '_mixin-ref-2016.scss',
          format: 'scss/mixin',
          filter: (token) => {
            if (token.version !== '2016') {
              return false
            }
            return token.type === 'color' && !token.darkValue
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
          destination: 'variables.json',
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
        {
          format: 'json/figma',
          destination: 'variables-2016.json',
          options: {
            outputReferences: true,
          },
          filter: function (token) {
            // Figma currently supports Variables with color, float, boolean or string values.
            // https://www.figma.com/plugin-docs/api/VariableresolvedType/

            if (token.version !== '2016') {
              return false
            }

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
