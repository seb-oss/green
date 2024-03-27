import { Format, formatHelpers } from 'style-dictionary'

const formats: Record<string, Format> = {
  'css/theme': {
    name: 'css/theme',
    formatter: function (args) {
      const dictionary = Object.assign({}, args.dictionary)
      const options = Object.assign(
        { colorScheme: 'light', selector: ':root' },
        args.options
      )
      // Override each token"s `value` with `darkValue`
      dictionary.allTokens = dictionary.allTokens.map((token) => {
        const { darkValue } = token
        // Only override if the token has a darkValue and that you"ve passed in colorScheme: "dark" in the file options.
        if (darkValue && options.colorScheme === 'dark') {
          return Object.assign({}, token, {
            value: token['darkValue'],
            //Also need to override the original value for outputReferences: false to work
            original: { value: token.original['darkValue'] },
          })
        } else {
          return token
        }
      })

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
        args.options
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
}
export default formats
