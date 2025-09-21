// src/formats/json-studio.ts
import tinycolor from 'tinycolor2'

const jsonStudio = {
  name: 'json/studio',
  format: async ({ dictionary }) => {
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

    // Process typography tokens by groups
    const typographyGroups = typographyTokens.reduce((acc, token) => {
      const name = token.path[token.path.length - 1]
      const value = token.$value || token.value
      const type = name.split('-')[0]

      if (!acc[type]) {
        acc[type] = {}
      }

      acc[type][name] = {
        'font-weight': value.fontWeight.toString(),
        'font-size': `${value.fontSize}px`,
        'line-height': `${value.lineHeight}px`,
      }

      return acc
    }, {})

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

    // Merge typography groups into the final output
    return JSON.stringify(
      { ...groupedTokens, typography: typographyGroups },
      null,
      2,
    )
  },
}

export default jsonStudio
