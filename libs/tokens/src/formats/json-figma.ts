import tinycolor from 'tinycolor2'

const figmaJson = {
  name: 'json/figma',
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

    shadowTokens.map((token) => {
      const { $value, ...rest } = token
      const value = $value || token.value

      Object.keys(value).forEach((key) => {
        const newToken = {
          ...rest,
          value: value[key].value || value[key].hex || value[key],
          name: `${token.name}-${key}`,
          $type: tinycolor(
            value[key].value || value[key].hex || value[key],
          ).isValid()
            ? 'color'
            : 'float',
        }
        newDictionary.push(newToken)
      })
    })

    typographyTokens.map((token) => {
      const { $value, ...rest } = token
      const value = $value || token.value

      Object.keys(value).forEach((key) => {
        if (key !== 'fontFamily') {
          const newToken = {
            ...rest,
            value: value[key].value || value[key].hex || value[key],
            name: `${token.name}-${key}`,
            $type: typeof value[key] === 'number' ? 'float' : 'string',
          }
          newDictionary.push(newToken)
        }
      })
    })

    const mapToFigmaType = (type) => {
      switch (type) {
        case 'dimension':
          return 'FLOAT'
        default:
          return type
      }
    }

    return (
      '[\n  ' +
      newDictionary
        .map((token) => {
          return JSON.stringify({
            name: token.name.replace('color/', ''),
            value: token.$value !== undefined ? token.$value : token.value,
            type: mapToFigmaType(token.$type || token.type),
          })
        })
        .join(',\n  ') +
      '\n]\n'
    )
  },
}

export default figmaJson
