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

    const viewportTokens = dictionary.allTokens.filter((token) => {
      return token.path[1] === 'viewport' && !token.path.includes('ref')
    })

    const spacingTokens = dictionary.allTokens.filter((token) => {
      return token.path[1] === 'space' && !token.path.includes('ref')
    })

    const radiusTokens = dictionary.allTokens.filter((token) => {
      return token.path[1] === 'radius' && !token.path.includes('ref')
    })

    // const newDictionary = dictionary.allTokens.filter((token) => {
    //   return (
    //     !['shadow', 'typography'].includes(token.$type || token.type) &&
    //     !['viewport', 'space', 'radius'].includes(token.path[1])
    //   )
    // })

    const newDictionary = dictionary.allTokens.filter((token) => {
      return (
        !['shadow', 'typography'].includes(token.$type || token.type) &&
        !['viewport', 'space', 'radius'].includes(token.path[1]) &&
        !token.path[1].includes('shadow') // Add this condition
      )
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

    // Process shadow tokens
    const shadowGroups = shadowTokens.reduce((acc, token) => {
      const tokenName = token.path[token.path.length - 1]
      const size = tokenName.split('-')[0] // This will get 's', 'm', 'l', 'xl'

      if (!acc.shadows) {
        acc.shadows = {}
      }

      acc.shadows[size] = {
        token: size,
        variable: `var(--gds-sys-shadow-${size}-01), var(--gds-sys-shadow-${size}-02)`,
      }

      return acc
    }, {})

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

    // Process viewport tokens
    const viewportGroups = viewportTokens.reduce((acc, token) => {
      const name = token.path[token.path.length - 1]
      const value = token.$value !== undefined ? token.$value : token.value

      if (!acc.viewport) {
        acc.viewport = {}
      }

      acc.viewport[name] = {
        token: name,
        variable: `var(--gds-sys-viewport-${name})`,
        value: `${value}px`,
      }

      return acc
    }, {})

    // Process spacing tokens
    const spacingGroups = spacingTokens.reduce((acc, token) => {
      const name = token.path[token.path.length - 1]
      const value = token.$value !== undefined ? token.$value : token.value

      if (!acc.spacing) {
        acc.spacing = {}
      }

      acc.spacing[name] = {
        token: name,
        variable: `var(--gds-sys-space-${name})`,
        value: `${value}`,
      }

      return acc
    }, {})

    // Process radius tokens
    const radiusGroups = radiusTokens.reduce((acc, token) => {
      const name = token.path[token.path.length - 1]
      const value = token.$value !== undefined ? token.$value : token.value

      if (!acc.radius) {
        acc.radius = {}
      }

      acc.radius[name] = {
        token: name,
        variable: `var(--gds-sys-radius-${name})`,
        value: `${value}`,
      }

      return acc
    }, {})

    // Group other tokens by category
    const groupedTokens = newDictionary.reduce((acc, token) => {
      if (token.path.some((p) => p.includes('shadow'))) {
        return acc
      }

      const category = token.path[2]

      if (['L1', 'L2', 'L3'].includes(category)) {
        if (!acc.background) {
          acc.background = { L1: [], L2: [], L3: [] }
        }
        acc.background[category].push({
          token: token.path[token.path.length - 1],
          variable: `var(--gds-sys-color-${token.path[token.path.length - 2].toLowerCase()}-${token.path[token.path.length - 1]})`,
          value: token.$value !== undefined ? token.$value : token.value,
        })
      } else {
        if (!acc[category]) {
          acc[category] = []
        }
        acc[category].push({
          token: token.path[token.path.length - 1],
          variable: `var(--gds-sys-color-${category}-${token.path[token.path.length - 1]})`,
          value: token.$value !== undefined ? token.$value : token.value,
        })
      }

      return acc
    }, {})

    // Return final JSON with properly structured groups
    return JSON.stringify(
      {
        ...shadowGroups,
        ...groupedTokens,
        ...viewportGroups,
        ...spacingGroups,
        ...radiusGroups,
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
