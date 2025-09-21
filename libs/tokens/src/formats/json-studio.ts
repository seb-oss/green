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
          name: token.path[token.path.length - 1],
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
            name: token.path[token.path.length - 1],
            $type: typeof value[key] === 'number' ? 'float' : 'string',
          }
          newDictionary.push(newToken)
        }
      })
    })

    // Group tokens by category
    const groupedTokens = newDictionary.reduce((acc, token) => {
      const category = token.path[2]

      if (['L1', 'L2', 'L3'].includes(category)) {
        if (!acc.background) {
          acc.background = { L1: [], L2: [], L3: [] }
        }
        acc.background[category].push({
          name: token.path[token.path.length - 1],
          value: token.$value !== undefined ? token.$value : token.value,
        })
      } else {
        if (!acc[category]) {
          acc[category] = []
        }
        acc[category].push({
          name: token.path[token.path.length - 1],
          value: token.$value !== undefined ? token.$value : token.value,
        })
      }

      return acc
    }, {})

    return JSON.stringify(groupedTokens, null, 2)
  },
}

export default jsonStudio
