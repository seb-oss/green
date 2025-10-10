const toRem = (fontSize: number) => {
  return `${fontSize / 16}rem`
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

    console.log(tokenValue)

    return [
      tokenValue.fontStyle,
      tokenValue.fontWeight,
      `${toRem(tokenValue.fontSize)}${tokenValue.lineHeight ? '/' + toRem(tokenValue.lineHeight) : ''}`,
      tokenValue.fontFamily,
    ]
      .filter(Boolean)
      .join(' ')
  },
}
