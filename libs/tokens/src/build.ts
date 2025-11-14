import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import StyleDictionary from 'style-dictionary'

import type { Config, PlatformConfig, Transform } from 'style-dictionary/types'

import actions from './actions/index.ts'
import filters from './filters/index.ts'
import formats from './formats/index.ts'
import transforms from './transforms/index.ts'

const swiftPackageName = 'GdsKit'

const swiftTargets = [
  {
    name: swiftPackageName,
    dependencies: ['GdsColours', 'GdsTypography'],
    path: '',
    resources: [],
  },
  {
    name: 'GdsColours',
    dependencies: [],
    path: `Sources/GdsColours`,
    resources: ['Resources'],
  },
  {
    name: 'GdsTypography',
    dependencies: [],
    path: 'Sources/GdsTypography',
    resources: ['Resources'],
  },
]
const swiftSourcePath = 'Sources/' + swiftPackageName + '/'
const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

const distPath = path.resolve(dirname, '../../../dist/libs/tokens')
if (fs.existsSync(distPath)) {
  fs.rmSync(distPath, { recursive: true, force: true })
}

const capitalize = (str: string): string => {
  return String(str).charAt(0).toUpperCase() + String(str).slice(1)
}

const themes = {
  2016: {
    baseTheme: 2016,
    getPlatforms: ({ theme, colorScheme }): Record<string, PlatformConfig> => ({
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
        buildPath: distPath + `/${theme}/css/`,
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
        buildPath: distPath + `/${theme}/scss/`,
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
        buildPath: distPath + `/${theme}/figma/`,
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
    }),
    getSource: () => [],
  },
  2023: {
    baseTheme: 2023,
    getPlatforms: ({ theme, colorScheme }): Record<string, PlatformConfig> => ({
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
        buildPath: distPath + `/${theme}/internal/`,
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
        basePxFontSize: 16,
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
        buildPath: distPath + `/${theme}/css/`,
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
        buildPath: distPath + `/${theme}/scss/`,
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
        buildPath: distPath + `/${theme}/figma/`,
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
      android: {
        buildPath: distPath + `/${theme}/android/`,
        transforms: [
          'name/android',
          'green/color/composeColor',
          'size/compose/em',
          'size/compose/remToSp',
          'size/compose/remToDp',
        ],
        files: [
          {
            destination: `colors/${capitalize(colorScheme)}ModeColors.kt`,
            format: 'compose/color-scheme',
            filter: 'is-color-no-ref',
            options: {
              import: ['androidx.compose.ui.graphics.Color'],
              packageName: ['se.seb.gds.tokens'],
              className: `GdsColorTokens`,
              variableName: `${capitalize(colorScheme)}ModeColors`,
              objectType: 'val',
            },
          },
          {
            destination: 'colors/GdsColorTokens.kt',
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
            destination: 'typography/GdsTypographyTokens.kt',
            format: 'compose/typography',
            filter: 'is-typography',
            options: {
              objectType: 'object',
              className: 'GdsTypographyTokens',
              import: [
                'androidx.compose.ui.text.TextStyle',
                'androidx.compose.ui.text.font.FontWeight',
                'androidx.compose.ui.unit.sp',
              ],
              packageName: ['se.seb.gds.tokens'],
            },
          },
          {
            destination: 'typography/GdsFont.kt',
            format: 'compose/font',
            filter: 'is-font-weight',
            options: {
              import: [
                'androidx.compose.ui.text.font.Font',
                'androidx.compose.ui.text.font.FontFamily',
                'androidx.compose.ui.text.font.FontWeight',
              ],
              packageName: ['se.seb.gds.tokens'],
            },
          },
          {
            destination: 'colors/GdsColor.kt',
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
        actions: ['copy-android-assets'],
      },
      jvm: {
        buildPath: distPath + `/${theme}/jvm/`,
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
          {
            destination: 'GdsTypography.kt',
            format: 'jvm/enum-class',
            filter: 'is-typography',
            options: {
              objectType: 'enum',
              className: 'GdsTypography',
              import: [],
              packageName: ['se.seb.gds'],
            },
          },
        ],
      },
      studio: {
        buildPath: distPath + `/studio/`,
        transforms: ['name/studio', 'color/alpha', 'size/px'],
        source: [
          dirname + `/tokens/2023/**/*.ref.json`,
          dirname + `/tokens/2023/**/tokens.base.json`,
          dirname + `/tokens/2023/**/*.typography.json`,
          dirname + `/tokens/2023/**/*.comfortable.json`,
          dirname + `/tokens/2023/**/*.${colorScheme}.json`,
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
    }),
    getSource: () => [],
  },
  ios: {
    baseTheme: 2023,
    getPlatforms: ({ theme, colorScheme }): Record<string, PlatformConfig> => ({
      ios: {
        buildPath: distPath + `/${theme}/ios/`,
        sourcePath: swiftSourcePath,
        transforms: [
          'name/ios',
          'green/color/UIColorSwift',
          'content/swift/literal',
          'asset/swift/literal',
          'size/swift/remToCGFloat',
        ],
        files: [
          {
            destination: 'Package.swift',
            format: 'green/ios-swift-package',
            options: {
              packageName: swiftPackageName,
              platformVersion: '15',
              targets: swiftTargets,
            },
          },
          {
            destination: 'Sources/GdsKit/GdsKit.swift',
            format: 'green/ios-swift-gdskit',
            options: {
              imports: ['GdsColours', 'GdsTypography'],
            },
          },
          {
            destination: 'Sources/GdsColours/GdsColours.swift',
            format: 'green/ios-swift-colours',
            filter: 'is-color-no-ref',
          },
          {
            destination: 'Sources/GdsTypography/GdsTypography.swift',
            format: 'green/ios-swift-typography',
            filter: 'is-typography',
          },
          // We don't currently have the correct format for spacing tokens
          // but leaving this here for when we do
          // {
          //   destination: 'Sources/GdsDimensions/GdsSpacing.swift',
          //   format: 'ios-swift/any.swift',
          //   filter: 'is-spacing',
          //   options: {
          //     className: 'GdsSpacing',
          //     import: ['Foundation'],
          //     accessControl: 'public',
          //     objectType: 'struct',
          //   },
          // },
        ],
        actions: [`color-set-${colorScheme}`, 'copy-ios-assets'],
      },
      figma: {
        buildPath: distPath + `/${theme}/figma/`,
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
    }),
    getSource: ({ theme, colorScheme }): Array<string> => [
      dirname + `/tokens/ios/**/*.typography.json`,
      dirname + `/tokens/ios/**/*.${colorScheme}.json`,
    ],
  },
}
const colorSchemes = ['light', 'dark']

const buildTokens = async () => {
  await Promise.all(
    Object.entries(themes).map(([theme, themeConfig]) => {
      return Promise.all(
        colorSchemes.map((colorScheme) => {
          const config: Config = {
            include: [
              dirname + `/tokens/${themeConfig.baseTheme}/**/*.ref.json`,
              dirname + `/tokens/${themeConfig.baseTheme}/**/tokens.base.json`,
              dirname + `/tokens/${themeConfig.baseTheme}/**/*.typography.json`,
              dirname +
                `/tokens/${themeConfig.baseTheme}/**/*.comfortable.json`,
              dirname +
                `/tokens/${themeConfig.baseTheme}/**/*.${colorScheme}.json`,
            ],
            source: themeConfig.getSource({ theme, colorScheme }),
            log: {
              verbosity: 'verbose',
            },
            platforms: themeConfig.getPlatforms({ theme, colorScheme }),
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
            sd.registerTransform(entry[1] as Transform)
          }

          /**
           * Register custom filters
           */
          for (const entry of Object.entries(filters)) {
            sd.registerFilter(entry[1])
          }

          return sd.buildAllPlatforms()
        }),
      )
    }),
  )
}

export default buildTokens
