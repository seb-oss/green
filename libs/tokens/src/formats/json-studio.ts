// src/formats/studio-tokens.ts

interface TokenInterface {
  path: string[]
  name: string
  value: any
  $value?: any
  $type?: string
  type?: string
  original: {
    value: any
  }
}

interface Dictionary {
  allTokens: TokenInterface[]
}

export default {
  name: 'json/studio',
  format: function ({ dictionary }) {
    // First, separate tokens by type like Figma does
    const shadowTokens = dictionary.allTokens.filter((token) => {
      return token.$type === 'shadow' || token.type === 'shadow'
    })

    const typographyTokens = dictionary.allTokens.filter((token) => {
      return token.$type === 'typography' || token.type === 'typography'
    })

    const colorTokens = dictionary.allTokens.filter((token) => {
      return token.path[1] === 'color'
    })

    const dimensionTokens = dictionary.allTokens.filter((token) => {
      return ['space', 'radius', 'viewport'].includes(token.path[1])
    })

    const motionTokens = dictionary.allTokens.filter((token) => {
      return token.path[1] === 'motion'
    })

    // Helper function to resolve token values
    const resolveTokenValue = (token: TokenInterface) => {
      const value = token.$value || token.value || token.original.value

      if (typeof value === 'object' && value !== null) {
        // Handle color with alpha
        if (value.$value) {
          const baseColor = value.$value
          const alpha =
            value.alpha !== undefined ? value.alpha * 100 : undefined
          return {
            light: {
              value: baseColor,
              ...(alpha !== undefined && { alpha: `${alpha}%` }),
            },
            dark: {
              value: baseColor,
              ...(alpha !== undefined && { alpha: `${alpha}%` }),
            },
          }
        }

        // Handle existing light/dark variants
        if (value.light || value.dark) {
          return {
            light: {
              value: value.light?.$value || value.light,
              ...(value.alpha !== undefined && {
                alpha: `${value.alpha * 100}%`,
              }),
            },
            dark: {
              value: value.dark?.$value || value.dark,
              ...(value.alpha !== undefined && {
                alpha: `${value.alpha * 100}%`,
              }),
            },
          }
        }

        // Handle typography object
        if (value.$type === 'typography') {
          return {
            fontFamily: value.fontFamily,
            fontSize: value.fontSize,
            lineHeight: value.lineHeight,
            fontWeight: value.fontWeight,
          }
        }

        return value
      }
      return value
    }

    const createColorToken = (token: TokenInterface) => {
      const resolvedValue = resolveTokenValue(token)
      return {
        token: token.path[token.path.length - 1],
        variable: `var(--gds-sys-color-${token.path[2].toLowerCase()}-${token.path[token.path.length - 1]})`,
        value: {
          light: resolvedValue.light || { value: resolvedValue },
          dark: resolvedValue.dark || { value: resolvedValue },
        },
      }
    }

    // Process tokens according to your schema
    const processedTokens = {
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
      tokens: {
        colors: {
          background: {
            L1: colorTokens
              .filter((token) => token.path[2] === 'L1')
              .map(createColorToken),
            L2: colorTokens
              .filter((token) => token.path[2] === 'L2')
              .map(createColorToken),
            L3: colorTokens
              .filter((token) => token.path[2] === 'L3')
              .map(createColorToken),
          },
          border: colorTokens
            .filter((token) => token.path[2] === 'border')
            .map(createColorToken),
          state: colorTokens
            .filter((token) => token.path[2] === 'state')
            .map(createColorToken),
        },
        typography: typographyTokens.map((token) => {
          const resolvedValue = resolveTokenValue(token)
          return {
            token: token.path[token.path.length - 1],
            variable: `var(--gds-sys-text-${token.path[token.path.length - 1]})`,
            value: {
              fontFamily: resolvedValue.fontFamily,
              fontSize: resolvedValue.fontSize
                ? `${resolvedValue.fontSize}px`
                : undefined,
              lineHeight: resolvedValue.lineHeight
                ? `${resolvedValue.lineHeight}px`
                : undefined,
              fontWeight: resolvedValue.fontWeight,
            },
          }
        }),
        spacing: dimensionTokens
          .filter((token) => token.path[1] === 'space')
          .map((token) => ({
            token: token.path[token.path.length - 1],
            variable: `var(--gds-sys-space-${token.path[token.path.length - 1]})`,
            value: `${resolveTokenValue(token)}`,
          })),
        radius: dimensionTokens
          .filter((token) => token.path[1] === 'radius')
          .map((token) => ({
            token: token.path[token.path.length - 1],
            variable: `var(--gds-sys-radius-${token.path[token.path.length - 1]})`,
            value: `${resolveTokenValue(token)}`,
          })),
        shadows: shadowTokens.map((token) => ({
          token: token.path[token.path.length - 1],
          variable: `var(--gds-sys-shadow-${token.path[token.path.length - 1]})`,
          value: resolveTokenValue(token),
        })),
        viewport: dimensionTokens
          .filter((token) => token.path[1] === 'viewport')
          .map((token) => ({
            token: token.path[token.path.length - 1],
            variable: `var(--gds-sys-viewport-${token.path[token.path.length - 1]})`,
            value: `${resolveTokenValue(token)}`,
          })),
        motion: {
          duration: motionTokens
            .filter((token) => token.path[2] === 'duration')
            .map((token) => ({
              token: token.path[token.path.length - 1],
              variable: `var(--gds-sys-motion-duration-${token.path[token.path.length - 1]})`,
              value: resolveTokenValue(token),
            })),
          easing: motionTokens
            .filter((token) => token.path[2] === 'easing')
            .map((token) => ({
              token: token.path[token.path.length - 1],
              variable: `var(--gds-sys-motion-easing-${token.path[token.path.length - 1]})`,
              value: `cubic-bezier(${resolveTokenValue(token)})`,
            })),
        },
      },
    }

    // Debug logging
    if (process.env.DEBUG) {
      console.log('Tokens Debug:', {
        typography: typographyTokens.map((t) => ({
          path: t.path,
          original: t.original.value,
          resolved: resolveTokenValue(t),
        })),
      })
    }

    return JSON.stringify(processedTokens, null, 2)
  },
}
