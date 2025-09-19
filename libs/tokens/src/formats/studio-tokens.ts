// src/formats/studio-tokens.ts

export default {
  name: 'json/studio-tokens',
  format: function ({ dictionary }) {
    // Helper function to get resolved value
    const getResolvedValue = (token) => {
      if (!token.original.value) return undefined

      // If it's a direct value
      if (token.original.value.$value) {
        return token.original.value.$value
      }

      // If it's a reference
      if (typeof token.value === 'string') {
        return token.value
      }

      return token.original.value
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
      tokens: {
        colors: {
          background: {
            L1: [],
            L2: [],
            L3: [],
          },
          border: [],
          state: dictionary.allTokens
            .filter(
              (token) =>
                (token.path[0] === 'sys' || token.path[0] === 'ref') &&
                token.path[1] === 'color' &&
                token.path[2] === 'state',
            )
            .map((token) => ({
              token: token.path[token.path.length - 1],
              variable: `var(--gds-sys-color-state-${token.path[token.path.length - 1]})`,
              value: {
                light: getResolvedValue(token),
                dark: getResolvedValue(token),
                alpha: token.original.value?.alpha || '',
              },
            })),
        },
        typography: dictionary.allTokens
          .filter(
            (token) =>
              token.path[0] === 'sys' &&
              token.path[1] === 'text' &&
              token.original.value?.$type === 'typography',
          )
          .map((token) => ({
            token: token.path[token.path.length - 1],
            variable: `var(--gds-sys-text-${token.path[token.path.length - 1]})`,
            value: {
              fontFamily: getResolvedValue(token)?.fontFamily,
              fontSize: `${getResolvedValue(token)?.fontSize}px`,
              lineHeight: `${getResolvedValue(token)?.lineHeight}px`,
              fontWeight: getResolvedValue(token)?.fontWeight,
            },
          })),
        spacing: dictionary.allTokens
          .filter(
            (token) =>
              (token.path[0] === 'sys' || token.path[0] === 'ref') &&
              token.path[1] === 'space',
          )
          .map((token) => ({
            token: token.path[token.path.length - 1],
            variable: `var(--gds-sys-space-${token.path[token.path.length - 1]})`,
            value: `${getResolvedValue(token)}px`,
          })),
        radius: dictionary.allTokens
          .filter(
            (token) =>
              (token.path[0] === 'sys' || token.path[0] === 'ref') &&
              token.path[1] === 'radius',
          )
          .map((token) => ({
            token: token.path[token.path.length - 1],
            variable: `var(--gds-sys-radius-${token.path[token.path.length - 1]})`,
            value: `${getResolvedValue(token)}px`,
          })),
        shadows: dictionary.allTokens
          .filter(
            (token) => token.path[0] === 'sys' && token.path[1] === 'shadow',
          )
          .map((token) => ({
            token: token.path[token.path.length - 1],
            variable: `var(--gds-sys-shadow-${token.path[token.path.length - 1]})`,
            value: getResolvedValue(token),
          })),
        viewport: dictionary.allTokens
          .filter(
            (token) => token.path[0] === 'sys' && token.path[1] === 'viewport',
          )
          .map((token) => ({
            token: token.path[token.path.length - 1],
            variable: `var(--gds-sys-viewport-${token.path[token.path.length - 1]})`,
            value: `${getResolvedValue(token)}px`,
          })),
        motion: {
          duration: dictionary.allTokens
            .filter(
              (token) =>
                token.path[0] === 'sys' &&
                token.path[1] === 'motion' &&
                token.path[2] === 'duration',
            )
            .map((token) => ({
              token: token.path[token.path.length - 1],
              variable: `var(--gds-sys-motion-duration-${token.path[token.path.length - 1]})`,
              value: getResolvedValue(token),
            })),
          easing: dictionary.allTokens
            .filter(
              (token) =>
                token.path[0] === 'sys' &&
                token.path[1] === 'motion' &&
                token.path[2] === 'easing',
            )
            .map((token) => ({
              token: token.path[token.path.length - 1],
              variable: `var(--gds-sys-motion-easing-${token.path[token.path.length - 1]})`,
              value: `cubic-bezier(${getResolvedValue(token)})`,
            })),
        },
      },
    }

    // Debug logging
    console.log(
      'Processing tokens:',
      dictionary.allTokens.map((token) => ({
        path: token.path,
        value: token.original.value,
        resolved: getResolvedValue(token),
      })),
    )

    return JSON.stringify(output, null, 2)
  },
}
