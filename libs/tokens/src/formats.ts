import { formatHelpers, Format } from 'style-dictionary'

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
  tokens: {
    name: 'tokens',
    formatter: function (args) {
      const dictionary = Object.assign({}, args.dictionary)
      const options = Object.assign({ selector: ':root' }, args.options)
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
    formatter: function ({ dictionary, options }) {
      dictionary.allTokens.map((token) => {
        if (dictionary.usesReference(token.original.value)) {
          const refs = dictionary.getReferences(token.original.value)
          if (options.outputReferences) {
            refs.forEach((ref) => {
              token.value = {
                type: 'VARIABLE_ALIAS',
                id: ref?.attributes?.['figma'].id,
              }
              if (token.attributes) {
                token.attributes['figma'].originalLightId =
                  ref?.attributes?.['figma'].id

                if (ref.path) {
                  token.attributes['figma'].originalLightName = ref.path
                    .slice(1, ref.path.length)
                    .join('/')
                }
              }
            })

            if (token['darkValue']) {
              const darkRefs = dictionary.getReferences(
                token.original['darkValue']
              )
              darkRefs.forEach((ref) => {
                token['darkValue'] = {
                  type: 'VARIABLE_ALIAS',
                  id: ref?.attributes?.['figma'].id,
                }
                if (token?.attributes?.['figma']) {
                  token.attributes['figma'].originalDarkId =
                    ref?.attributes?.['figma'].id

                  if (ref.path) {
                    token.attributes['figma'].originalDarkName = ref.path
                      .slice(1, ref.path.length)
                      .join('/')
                  }
                }
              })
            }
          }
          refs.forEach((ref) => {
            if (token?.attributes?.['figma']) {
              token.attributes['figma'].resolvedType =
                ref?.attributes?.['figma'].resolvedType
              token.attributes['figma'].originalId =
                ref?.attributes?.['figma'].id

              token.attributes['figma'].alias = true
            }
          })
        }
      })
      return JSON.stringify(dictionary.tokens, null, 2) + '\n'
    },
  },
}
export default formats
