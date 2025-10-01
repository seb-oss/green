import fs from 'fs'
import path, { dirname } from 'path'
import { fileURLToPath } from 'url'
import StyleDictionary from 'style-dictionary'

import actions from './src/actions/index.ts'
import filters from './src/filters/index.ts'
import formats from './src/formats/index.ts'
import transforms from './src/transforms/index.ts'

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

const capitalize = (str: string): string => {
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
              'shadow/css/shorthand',
              'font/css',
            ],
            buildPath: __dirname + `/../../dist/libs/tokens/${theme}/internal/`,
            prefix: 'gds-',
            files: [
              {
                destination: `variables.base.css`,
                format: 'css/only-variables',
                filter: 'base-tokens',
                options: {
                  usesDtcg: true,
                },
              },
              {
                destination: `variables.ref.css`,
                format: 'css/only-variables',
                filter: 'is-color-is-ref',
                options: {
                  usesDtcg: true,
                },
              },
              {
                destination: `variables.${colorScheme}.css`,
                format: 'css/only-variables',
                filter: 'is-color-no-ref',
                options: {
                  usesDtcg: true,
                  colorScheme: colorScheme,
                },
              },
              {
                destination: `variables.shadows.css`,
                format: 'css/only-variables',
                filter: 'is-shadow',
                options: {
                  usesDtcg: true,
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
              'shadow/css/shorthand',
              'font/css',
            ],
            buildPath: __dirname + `/../../dist/libs/tokens/${theme}/css/`,
            prefix: 'gds-',
            files: [
              {
                destination: `variables.base.css`,
                format: 'css/variables',
                filter: 'base-tokens',
              },
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
              {
                destination: `variables.shadows.css`,
                format: 'css/variables',
                filter: 'is-shadow',
                options: {
                  usesDtcg: true,
                },
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
              'shadow/css/shorthand',
              'font/css',
            ],
            buildPath: __dirname + `/../../dist/libs/tokens/${theme}/scss/`,
            prefix: 'gds-',
            files: [
              {
                destination: `variables.base.scss`,
                format: 'scss/variables',
                filter: 'base-tokens',
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
              {
                destination: `variables.colors.ref.scss`,
                format: 'scss/variables',
                filter: 'is-color-is-ref',
              },
              {
                destination: `variables.${colorScheme}.scss`,
                format: 'scss/variables',
                filter: 'is-color-no-ref',
              },
              {
                destination: `variables.shadows.scss`,
                format: 'scss/variables',
                filter: 'is-shadow',
              },
            ],
          },
          figma: {
            buildPath: __dirname + `/../../dist/libs/tokens/${theme}/figma/`,
            transforms: ['name/figma', 'color/alpha'],
            files: [
              {
                format: 'json/figma',
                destination: `figma-colours.${colorScheme}.json`,
                filter: 'is-color-no-ref',
              },
              {
                format: 'json/figma',
                destination: `figma.shadows.json`,
                filter: 'is-shadow',
              },
              {
                format: 'json/figma',
                destination: `figma.typography.json`,
                filter: 'is-typography',
              },
              {
                format: 'json/figma',
                destination: `figma.size.json`,
                filter: 'is-dimension',
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
            transforms: [
              'attribute/cti',
              'name/camel',
              'green/color/composeColor',
              'size/compose/em',
              'size/compose/remToSp',
              'size/compose/remToDp',
            ],
            files: [
              {
                destination: `Colors/${capitalize(colorScheme)}ModeColors.kt`,
                format: 'compose/color-scheme',
                filter: 'is-color-no-ref',
                options: {
                  import: ['androidx.compose.ui.graphics.Color'],
                  packageName: ['se.seb.gds.tokens'],
                  className: `GdsColorTokens`,
                  variableName: `${colorScheme}ModeColors`,
                  objectType: 'val',
                },
              },
              {
                destination: 'Colors/GdsColorTokens.kt',
                format: 'compose/class',
                filter: 'is-color-no-ref',
                options: {
                  objectType: 'data',
                  className: 'GdsColorTokens',
                  import: ['androidx.compose.ui.graphics.Color'],
                  packageName: ['se.seb.gds.tokens'],
                },
              },
              {
                destination: 'Colors/GdsColor.kt',
                format: 'jvm/enum-class',
                filter: 'is-color-no-ref',
                options: {
                  objectType: 'enum',
                  className: 'GdsColor',
                  import: [],
                  packageName: ['se.seb.gds.tokens'],
                },
              },
            ],
          },
          jvm: {
            buildPath: __dirname + `/../../dist/libs/tokens/${theme}/jvm/`,
            sourcePath: swiftSourcePath,
            transformGroup: 'compose',
            files: [
              {
                destination: 'GdsColor.kt',
                format: 'jvm/enum-class',
                filter: 'is-color-no-ref',
                options: {
                  objectType: 'enum',
                  className: 'GdsColor',
                  import: [],
                  packageName: ['se.seb.gds'],
                },
              },
            ],
          },
          ...(theme === '2023'
            ? {
                studio: {
                  buildPath: __dirname + `/../../dist/libs/tokens/studio/`,
                  transforms: ['name/studio', 'color/alpha', 'size/px'],
                  source: [
                    __dirname + `/src/tokens/2023/**/*.ref.json`,
                    __dirname + `/src/tokens/2023/**/tokens.base.json`,
                    __dirname + `/src/tokens/2023/**/*.typography.json`,
                    __dirname + `/src/tokens/2023/**/*.comfortable.json`,
                    __dirname + `/src/tokens/2023/**/*.${colorScheme}.json`,
                  ],
                  files: [
                    {
                      format: 'json/studio',
                      destination: `studio.colors.${colorScheme}.json`,
                      filter: 'is-color-no-ref',
                      options: { usesDtcg: true, theme: '2023', colorScheme },
                    },
                    {
                      format: 'json/studio',
                      destination: `studio.shadows.json`,
                      filter: 'is-shadow',
                    },
                    {
                      format: 'json/studio',
                      destination: `studio.typography.json`,
                      filter: 'is-typography',
                    },
                    {
                      format: 'json/studio',
                      destination: `studio.viewport.json`,
                      filter: 'is-viewport',
                    },
                    {
                      format: 'json/studio',
                      destination: `studio.radius.json`,
                      filter: 'is-radius',
                    },
                    {
                      format: 'json/studio',
                      destination: `studio.spacing.json`,
                      filter: 'is-spacing',
                    },
                    {
                      format: 'json/studio',
                      destination: `studio.motion.json`,
                      filter: 'is-motion',
                    },
                  ],
                },
              }
            : {}),
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
