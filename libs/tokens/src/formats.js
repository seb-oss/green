import fs from 'fs'
import _ from 'lodash'
import {
  createPropertyFormatter,
  fileHeader,
  formattedVariables,
  setSwiftFileProperties,
  sortByName,
  sortByReference,
} from 'style-dictionary/utils'

import * as swift from './templates/ios/swift.tokens.js'

const formats = {
  'color/v2': {
    name: 'color/v2',
    format: async ({ dictionary, file, options }) => {
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
          let value = token.value
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
        fileHeader({ file: file }) +
        `color-scheme: ${options.colorScheme};\n` +
        cssVariables
      )
    },
  },
  size: {
    name: 'size',
    format: async ({ dictionary, file, options }) => {
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
        fileHeader({ file }) +
        `:host {\n` +
        formattedVariables({
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
    format: async ({ dictionary, file, options }) => {
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

      const header = await fileHeader({ file })

      return (
        header +
        `:host {\n` +
        formattedVariables({
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
    format: async ({ dictionary, file, options }) => {
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
            value: `${token.value / 16}rem`,
            original: { value: `${token.value / 16}rem` },
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
        fileHeader({ file }) +
        `:host {\n` +
        formattedVariables({
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
    format: async ({ dictionary, file }) => {
      // Define opacity values for each shadow size
      // TODO: Implement a better way to handle opacity values or get the colors from Figma tokens
      const opacityMap = {
        xs: [0.1, 0.1],
        s: [0.1, 0.06],
        m: [0.1, 0.06],
        l: [0.08, 0.03],
        xl: [0.08, 0.03],
      }

      // Helper  to convert hex to rgb=> a
      const hexToRgba = (hex, opacity) => {
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

      const header = await fileHeader({ file })

      return header + `:host {\n` + combinedShadows + `\n}\n`
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
        fs.readFileSync(
          process.cwd() + '/src/templates/ios/spm.package.template',
        ),
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
