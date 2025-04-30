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

import * as kotlin from './templates/android/kotlin.tokens.js'
import ComposeColorSchemeTemplate from './templates/compose/color-scheme.template.js'
import ComposeClassTemplate from './templates/compose/data-class.template.js'
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
