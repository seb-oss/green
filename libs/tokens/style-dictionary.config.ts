import * as StyleDictionary from 'style-dictionary'
import actions from './src/actions'
import filters from './src/filters'
import formats from './src/formats'
import transforms from './src/transforms'

const swiftPackageName = 'GreenTokens'
const swiftSourcePath = 'Sources/' + swiftPackageName + '/'

/**
 * Register custom actions
 *
 */
for (const entry of Object.entries(actions)) {
  StyleDictionary.registerAction(entry[1])
}

/**
 * Register custom formats
 */
for (const entry of Object.entries(formats)) {
  StyleDictionary.registerFormat(entry[1])
}

/**
 * Register custom transforms
 */
for (const entry of Object.entries(transforms)) {
  StyleDictionary.registerTransform(entry[1])
}

/**
 * Register custom filters
 */
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
          destination: 'light.css',
          format: 'color/v2',
          filter: 'color-scheme',
          options: {
            colorScheme: 'light',
            outputReferences: false,
            // selector: '.light',
          },
        },
        {
          destination: 'dark.css',
          format: 'color/v2',
          filter: 'color-scheme',
          options: {
            colorScheme: 'dark',
            outputReferences: false,
            // selector: ':host',
          },
        },
        {
          destination: 'size.css',
          format: 'size',
          filter: function (token) {
            // Check if the token type is 'float' and the path includes 'space'
            return token.type === 'float' && token.path.includes('space')
          },
          options: {
            outputReferences: true,
          },
        },
        {
          destination: 'viewport.css',
          format: 'viewport',
          filter: function (token) {
            // Check if the token type is 'float' and the path includes 'space'
            return token.type === 'float' && token.path.includes('viewport')
          },
          options: {
            outputReferences: true,
          },
        },
        {
          destination: 'text.css',
          format: 'text',
          filter: function (token) {
            // Check if the token type is 'float' and the path includes 'space'
            return token.type === 'float' && token.path.includes('typography')
          },
          options: {
            outputReferences: true,
          },
        },
        {
          destination: 'shadow.css',
          format: 'shadow',
          filter: function (token) {
            return token.path.includes('shadow')
          },
          options: {
            outputReferences: true,
          },
        },
        {
          destination: 'motion.css',
          format: 'css/variables',
          filter: 'isMotion',
          options: {
            outputReferences: true,
            selector: ':host',
          },
        },
      ],
    },
    css: {
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
          filter: 'is2023Ref',
        },
        {
          destination: 'light.css',
          format: 'css/theme',
          filter: 'is2023Color',
          options: {
            colorScheme: 'light',
          },
        },
        {
          destination: 'dark.css',
          format: 'css/theme',
          filter: 'is2023Color',
          options: {
            colorScheme: 'dark',
          },
        },
        {
          destination: 'pallet-2016.css',
          format: 'css/variables',
          filter: 'is2016Ref',
        },
        {
          destination: 'light-2016.css',
          format: 'css/theme',
          filter: 'is2016Color',
          options: {
            colorScheme: 'light',
          },
        },
        {
          destination: 'dark-2016.css',
          format: 'css/theme',
          filter: 'is2016Color',
          options: {
            colorScheme: 'dark',
          },
        },
      ],
    },
    scss: {
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
          filter: 'is2016Ref',
        },
        {
          destination: '_light.scss',
          format: 'scss/variables',
          filter: 'is2023Color',
          options: {
            colorScheme: 'light',
          },
        },
        {
          destination: '_dark.scss',
          format: 'scss/variables',
          filter: 'is2023Color',
          options: {
            colorScheme: 'dark',
          },
        },
        {
          destination: '_mixin-sys.scss',
          format: 'scss/mixin',
          filter: 'is2023MotionColor',
        },
        {
          destination: '_mixin-ref.scss',
          format: 'scss/mixin',
          filter: 'is2023Ref',
        },
        {
          destination: '_pallet-2016.scss',
          format: 'scss/variables',
          filter: 'is2016Pallet',
          options: {
            outputReferences: false,
          },
        },
        {
          destination: '_light-2016.scss',
          format: 'scss/variables',
          filter: 'is2016Color',
          options: {
            outputReferences: false,
          },
        },
        {
          destination: '_dark-2016.scss',
          format: 'scss/variables',
          filter: 'is2016Color',
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
          filter: 'is2016Color',
        },

        {
          destination: '_mixin-sys-dark-2016.scss',
          format: 'scss/mixin',
          options: {
            colorScheme: 'dark',
          },
          filter: 'is2016Color',
        },
        {
          destination: '_mixin-ref-2016.scss',
          format: 'scss/mixin',
          filter: 'is2016Ref',
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
          filter: 'is2023Ref',
        },
        {
          destination: 'sys-tokens.js',
          format: 'javascript/module',
          filter: 'is2023Sys',
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
              ['color', 'colour'].includes(item),
            )

            if (isColour) return true
          },
        },
      ],
    },
    ios: {
      buildPath: 'ios/',
      sourcePath: swiftSourcePath,
      /**
       * These transforms are an adaptation of the [ios-swift transform group](https://amzn.github.io/style-dictionary/#/transform_groups?id=ios-swift)
       * It needed to be adopted to match our token structure. Since we start the structure with REF & SYS instead of the category.
       */
      transforms: [
        'attribute/cti',
        'name/cti/camel',
        'green/color/UIColorSwift',
        'content/swift/literal',
        'asset/swift/literal',
        'size/swift/remToCGFloat',
        'font/swift/literal',
      ],
      files: [
        {
          destination: 'Package.swift',
          format: 'green/ios-swift-package',
          packageName: swiftPackageName,
          options: {
            platformVersion: '15',
            targets: [swiftPackageName],
            resources: ['Assets'],
          },
        },
        {
          destination: swiftSourcePath + 'Colors/LightModeColors.swift',
          format: 'green/ios-swift-class-tree',
          filter: 'is2023Color',
          className: 'LightModeColors',
          packageName: swiftPackageName,
          options: {
            type: 'color',
            colorScheme: 'light',
          },
        },
        {
          destination: swiftSourcePath + 'Colors/DarkModeColors.swift',
          format: 'green/ios-swift-class-tree',
          filter: 'is2023Color',
          className: 'DarkModeColors',
          packageName: swiftPackageName,
          options: {
            type: 'color',
            colorScheme: 'dark',
          },
        },
        {
          destination: swiftSourcePath + '/Colors/UIColors.swift',
          format: 'green/ios-swift-class-tree',
          filter: 'is2023Color',
          className: 'UIColors',
          packageName: swiftPackageName,
          options: {
            type: 'color',
            colorType: 'uiKitDynamicProvider',
            import: ['UIKit'],
            lightModeObjectName: 'LightModeColors',
            darkModeObjectName: 'DarkModeColors',
          },
        },
        {
          destination: swiftSourcePath + '/Colors/Colors.swift',
          format: 'green/ios-swift-class-tree',
          filter: 'is2023Color',
          className: 'Colors',
          packageName: swiftPackageName,
          options: {
            type: 'color',
            colorType: 'swiftUiReferenceToUiKit',
            import: ['SwiftUI'],
            uiKitObjectName: 'UIColors',
          },
        },
        {
          destination: swiftSourcePath + 'Dimensions.swift',
          format: 'green/ios-swift-class-tree',
          filter: 'is2023Size',
          className: 'Dimensions',
          packageName: swiftPackageName,
          options: {
            type: 'sys',
          },
        },
        {
          destination: swiftSourcePath + 'Radii.swift',
          format: 'green/ios-swift-class-tree',
          filter: 'is2023Radii',
          className: 'Radii',
          packageName: swiftPackageName,
          options: {
            type: 'sys',
          },
        },
      ],
    },
    android: {
      buildPath: 'android/',
      transformGroup: 'android',
      files: [
        {
          destination: 'light-colors.xml',
          format: 'green/android-resources',
          filter: 'is2023Color',
          options: {
            colorScheme: 'light',
            resourceType: 'color',
          },
        },
        {
          destination: 'dark-colors.xml',
          format: 'green/android-resources',
          filter: 'is2023Color',
          options: {
            colorScheme: 'dark',
            resourceType: 'color',
          },
        },
        {
          destination: 'dimensions.xml',
          format: 'green/android-resources',
          filter: 'is2023Size',
          options: {
            resourceType: 'size',
          },
        },
        {
          destination: 'radii.xml',
          format: 'green/android-resources',
          filter: 'is2023Radii',
          options: {
            resourceType: 'number',
          },
        },
      ],
    },
  },
}

export default config
