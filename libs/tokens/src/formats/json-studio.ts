// src/formats/json-studio.ts
import tinycolor from 'tinycolor2'

const jsonStudio = {
  name: 'json/studio',
  format: async ({ dictionary }) => {
    // Collect all tokens
    const shadowTokens = dictionary.allTokens.filter((token) => {
      return token.$type === 'shadow' || token.type === 'shadow'
    })

    const typographyTokens = dictionary.allTokens.filter((token) => {
      return token.$type === 'typography' || token.type === 'typography'
    })

    const newDictionary = dictionary.allTokens.filter((token) => {
      return !['shadow', 'typography'].includes(token.$type || token.type)
    })

    // Process shadow tokens
    shadowTokens.map((token) => {
      const { $value, ...rest } = token
      const value = $value || token.value

      Object.keys(value).forEach((key) => {
        const newToken = {
          ...rest,
          value: value[key].value || value[key].hex || value[key],
          name: `${token.path[2]}/${token.path[token.path.length - 1]}`,
          $type: tinycolor(
            value[key].value || value[key].hex || value[key],
          ).isValid()
            ? 'color'
            : 'float',
        }
        newDictionary.push(newToken)
      })
    })

    // Process typography tokens
    typographyTokens.map((token) => {
      const { $value, ...rest } = token
      const value = $value || token.value

      Object.keys(value).forEach((key) => {
        if (key !== 'fontFamily') {
          const newToken = {
            ...rest,
            value: value[key].value || value[key].hex || value[key],
            name: `${token.path[2]}/${token.path[token.path.length - 1]}`,
            $type: typeof value[key] === 'number' ? 'float' : 'string',
          }
          newDictionary.push(newToken)
        }
      })
    })

    // Process all tokens with additional properties
    const processedTokens = newDictionary.map((token) => {
      const pathParts = token.path
      const category = pathParts[2]
      const level = ['L1', 'L2', 'L3'].includes(category) ? category : undefined

      return {
        name: token.name.replace('color/', ''),
        value: token.$value !== undefined ? token.$value : token.value,
        collection: 'colors',
        category: level ? 'background' : category,
        ...(level && { level }),
      }
    })

    return JSON.stringify(processedTokens, null, 2)
  },
}

export default jsonStudio
