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
          token: token.path[token.path.length - 1],
          value: value[key].value || value[key].hex || value[key],
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
        token: name,
        variable: `var(--gds-sys-text-${name})`,
        'font-weight': value.fontWeight.toString(),
        'font-size': `${value.fontSize}px`,
        'line-height': `${value.lineHeight}px`,
      }

      return acc
    }, {})

    // Helper function to process pixel values
    const processValue = (token) => {
      const value = token.$value !== undefined ? token.$value : token.value
      const tokenPath = token.path.join('.')

      // Check if token is a viewport token
      if (tokenPath.includes('viewport')) {
        return typeof value === 'number' || !isNaN(value) ? `${value}px` : value
      }

      // Handle other pixel-based tokens (spacing, radius)
      const shouldAddPx =
        token.path[1] === 'space' || token.path[1] === 'radius'
      return shouldAddPx && typeof value === 'number' ? `${value}px` : value
    }

    // Group tokens by category
    const groupedTokens = newDictionary.reduce((acc, token) => {
      const category = token.path[2]

      if (['L1', 'L2', 'L3'].includes(category)) {
        if (!acc.background) {
          acc.background = { L1: [], L2: [], L3: [] }
        }
        acc.background[category].push({
          token: token.path[token.path.length - 1],
          value: processValue(token),
        })
      } else {
        const tokenCategory =
          token.path[1] === 'viewport' ? token.path[1] : category
        if (!acc[tokenCategory]) {
          acc[tokenCategory] = []
        }
        acc[tokenCategory].push({
          token: token.path[token.path.length - 1],
          value: processValue(token),
        })
      }

      return acc
    }, {})

    // Return final JSON with typography only if it has content
    return JSON.stringify(
      {
        ...groupedTokens,
        ...(Object.keys(typographyGroups).length > 0
          ? { typography: typographyGroups }
          : {}),
      },
      null,
      2,
    )
  },
}

export default jsonStudio
