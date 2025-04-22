import fs from 'fs'
import path, { dirname, format } from 'path'
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
  'green/android-kotlin-class-tree': {
    name: 'green/android-kotlin-class-tree',
    format: ({ dictionary, options, file, platform }) => {
      let allTokens
      const { outputReferences, package, import } =  options
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
        propertyformat = kotlin.uiKitColorReferencePropertyFormatter(
          options.lightModeObjectName,
          options.darkModeObjectName,
          options,
        )
      } else if (options.colorType == 'swiftUiReferenceToUiKit') {
        propertyformat = kotlin.swiftUiColorReferencePropertyFormatter(
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
        propertyformat = kotlin.staticPropertyFormatter(options, valueformat)
      }
      const tree = kotlin.treeFromTokens(allTokens, options.type)
      const fileContent = kotlin.fileContentFromTree(
        tree,
        options,
        file,
        propertyformat,
      )
      return fileContent
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
