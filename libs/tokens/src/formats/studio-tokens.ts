// studio-tokens.ts

export default {
  name: 'json/studio-tokens',
  format: function ({ dictionary }) {
    // Helper to get theme from file path
    const getTheme = (filePath: string) => {
      if (filePath.includes('.dark.')) return 'dark'
      if (filePath.includes('.light.')) return 'light'
      return 'base'
    }

    // First, collect all tokens with their light/dark values
    const tokenMap = new Map()

    dictionary.allTokens.forEach((token) => {
      const path = token.path
      const theme = getTheme(token.filePath)
      const tokenKey = path.join('.')

      if (!tokenMap.has(tokenKey)) {
        tokenMap.set(tokenKey, {
          token: path[path.length - 1],
          variable: `var(--gds-${token.name})`,
          path,
          value: {
            light: undefined,
            dark: undefined,
          },
        })
      }

      const tokenData = tokenMap.get(tokenKey)
      if (theme === 'light') {
        tokenData.value.light = token.$value
      } else if (theme === 'dark') {
        tokenData.value.dark = token.$value
      }
    })

    // Helper to group tokens by category
    const groupTokensByCategory = (tokens) => {
      const grouped = {
        colors: {
          background: {
            L1: [],
            L2: [],
            L3: [],
          },
          border: [],
          content: [],
          state: [],
        },
        typography: [],
        spacing: [],
        radius: [],
        shadows: [],
        viewport: [],
        motion: [],
      }

      tokens.forEach((token) => {
        const [sys, category, subCategory, ...rest] = token.path

        if (sys === 'sys') {
          const tokenData = {
            token: token.token,
            variable: token.variable,
            value: token.value,
          }

          if (category === 'color') {
            if (['L1', 'L2', 'L3'].includes(subCategory)) {
              grouped.colors.background[subCategory].push(tokenData)
            } else if (subCategory === 'border') {
              grouped.colors.border.push(tokenData)
            } else if (subCategory === 'content') {
              grouped.colors.content.push(tokenData)
            } else if (subCategory === 'state') {
              grouped.colors.state.push(tokenData)
            }
          } else if (category === 'text') {
            grouped.typography.push(tokenData)
          } else if (category === 'space') {
            grouped.spacing.push(tokenData)
          } else if (category === 'radius') {
            grouped.radius.push(tokenData)
          } else if (category === 'shadow') {
            grouped.shadows.push(tokenData)
          } else if (category === 'viewport') {
            grouped.viewport.push(tokenData)
          } else if (category === 'motion') {
            grouped.motion.push(tokenData)
          }
        }
      })

      return grouped
    }

    const output = {
      $metadata: {
        tokenSetOrder: [
          'colors',
          'typography',
          'spacing',
          'radius',
          'shadows',
          'viewport',
          'motion',
        ],
      },
      tokens: groupTokensByCategory(Array.from(tokenMap.values())),
    }

    return JSON.stringify(output, null, 2)
  },
}
