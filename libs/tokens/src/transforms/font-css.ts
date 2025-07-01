const formatWithUnit = (props) => {
  if (typeof props === 'string' || typeof props === 'number') {
    return `${props}px`
  }
  if (typeof props === 'object' && props.value && props.unit) {
    return `${props.value}${props.unit}`
  }
}

export default {
  name: 'font/css',
  type: `value`,
  transitive: true,
  filter: (token) =>
    token?.$type === 'typography' || token?.type === 'typography',
  transform: (token) => {
    const tokenValue = token.$value ?? token.value
    if (!tokenValue) return
    // font: font-style font-variant font-weight font-size/line-height font-family;

    return [
      tokenValue.fontStyle,
      tokenValue.fontWeight,
      `${formatWithUnit(tokenValue.fontSize)}${tokenValue.lineHeight ? '/' + formatWithUnit(tokenValue.lineHeight) : ''}`,
      tokenValue.fontFamily,
    ]
      .filter(Boolean)
      .join(' ')
  },
}
