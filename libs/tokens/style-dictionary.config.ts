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
    // For internal use in Green Core
    internal: {
      transforms: [
        'attribute/cti',
        'time/seconds',
        'content/icon',
        'size/rem',
        'color/css',
        'name/cti/kebab',
        'color/mix-blend',
      ],
      buildPath: 'internal/',
      prefix: 'gds-',
      files: [
        {
          destination: 'pallet.css',
          format: 'css/variables',
          filter: function (token) {
            if ('darkValue' in token) return false
            return token?.attributes?.type === 'color'
          },
          options: {
            selector: ':host',
          },
        },
        {
          destination: 'theme/light.css',
          format: 'css/theme',
          filter: 'color-scheme',
          options: {
            colorScheme: 'light',
            outputReferences: false,
            selector: ':host',
          },
        },
        {
          destination: 'theme/dark.css',
          format: 'css/theme',
          filter: 'color-scheme',
          options: {
            colorScheme: 'dark',
            outputReferences: false,
            selector: ':host',
          },
        },
        {
          destination: 'size.css',
          format: 'size',
          filter: function (token) {
            return token.type === 'float'
          },
          options: {
            outputReferences: true,
          },
        },
      ],
    },
    css: {
      // transformGroup: 'css',
      transforms: [
        'attribute/cti',
        'time/seconds',
        'content/icon',
        'size/rem',
        'size/px',
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
        'size/px',
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
            if (token.version === '2016') return false
            return token.path.includes('ref')
          },
        },
        {
          destination: '_light.scss',
          format: 'scss/variables',
          filter: (token) => {
            if (token.version === '2016') return false
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
            if (token.version === '2016') return false
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
            if (token.version === '2016') return false
            return token.type === 'color' && !!token.darkValue
          },
        },
        {
          destination: '_mixin-ref.scss',
          format: 'scss/mixin',
          filter: (token) => {
            if (token.version === '2016') return false
            return token.type === 'color' && !token.darkValue
          },
        },
        {
          destination: '_pallet-2016.scss',
          format: 'scss/variables',
          filter: (token) => {
            if (token.darkValue) return false
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
            if (!token.darkValue) return false
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
            if (!token.darkValue) return false
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
            if (token.version !== '2016') return false
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
            if (token.version !== '2016') return false
            return token.type === 'color' && !!token.darkValue
          },
        },
        {
          destination: '_mixin-ref-2016.scss',
          format: 'scss/mixin',
          filter: (token) => {
            if (token.version !== '2016') return false
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
          destination: 'figma-colours-2023.json',
          options: {
            outputReferences: true,
          },
          filter: function (token) {
            // Figma currently supports Variables with color, float, boolean or string values.
            // https://www.figma.com/plugin-docs/api/VariableresolvedType/

            if (token.version === '2016') {
              return false
            }

            const isColour = token.path?.some((item) => {
              return ['color', 'colour'].includes(item)
            })

            if (isColour) {
              return true
            }
          },
        },
        {
          format: 'json/figma',
          destination: 'figma-density-2023.json',
          options: {
            outputReferences: true,
          },
          filter: function (token) {
            // Figma currently supports Variables with color, float, boolean or string values.
            // https://www.figma.com/plugin-docs/api/VariableresolvedType/

            if (token.version === '2016') return false

            if (token.path?.includes('typography')) return false

            const isDensity = token.path?.some((item) => {
              return ['size', 'space'].includes(item)
            })

            if (isDensity) return true
          },
        },
        {
          format: 'json/figma',
          destination: 'figma-typography-2023.json',
          options: {
            outputReferences: true,
          },
          filter: function (token) {
            // Figma currently supports Variables with color, float, boolean or string values.
            // https://www.figma.com/plugin-docs/api/VariableresolvedType/

            if (token.version === '2016') return false

            if (token.path?.includes('typography')) return true
          },
        },
        {
          format: 'json/figma',
          destination: 'variables-colours-2016.json',
          options: {
            outputReferences: true,
          },
          filter: function (token) {
            // Figma currently supports Variables with color, float, boolean or string values.
            // https://www.figma.com/plugin-docs/api/VariableresolvedType/

            if (token.version !== '2016') return false

            const isColour = token.path?.some((item) =>
              ['color', 'colour'].includes(item)
            )

            if (isColour) return true
          },
        },
      ],
    },
  },
}

export default config
