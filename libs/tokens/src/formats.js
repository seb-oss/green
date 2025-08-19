import fs from 'fs'
import path, { dirname, format, sep } from 'path'
import { fileURLToPath } from 'url'
import _ from 'lodash'
import {
  createPropertyFormatter,
  fileHeader,
  formattedVariables,
  setSwiftFileProperties,
  sortByName,
  sortByReference,
} from 'style-dictionary/utils'

import ComposeColorSchemeTemplate from './templates/compose/color-scheme.template.js'
import ComposeClassTemplate from './templates/compose/data-class.template.js'
import EnumClassTemplate from './templates/jvm/enum-class.template.js'
import * as swift from './templates/ios/swift.tokens.js'

/**
 * Remove the dist folder if it exists
 */
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const formats = {
  'css/only-variables': {
    name: 'css/only-variables',
    format: async ({ dictionary, file, options }) => {
      const { outputReferences } = options
      const header = await fileHeader({ file })
      return (
        header +
        (options.colorScheme
          ? `\n  color-scheme: ${options.colorScheme};\n`
          : '') +
        formattedVariables({
          format: 'css',
          dictionary,
          outputReferences,
        })
      )
    },
  },
  'css/shadows': {
    name: 'css/shadows',
    format: async function (args) {
      const dictionary = Object.assign({}, args.dictionary)

      // Define opacity values for each shadow size
      // TODO: Implement a better way to handle opacity values or get the colors from Figma tokens
      const opacityMap = {
        xs: [0.1, 0.1],
        s: [0.1, 0.06],
        m: [0.1, 0.06],
        l: [0.08, 0.03],
        xl: [0.08, 0.03],
      }

      // Helper function to convert hex to rgba
      function hexToRgba(hex, opacity) {
        const bigint = parseInt(hex.slice(1), 16)
        const r = (bigint >> 16) & 255
        const g = (bigint >> 8) & 255
        const b = bigint & 255
        return `rgba(${r}, ${g}, ${b}, ${opacity})`
      }

      // Group shadow properties by size
      const shadowGroups = dictionary.allTokens.reduce((acc, token) => {
        if (token.path[0] === 'sys' && token.path[1] === 'shadow') {
          const size = token.path[2].split('-')[0]
          if (!acc[size]) acc[size] = {}
          acc[size][token.path.slice(2).join('-')] = token.value
        }
        return acc
      }, {})

      // Create combined shadow variables
      const combinedShadows = Object.entries(shadowGroups)
        .map(([size, props]) => {
          const offsetX1 = props[`${size}-offset-x-1`] || 0
          const offsetY1 = props[`${size}-offset-y-1`] || 0
          const blur1 = props[`${size}-blur-1`] || 0
          const spread1 = props[`${size}-spread-1`] || 0
          const color1 = hexToRgba(
            props[`${size}-color-1`] || '#000000',
            opacityMap[size][0],
          )
          const offsetX2 = props[`${size}-offset-x-2`] || 0
          const offsetY2 = props[`${size}-offset-y-2`] || 0
          const blur2 = props[`${size}-blur-2`] || 0
          const spread2 = props[`${size}-spread-2`] || 0
          const color2 = hexToRgba(
            props[`${size}-color-2`] || '#000000',
            opacityMap[size][1],
          )

          const shadowValue = `${offsetX1}px ${offsetY1}px ${blur1}px ${spread1}px ${color1}, ${offsetX2}px ${offsetY2}px ${blur2}px ${spread2}px ${color2}`
          return `--gds-sys-shadow-${size}: ${shadowValue};`
        })
        .join('\n')

      return (await fileHeader({ file: args.file })) + combinedShadows + `\n`
    },
  },
  'figma/json': {
    name: 'json/figma',
    format: async ({ dictionary }) => {
      return (
        '[\n  ' +
        dictionary.allTokens
          .map((token) => {
            return `${JSON.stringify({
              name: token.name,
              value: token.value,
              type: token.type,
            })}`
          })
          .join(',\n  ') +
        '\n]\n'
      )
    },
  },
  'scss/mixin': {
    name: 'scss/mixin',
    format: async ({ dictionary, file, options }) => {
      const { outputReferences } = options
      const header = await fileHeader({ file })
      return (
        header +
        `@mixin add-variables {\n` +
        formattedVariables({
          format: 'css',
          dictionary,
          outputReferences,
        }) +
        `\n}\n`
      )
    },
  },
  'green/ios-swift-package': {
    name: 'green/ios-swift-package',
    format: async ({ options, file }) => {
      const header = await fileHeader({ file })
      const template = _.template(
        fs.readFileSync(__dirname + '/templates/ios/spm.package.template'),
      )
      return template({ file, options, header })
    },
  },
  'green/ios-swift-class-tree': {
    name: 'green/ios-swift-class-tree',
    format: ({ dictionary, options, file, platform }) => {
      let allTokens
      const { outputReferences } = options
      options = setSwiftFileProperties(
        options,
        'class',
        platform.transformGroup,
      )
      if (outputReferences) {
        allTokens = [...dictionary.allTokens].sort(sortByReference(dictionary))
      } else {
        allTokens = [...dictionary.allTokens].sort(sortByName)
      }

      let propertyformat
      if (options.colorType == 'uiKitDynamicProvider') {
        propertyformat = swift.uiKitColorReferencePropertyFormatter(
          options.lightModeObjectName,
          options.darkModeObjectName,
          options,
        )
      } else if (options.colorType == 'swiftUiReferenceToUiKit') {
        propertyformat = swift.swiftUiColorReferencePropertyFormatter(
          options.uiKitObjectName,
          options,
        )
      } else {
        const valueformat = createPropertyFormatter({
          outputReferences,
          dictionary,
          formatting: {
            suffix: '',
          },
        })
        propertyformat = swift.staticPropertyFormatter(options, valueformat)
      }
      const tree = swift.treeFromTokens(allTokens, options.type)
      const fileContent = swift.fileContentFromTree(
        tree,
        options,
        file,
        propertyformat,
      )
      return fileContent
    },
  },
  'compose/class': {
    name: 'compose/class',
    format: async ({ dictionary, options, file }) => {
      return ComposeClassTemplate({
        allTokens: dictionary.allTokens,
        options,
        header: await fileHeader({ file }),
      })
    },
  },
  'compose/color-scheme': {
    name: 'compose/color-scheme',
    format: async ({ dictionary, options, file }) => {
      return ComposeColorSchemeTemplate({
        allTokens: dictionary.allTokens,
        formatProperty: createPropertyFormatter({
          outputReferences: options.outputReferences,
          dictionary,
          formatting: {
            prefix: '',
            suffix: ',',
            separator: ' =',
          },
        }),
        options,
        header: await fileHeader({ file }),
      })
    },
  },
  'jvm/enum-class': {
    name: 'jvm/enum-class',
    format: async ({ dictionary, options, file }) => {
      return EnumClassTemplate({
        allTokens: dictionary.allTokens,
        formatProperty: createPropertyFormatter({
          outputReferences: options.outputReferences,
          dictionary,
          formatting: {
            prefix: '',
            suffix: ',',
            separator: ' =',
          },
        }),
        options,
        header: await fileHeader({ file }),
      })
    },
  },
  // 'green/android-resources': {
  //   name: 'green/android-resources',
  //   format: ({ dictionary, options, file }) => {
  //     dictionary.allTokens = dictionary.allTokens.map((token) => {
  //       token.attributes.category = options.resourceType || 'string'

  //       return token
  //     })

  //     return AndroidResourcesTemplate({ dictionary, file, options, fileHeader })
  //   },
  // },
}
export default formats
