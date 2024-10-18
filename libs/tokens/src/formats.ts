import * as fs from 'fs'
import * as _template from 'lodash.template'
import * as swift from './templates/ios/swift.tokens'

import {
  Format,
  Options,
  TransformedToken,
  formatHelpers,
} from 'style-dictionary'
import { color } from '@storybook/theming'

const {
  fileHeader,
  sortByReference,
  createPropertyFormatter,
  sortByName,
  setSwiftFileProperties,
} = formatHelpers

const useColorScheme = (
  allTokens: TransformedToken[],
  options: Options,
): TransformedToken[] => {
  return allTokens.map((token) => {
    const { darkValue } = token
    // Only override if the token has a darkValue and that you"ve passed in colorScheme: "dark" in the file options.
    if (darkValue && options.colorScheme === 'dark') {
      return Object.assign({}, token, {
        value: token.darkValue,
        //Also need to override the original value for outputReferences: false to work
        original: { value: token.original.darkValue },
      })
    } else {
      return token
    }
  })
}

const formats: Record<string, Format> = {
  'css/theme': {
    name: 'css/theme',
    formatter: function (args) {
      const dictionary = Object.assign({}, args.dictionary)
      const options: Options = Object.assign(
        { colorScheme: 'light', selector: ':root' },
        args.options,
      )
      // Override each token"s `value` with `darkValue`
      dictionary.allTokens = useColorScheme(dictionary.allTokens, options)

      // Use the built-in format but with our customized dictionary object
      // so it will output the darkValue instead of the value
      // return format[format]({ ...args, dictionary })
      return (
        formatHelpers.fileHeader({ file: args.file }) +
        `${options.selector} {\n` +
        `  color-scheme: ${options.colorScheme};\n` +
        formatHelpers.formattedVariables({
          format: 'css',
          dictionary,
          outputReferences: options.outputReferences,
        }) +
        `\n}\n`
      )
    },
  },
  'color/v2': {
    name: 'color/v2',
    formatter: function (args) {
      const dictionary = Object.assign({}, args.dictionary)
      const options = Object.assign(
        { selector: ':host', colorScheme: 'light' },
        args.options,
      )

      // Apply color scheme to tokens
      dictionary.allTokens = useColorScheme(dictionary.allTokens, options)

      // Filter and map each token
      dictionary.allTokens = dictionary.allTokens
        .filter((token) => token.filePath.includes('color-v2'))
        .map((token) => {
          if (
            token.path[2] === 'l1' ||
            token.path[2] === 'l2' ||
            token.path[2] === 'l3'
          ) {
            token.name = `gds-color-${token.path.slice(2).join('-')}`
          }

          return token
        })

      // Generate CSS variables with alpha value concatenation
      const cssVariables = dictionary.allTokens
        .map((token) => {
          let value =
            options.colorScheme === 'dark' ? token.darkValue : token.value
          const alpha = token.alpha ? ` ${token.alpha}` : ''

          // Clean up value if it contains NaN%
          if (value.includes('NaN%')) {
            value = value.replace(' NaN%', '')
          }

          return `  --${token.name}: ${value}${alpha};\n`
        })
        .join('')

      // Return the formatted CSS
      return (
        formatHelpers.fileHeader({ file: args.file }) +
        `color-scheme: ${options.colorScheme};\n` +
        cssVariables
      )
    },
  },
  size: {
    name: 'size',
    formatter: function (args) {
      const dictionary = Object.assign({}, args.dictionary)
      const options = Object.assign({ selector: ':host' }, args.options)

      // Map each token
      dictionary.allTokens = dictionary.allTokens.map((token) => {
        if (token.path[0] === 'sys' && token.path[1] === 'space') {
          // Adjust token name to remove hyphen after numbers
          const adjustedName = token.name
            .replace(/(\d)-/, '$1')
            .replace('sys-', '')
          return Object.assign({}, token, {
            name: adjustedName,
            value: `${token.value}px`,
            original: { value: `${token.value}px` },
          })
        } else {
          return token
        }
      })

      return (
        formatHelpers.fileHeader({ file: args.file }) +
        `${options.selector} {\n` +
        formatHelpers.formattedVariables({
          format: 'css',
          dictionary,
          outputReferences: options.outputReferences,
        }) +
        `\n}\n`
      )
    },
  },
  viewport: {
    name: 'viewport',
    formatter: function (args) {
      const dictionary = Object.assign({}, args.dictionary)
      const options = Object.assign({ selector: ':host' }, args.options)

      // Map each token
      dictionary.allTokens = dictionary.allTokens.map((token) => {
        if (token.path[0] === 'sys' && token.path[1] === 'viewport') {
          // Adjust token name to remove hyphen after numbers
          const adjustedName = token.name
            .replace(/(\d)-/, '$1')
            .replace('sys-', '')
            .replace('viewport', 'vp')
          return Object.assign({}, token, {
            name: adjustedName,
            value: `${token.value}px`,
            original: { value: `${token.value}px` },
          })
        } else {
          return token
        }
      })

      return (
        formatHelpers.fileHeader({ file: args.file }) +
        `${options.selector} {\n` +
        formatHelpers.formattedVariables({
          format: 'css',
          dictionary,
          outputReferences: options.outputReferences,
        }) +
        `\n}\n`
      )
    },
  },
  text: {
    name: 'text',
    formatter: function (args) {
      const dictionary = Object.assign({}, args.dictionary)
      const options = Object.assign({ selector: ':host' }, args.options)

      // TODO: Update all sizes for typography
      // Map each token
      dictionary.allTokens = dictionary.allTokens.map((token) => {
        if (
          (token.path[0] === 'sys' &&
            token.path[1] === 'typography' &&
            token.path[2] === 'size') ||
          (token.path[0] === 'sys' &&
            token.path[1] === 'typography' &&
            token.path[2] === 'line-height')
        ) {
          // Adjust token name to remove hyphen after numbers
          const adjustedName = token.name
            .replace(/(\d)-/, '$1')
            .replace('sys-', '')
            .replace('typography-', 'text-')
          return Object.assign({}, token, {
            name: adjustedName,
            value: `${token.value}px`,
            original: { value: `${token.value}px` },
          })
        } else if (
          token.path[0] === 'sys' &&
          token.path[1] === 'typography' &&
          token.path[2] === 'weight'
        ) {
          // Only adjust token name for 'weight', without changing the value
          const adjustedName = token.name
            .replace('sys-', '')
            .replace('typography-', 'text-')
          return Object.assign({}, token, {
            name: adjustedName,
            // Do not modify the value for 'weight' tokens
          })
        } else {
          return token
        }
      })

      return (
        formatHelpers.fileHeader({ file: args.file }) +
        `${options.selector} {\n` +
        formatHelpers.formattedVariables({
          format: 'css',
          dictionary,
          outputReferences: options.outputReferences,
        }) +
        `\n}\n`
      )
    },
  },
  shadow: {
    name: 'shadow',
    formatter: function (args) {
      const dictionary = Object.assign({}, args.dictionary)
      const options = Object.assign({ selector: ':host' }, args.options)

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
          return `--gds-shadow-${size}: ${shadowValue};`
        })
        .join('\n')

      return (
        formatHelpers.fileHeader({ file: args.file }) +
        `${options.selector} {\n` +
        combinedShadows +
        `\n}\n`
      )
    },
  },
  'figma/json': {
    name: 'json/figma',
    formatter: function ({ dictionary }) {
      return (
        '[\n  ' +
        dictionary.allTokens
          .map((token) => {
            return `${JSON.stringify({
              name: token.name,
              value: token.value,
              darkValue: token.darkValue,
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
    formatter: function (args) {
      const dictionary = Object.assign({}, args.dictionary)
      const options = Object.assign(
        { colorScheme: 'light', name: 'add-variables' },
        args.options,
      )

      const { colorScheme, name, outputReferences } = options

      if (colorScheme === 'dark') {
        // Override each token"s `value` with `darkValue`
        dictionary.allTokens = dictionary.allTokens.map((token) => {
          const { darkValue } = token
          // Only override if the token has a darkValue and that you"ve passed in colorScheme: "dark" in the file options.
          if (darkValue && colorScheme === 'dark') {
            return Object.assign({}, token, {
              value: token['darkValue'],
              //Also need to override the original value for outputReferences: false to work
              original: { value: token.original['darkValue'] },
            })
          } else {
            return token
          }
        })
      }

      // Use the built-in format but with our customized dictionary object
      // so it will output the darkValue instead of the value
      // return format[format]({ ...args, dictionary })
      return (
        formatHelpers.fileHeader({ file: args.file }) +
        `@mixin ${name} {\n` +
        formatHelpers.formattedVariables({
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
    formatter: function ({ options, file }) {
      const template = _template(
        fs.readFileSync(
          process.cwd() + '/libs/tokens/src/templates/ios/spm.package.template',
        ),
      )
      return template({ file, options, fileHeader })
    },
  },
  'green/ios-swift-class': {
    name: 'green/ios-swift-class',
    formatter: function ({ dictionary, options, file, platform }) {
      const template = _template(
        fs.readFileSync(
          process.cwd() +
            '/node_modules/style-dictionary/lib/common/templates/ios-swift/any.swift.template',
        ),
      )

      /**
       * Setting fallback for colorScheme to light
       */
      options = Object.assign({ colorScheme: 'light' }, options)

      let allTokens
      const { outputReferences } = options
      options = setSwiftFileProperties(
        options,
        'class',
        platform.transformGroup,
      )
      const formatProperty = createPropertyFormatter({
        outputReferences,
        dictionary,
        formatting: {
          suffix: '',
        },
      })

      if (outputReferences) {
        allTokens = [...dictionary.allTokens].sort(sortByReference(dictionary))
      } else {
        allTokens = [...dictionary.allTokens].sort(sortByName)
      }

      allTokens = useColorScheme(allTokens, options)

      return template({ allTokens, file, options, formatProperty, fileHeader })
    },
  },
  'green/ios-swift-class-tree': {
    name: 'green/ios-swift-class-tree',
    formatter: function ({ dictionary, options, file, platform }) {
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
      allTokens = useColorScheme(allTokens, options)

      let propertyFormatter
      if (options.colorType == 'uiKitDynamicProvider') {
        propertyFormatter = swift.uiKitColorReferencePropertyFormatter(
          options.lightModeObjectName,
          options.darkModeObjectName,
          options,
        )
      } else if (options.colorType == 'swiftUiReferenceToUiKit') {
        propertyFormatter = swift.swiftUiColorReferencePropertyFormatter(
          options.uiKitObjectName,
          options,
        )
      } else {
        const valueFormatter = createPropertyFormatter({
          outputReferences,
          dictionary,
          formatting: {
            suffix: '',
          },
        })
        propertyFormatter = swift.staticPropertyFormatter(
          options,
          valueFormatter,
        )
      }
      const tree = swift.treeFromTokens(allTokens, options.type)
      const fileContent = swift.fileContentFromTree(
        tree,
        options,
        file,
        propertyFormatter,
      )
      return fileContent
    },
  },
  'green/android-resources': {
    name: 'green/android-resources',
    formatter: function ({ dictionary, options, file }) {
      const template = _template(
        fs.readFileSync(
          process.cwd() +
            '/node_modules/style-dictionary/lib/common/templates/android/resources.template',
        ),
      )

      dictionary.allTokens = dictionary.allTokens.map((token) => {
        token.attributes.category = options.resourceType || 'string'

        return token
      })

      dictionary.allTokens = useColorScheme(dictionary.allTokens, options)

      return template({ dictionary, file, options, fileHeader })
    },
  },
}
export default formats
