export default {
  name: 'json/studio-tokens',
  format: function ({ dictionary }) {
    const getTheme = (filePath: string) => {
      if (filePath.includes('.dark.')) return 'dark'
      if (filePath.includes('.light.')) return 'light'
      if (filePath.includes('.ref.')) return 'ref'
      return 'base'
    }

    const tokenMap = new Map()

    // Process reference tokens first
    dictionary.allTokens
      .filter((token) => getTheme(token.filePath) === 'ref')
      .forEach((token) => {
        const path = token.path
        const tokenKey = path.join('.')

        tokenMap.set(tokenKey, {
          token: path[path.length - 1],
          variable: `var(--gds-${token.name})`,
          path,
          value: token.$value,
          isReference: true,
        })
      })

    // Process theme tokens
    dictionary.allTokens
      .filter((token) => ['light', 'dark'].includes(getTheme(token.filePath)))
      .forEach((token) => {
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
            isReference: false,
          })
        }

        const tokenData = tokenMap.get(tokenKey)
        if (!tokenData.isReference) {
          tokenData.value[theme] = token.$value
        }
      })

    // Ensure both light and dark values exist
    tokenMap.forEach((token) => {
      if (!token.isReference) {
        if (!token.value.light) token.value.light = token.value.dark
        if (!token.value.dark) token.value.dark = token.value.light
      }
    })

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
        const [category, type, subCategory, ...rest] = token.path
        const tokenData = {
          token: token.token,
          variable: token.variable,
          value: token.value,
        }

        if (category === 'sys') {
          if (type === 'color') {
            if (['L1', 'L2', 'L3'].includes(subCategory)) {
              grouped.colors.background[subCategory].push(tokenData)
            } else if (subCategory === 'border') {
              grouped.colors.border.push(tokenData)
            } else if (subCategory === 'content') {
              grouped.colors.content.push(tokenData)
            } else if (subCategory === 'state') {
              grouped.colors.state.push(tokenData)
            }
          } else {
            switch (type) {
              case 'text':
                grouped.typography.push(tokenData)
                break
              case 'space':
                grouped.spacing.push(tokenData)
                break
              case 'radius':
                grouped.radius.push(tokenData)
                break
              case 'shadow':
                grouped.shadows.push(tokenData)
                break
              case 'viewport':
                grouped.viewport.push(tokenData)
                break
              case 'motion':
                grouped.motion.push(tokenData)
                break
            }
          }
        }
      })

      // Clean up empty arrays
      Object.keys(grouped).forEach((key) => {
        if (Array.isArray(grouped[key]) && grouped[key].length === 0) {
          delete grouped[key]
        } else if (typeof grouped[key] === 'object') {
          Object.keys(grouped[key]).forEach((subKey) => {
            if (
              Array.isArray(grouped[key][subKey]) &&
              grouped[key][subKey].length === 0
            ) {
              delete grouped[key][subKey]
            }
          })
          if (Object.keys(grouped[key]).length === 0) {
            delete grouped[key]
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
