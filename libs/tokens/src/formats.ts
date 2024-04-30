import * as fs from 'fs'
import * as _template from 'lodash.template'
import {
  Format,
  Options,
  TransformedToken,
  formatHelpers,
} from 'style-dictionary'

console.log(_template)

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
  size: {
    name: 'size',
    formatter: function (args) {
      const dictionary = Object.assign({}, args.dictionary)
      const options = Object.assign({ selector: ':host' }, args.options)

      // Map each token
      dictionary.allTokens = dictionary.allTokens.map((token) => {
        // If the token path starts with 'ref.size' or 'sys.grid.width', convert it to pixels
        if (
          (token.path[0] === 'ref' && token.path[1] === 'size') ||
          (token.path[0] === 'sys' &&
            token.path[1] === 'grid' &&
            token.path[2] === 'width') ||
          (token.path[0] === 'sys' &&
            token.path[1] === 'typography' &&
            token.path[2] === 'size') ||
          (token.path[0] === 'sys' &&
            token.path[1] === 'typography' &&
            token.path[2] === 'line-height')
        ) {
          return Object.assign({}, token, {
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
        console.log(options.resourceType)

        return token
      })

      dictionary.allTokens = useColorScheme(dictionary.allTokens, options)

      return template({ dictionary, file, options, fileHeader })
    },
  },
}
export default formats
