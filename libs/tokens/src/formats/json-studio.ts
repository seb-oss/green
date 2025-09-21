// src/formats/json-studio.ts
import tinycolor from 'tinycolor2'

const jsonStudio = {
  name: 'json/studio',
  format: async ({ dictionary, file }) => {
    const filterType = file.filter || 'is-color-no-ref'

    switch (filterType) {
      case 'is-radius': {
        const radiusTokens = dictionary.allTokens.filter(
          (token) => token.path[1] === 'radius',
        )

        return (
          '[\n  ' +
          radiusTokens
            .map((token) => {
              return JSON.stringify({
                name: token.path[token.path.length - 1],
                value: token.value,
                type: 'FLOAT',
              })
            })
            .join(',\n  ') +
          '\n]\n'
        )
      }

      case 'is-spacing': {
        const spacingTokens = dictionary.allTokens.filter(
          (token) => token.path[1] === 'space',
        )

        return (
          '[\n  ' +
          spacingTokens
            .map((token) => {
              return JSON.stringify({
                name: token.path[token.path.length - 1],
                value: token.value,
                type: 'FLOAT',
              })
            })
            .join(',\n  ') +
          '\n]\n'
        )
      }

      case 'is-viewport': {
        const viewportTokens = dictionary.allTokens.filter(
          (token) => token.path[1] === 'viewport',
        )

        return (
          '[\n  ' +
          viewportTokens
            .map((token) => {
              return JSON.stringify({
                name: token.path[token.path.length - 1],
                value: token.value,
                type: 'FLOAT',
              })
            })
            .join(',\n  ') +
          '\n]\n'
        )
      }
    }

    // Collect all tokens
    const shadowTokens = dictionary.allTokens.filter((token) => {
      return token.$type === 'shadow' || token.type === 'shadow'
    })

    const typographyTokens = dictionary.allTokens.filter((token) => {
      return token.$type === 'typography' || token.type === 'typography'
    })

    // Start with all tokens and filter out what we process separately
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
          name: `${token.name}-${key}`,
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
            name: `${token.name}-${key}`,
          }
          newDictionary.push(newToken)
        }
      })
    })

    // Add viewport tokens
    dictionary.allTokens
      .filter((token) => token.path[1] === 'viewport')
      .forEach((token) => {
        newDictionary.push({
          ...token,
          name: `viewport-${token.path[token.path.length - 1]}`,
          value: token.value,
        })
      })

    // Add motion tokens
    dictionary.allTokens
      .filter((token) => token.path[1] === 'motion')
      .forEach((token) => {
        const isEasing = token.path[2] === 'easing'
        newDictionary.push({
          ...token,
          name: `${token.path[2]}-${token.path[token.path.length - 1]}`,
          value: isEasing ? token.value : token.value,
        })
      })

    return (
      '[\n  ' +
      newDictionary
        .map((token) => {
          return JSON.stringify({
            name: token.name.replace('color/', ''),
            value: token.$value !== undefined ? token.$value : token.value,
          })
        })
        .join(',\n  ') +
      '\n]\n'
    )
  },
}

export default jsonStudio
