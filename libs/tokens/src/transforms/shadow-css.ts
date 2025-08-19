const formatWithUnit = (props) => {
  if (typeof props === 'string' || typeof props === 'number') {
    return props
  }
  if (typeof props === 'object' && props.value && props.unit) {
    return `${props.value}${props.unit} `
  }
}

export default {
  name: 'shadow/css',
  type: `value`,
  transitive: true,
  filter: (token) => {
    return token?.$type === 'shadow' || token?.type === 'shadow'
  },
  transform: (token) => {
    const formatShadow = ({
      offsetX = '0',
      offsetY = '0',
      blur = '0',
      spread = '0',
      color,
      inset = false,
    }) =>
      `${formatWithUnit(offsetX)} ${formatWithUnit(offsetY)} ${formatWithUnit(blur)} ${formatWithUnit(spread)} ${formatWithUnit(color)} ${inset ? 'inset' : ''}`.trim()
    const tokenValue = token.$value ?? token.value

    if (Array.isArray(tokenValue)) {
      return tokenValue.map(formatShadow).join(', ')
    }

    if (typeof tokenValue === 'object') {
      return formatShadow(tokenValue)
    }

    return tokenValue
  },
}
