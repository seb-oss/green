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
        // Handle direct color with alpha
        if (value.$value && value.alpha !== undefined) {
          return {
            value: value.$value,
            alpha: value.alpha * 100, // Convert to percentage
          }
        }

        // Handle theme variants
        if (value.light || value.dark) {
          return {
            light: value.light?.$value || value.light,
            dark: value.dark?.$value || value.dark,
            ...(value.alpha && { alpha: value.alpha * 100 }), // Convert to percentage
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

        if (value.$value) return value.$value
        return value
      }
      return value
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
              .map((token) => ({
                token: token.path[token.path.length - 1],
                variable: `var(--gds-sys-color-l1-${token.path[token.path.length - 1]})`,
                value: resolveTokenValue(token),
              })),
            L2: colorTokens
              .filter((token) => token.path[2] === 'L2')
              .map((token) => ({
                token: token.path[token.path.length - 1],
                variable: `var(--gds-sys-color-l2-${token.path[token.path.length - 1]})`,
                value: resolveTokenValue(token),
              })),
            L3: colorTokens
              .filter((token) => token.path[2] === 'L3')
              .map((token) => ({
                token: token.path[token.path.length - 1],
                variable: `var(--gds-sys-color-l3-${token.path[token.path.length - 1]})`,
                value: resolveTokenValue(token),
              })),
          },
          border: colorTokens
            .filter((token) => token.path[2] === 'border')
            .map((token) => ({
              token: token.path[token.path.length - 1],
              variable: `var(--gds-sys-color-border-${token.path[token.path.length - 1]})`,
              value: resolveTokenValue(token),
            })),
          state: colorTokens
            .filter((token) => token.path[2] === 'state')
            .map((token) => {
              const resolvedValue = resolveTokenValue(token)
              return {
                token: token.path[token.path.length - 1],
                variable: `var(--gds-sys-color-state-${token.path[token.path.length - 1]})`,
                value:
                  typeof resolvedValue === 'object'
                    ? {
                        value:
                          resolvedValue.value ||
                          resolvedValue.light ||
                          resolvedValue,
                        alpha:
                          resolvedValue.alpha !== undefined
                            ? `${resolvedValue.alpha}%`
                            : undefined,
                      }
                    : {
                        value: resolvedValue,
                      },
              }
            }),
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
            value: `${resolveTokenValue(token)}px`,
          })),
        radius: dimensionTokens
          .filter((token) => token.path[1] === 'radius')
          .map((token) => ({
            token: token.path[token.path.length - 1],
            variable: `var(--gds-sys-radius-${token.path[token.path.length - 1]})`,
            value: `${resolveTokenValue(token)}px`,
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
            value: `${resolveTokenValue(token)}px`,
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
