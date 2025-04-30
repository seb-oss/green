import fs from 'fs'
import path, { dirname } from 'path'
import { fileURLToPath } from 'url'
import StyleDictionary from 'style-dictionary'

import actions from './src/actions.js'
import filters from './src/filters.js'
import formats from './src/formats.js'
import transforms from './src/transforms.js'

const swiftPackageName = 'GdsTokens'
const swiftSourcePath = 'Sources/' + swiftPackageName + '/'

/**
 * Remove the dist folder if it exists
 */
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const distPath = path.resolve(__dirname, '../../dist/libs/tokens')
if (fs.existsSync(distPath)) {
  fs.rmSync(distPath, { recursive: true, force: true })
}

const capitalize = (str) => {
  return String(str).charAt(0).toUpperCase() + String(str).slice(1)
}

const themes = ['2016', '2023']
const colorSchemes = ['light', 'dark']

await Promise.all(
  themes.map((theme) => {
    colorSchemes.map((colorScheme) => {
      const config = {
        source: [
          __dirname + `/src/tokens/${theme}/**/*.ref.json`,
          __dirname + `/src/tokens/${theme}/**/tokens.base.json`,
          __dirname + `/src/tokens/${theme}/**/*.typography.json`,
          __dirname + `/src/tokens/${theme}/**/*.comfortable.json`,
          __dirname + `/src/tokens/${theme}/**/*.${colorScheme}.json`,
        ],
        log: {
          verbosity: 'verbose',
        },
        platforms: {
          internal: {
            transforms: [
              'attribute/cti',
              'time/seconds',
              'html/icon',
              'size/px',
              'color/css',
              'name/kebab',
              'color/mix-blend',
            ],
            buildPath: __dirname + `/../../dist/libs/tokens/${theme}/internal/`,
            prefix: 'gds-',
            files: [
              {
                destination: `variables.css`,
                format: 'css/only-variables',
                filter: 'no-colors-no-ref',
              },
              {
                destination: `variables.ref.css`,
                format: 'css/only-variables',
                filter: 'is-color-is-ref',
              },
              {
                destination: `variables.${colorScheme}.css`,
                format: 'css/only-variables',
                filter: 'is-color-no-ref',
                options: {
                  colorScheme: colorScheme,
                },
              },
            ],
          },
          css: {
            transforms: [
              'attribute/cti',
              'time/seconds',
              'html/icon',
              'size/px',
              'color/css',
              'name/kebab',
              'color/alpha',
            ],
            buildPath: __dirname + `/../../dist/libs/tokens/${theme}/css/`,
            prefix: 'gds-',
            files: [
              {
                destination: `colors.ref.css`,
                format: 'css/variables',
                filter: 'is-color-is-ref',
              },
              {
                destination: `variables.${colorScheme}.css`,
                format: 'css/variables',
                filter: 'is-color-no-ref',
              },
            ],
          },
          scss: {
            transforms: [
              'attribute/cti',
              'name/kebab',
              'time/seconds',
              'html/icon',
              'size/rem',
              'size/px',
              'color/css',
              'color/alpha',
            ],
            buildPath: __dirname + `/../../dist/libs/tokens/${theme}/scss/`,
            prefix: 'gds-',
            files: [
              {
                destination: `variables.css`,
                format: 'css/variables',
                filter: 'no-colors-no-ref',
              },
              {
                destination: `_mixin.colors.ref.scss`,
                format: 'scss/mixin',
                filter: 'is-color-is-ref',
              },
              {
                destination: `_mixin.${colorScheme}.scss`,
                format: 'scss/mixin',
                filter: 'is-color-no-ref',
              },
            ],
          },
          figma: {
            buildPath: __dirname + `/../../dist/libs/tokens/${theme}/figma/`,
            transforms: ['name/figma', 'color/alpha'],
            files: [
              {
                format: 'json/figma',
                destination: 'figma-colours.json',
                filter: 'is-color',
              },
            ],
          },
          ios: {
            buildPath: __dirname + `/../../dist/libs/tokens/${theme}/ios/`,
            sourcePath: swiftSourcePath,
            transforms: [
              'attribute/cti',
              'name/camel',
              'green/color/UIColorSwift',
              'content/swift/literal',
              'asset/swift/literal',
              'size/pxToRem',
              'size/swift/remToCGFloat',
            ],
            files: [
              {
                destination: 'Package.swift',
                format: 'green/ios-swift-package',
                packageName: swiftPackageName,
                options: {
                  platformVersion: '15',
                  targets: [swiftPackageName],
                },
              },
              {
                destination: `Colors/${capitalize(colorScheme)}ModeColors.swift`,
                format: 'green/ios-swift-class-tree',
                filter: 'is-color-no-ref',
                options: {
                  import: ['UIKit'],
                  objectType: 'struct',
                  className: `${capitalize(colorScheme)}ModeColors`,
                },
              },
              {
                destination: 'Colors/UIColors.swift',
                format: 'green/ios-swift-class-tree',
                filter: 'is-color-no-ref',
                options: {
                  import: ['UIKit'],
                  objectType: 'struct',
                  className: 'UIColors',
                  colorType: 'uiKitDynamicProvider',
                  lightModeObjectName: 'LightModeColors',
                  darkModeObjectName: 'DarkModeColors',
                },
              },
              {
                destination: 'Colors/Colors.swift',
                format: 'green/ios-swift-class-tree',
                filter: 'is-color-no-ref',
                options: {
                  objectType: 'struct',
                  import: ['SwiftUI'],
                  uiKitObjectName: 'UIColors',
                  className: 'Colors',
                  colorType: 'swiftUiReferenceToUiKit',
                },
              },
              {
                destination: 'Dimensions.swift',
                format: 'ios-swift/any.swift',
                filter: 'is-dimension',
                options: {
                  import: ['UIKit'],
                  objectType: 'struct',
                  className: 'Dimensions',
                },
              },
              {
                destination: 'Shape.swift',
                format: 'ios-swift/any.swift',
                filter: 'is-shape',
                options: {
                  import: ['UIKit'],
                  objectType: 'struct',
                  className: 'Shape',
                },
              },
            ],
          },
          android: {
            buildPath: __dirname + `/../../dist/libs/tokens/${theme}/android/`,
            sourcePath: swiftSourcePath,
            transformGroup: 'compose',
            files: [
              {
                destination: `Colors/${capitalize(colorScheme)}ModeColors.kt`,
                format: 'compose/color-scheme',
                filter: 'is-color-no-ref',
                options: {
                  import: ['androidx.compose.ui.graphics.Color'],
                  packageName: ['se.seb.gds.tokens'],
                  className: `GdsTokens`,
                  variableName: `${colorScheme}ModeColors`,
                  objectType: 'val',
                },
              },
              {
                destination: 'Colors/Colors.kt',
                format: 'compose/class',
                filter: 'is-color-no-ref',
                options: {
                  objectType: 'data',
                  className: 'GdsTokens',
                  import: ['androidx.compose.ui.graphics.Color'],
                  packageName: ['se.seb.gds.tokens'],
                },
              },
              // {
              //   destination: 'Dimensions.kt',
              //   format: 'compose/object',
              //   filter: 'is-dimension',
              //   options: {
              //     import: ['UIKit'],
              //     objectType: 'struct',
              //     className: 'Dimensions',
              //   },
              // },
              // {
              //   destination: 'Shape.kt',
              //   format: 'compose/object',
              //   filter: 'is-shape',
              //   options: {
              //     import: ['UIKit'],
              //     objectType: 'struct',
              //     className: 'Shape',
              //   },
              // },
            ],
          },
        },
      }

      const sd = new StyleDictionary(config)

      /**
       * Register custom actions
       */
      for (const entry of Object.entries(actions)) {
        sd.registerAction(entry[1])
      }

      /**
       * Register custom formats
       */
      for (const entry of Object.entries(formats)) {
        sd.registerFormat(entry[1])
      }

      /**
       * Register custom transforms
       */
      for (const entry of Object.entries(transforms)) {
        sd.registerTransform(entry[1])
      }

      /**
       * Register custom filters
       */
      for (const entry of Object.entries(filters)) {
        sd.registerFilter(entry[1])
      }

      return sd.buildAllPlatforms()
    })
  }),
)
