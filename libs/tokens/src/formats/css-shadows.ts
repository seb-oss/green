import { fileHeader, formattedVariables } from 'style-dictionary/utils'

const cssOnlyVariables = {
  name: 'css/shadows',
  format: async function (args) {
    const dictionary = Object.assign({}, args.dictionary)

    // Define opacity values for each shadow size
    // TODO: Implement a better way to handle opacity values or get the colors from Figma tokens
    const opacityMap = {
      xs: [0.1, 0.1],
      s: [0.1, 0.06],
      m: [0.1, 0.06],
      l: [0.08, 0.03],
      xl: [0.08, 0.03],
    }

    // Helper function to convert hex to rgba
    function hexToRgba(hex, opacity) {
      const bigint = parseInt(hex.slice(1), 16)
      const r = (bigint >> 16) & 255
      const g = (bigint >> 8) & 255
      const b = bigint & 255
      return `rgba(${r}, ${g}, ${b}, ${opacity})`
    }

    // Group shadow properties by size
    const shadowGroups = dictionary.allTokens.reduce((acc, token) => {
      if (token.path[0] === 'sys' && token.path[1] === 'shadow') {
        const size = token.path[2].split('-')[0]
        if (!acc[size]) acc[size] = {}
        acc[size][token.path.slice(2).join('-')] = token.value
      }
      return acc
    }, {})

    // Create combined shadow variables
    const combinedShadows = Object.entries(shadowGroups)
      .map(([size, props]) => {
        const offsetX1 = props[`${size}-offset-x-1`] || 0
        const offsetY1 = props[`${size}-offset-y-1`] || 0
        const blur1 = props[`${size}-blur-1`] || 0
        const spread1 = props[`${size}-spread-1`] || 0
        const color1 = hexToRgba(
          props[`${size}-color-1`] || '#000000',
          opacityMap[size][0],
        )
        const offsetX2 = props[`${size}-offset-x-2`] || 0
        const offsetY2 = props[`${size}-offset-y-2`] || 0
        const blur2 = props[`${size}-blur-2`] || 0
        const spread2 = props[`${size}-spread-2`] || 0
        const color2 = hexToRgba(
          props[`${size}-color-2`] || '#000000',
          opacityMap[size][1],
        )

        const shadowValue = `${offsetX1}px ${offsetY1}px ${blur1}px ${spread1}px ${color1}, ${offsetX2}px ${offsetY2}px ${blur2}px ${spread2}px ${color2}`
        return `--gds-sys-shadow-${size}: ${shadowValue};`
      })
      .join('\n')

    return (await fileHeader({ file: args.file })) + combinedShadows + `\n`
  },
}

export default cssOnlyVariables
