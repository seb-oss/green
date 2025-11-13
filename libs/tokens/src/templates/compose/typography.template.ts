function mapFontFamily(fontFamily: string) {
  if (fontFamily.includes('Book')) return 'GdsSansSerifBook'
  return 'GdsSansSerif'
}

function mapFontWeight(weight: number) {
  if (weight == 450) return 'FontWeight(450)'
  if (weight == 500) return 'FontWeight.Medium'
  if (weight == 600) return 'FontWeight.SemiBold'
  if (weight > 600) return 'FontWeight.Bold'
  return 'FontWeight.Normal'
}

function toPascalCase(name: string) {
  return name
    .replace(/(^\w|-\w)/g, (m) => m.replace('-', '').toUpperCase())
    .replace(/^SysText/, '')
}

export default ({ allTokens, header, options }) => `${header}

package ${options.packageName ?? ''}

${options.import.map(/** @param {string} item */ (item) => `import ${item}`).join('\n')}

${options.objectType ? `${options.objectType} ` : ''}${options.className ? `${options.className}` : ''} {
${allTokens
  .map((token) => {
    const { fontFamily, fontWeight, fontSize, lineHeight } = token.$value
    return `  val ${toPascalCase(token.name)} = TextStyle(
      fontFamily = ${mapFontFamily(fontFamily)},
      fontSize = ${fontSize}.sp,
      lineHeight = ${lineHeight}.sp,
      fontWeight = ${mapFontWeight(fontWeight)},
  )
`
  })
  .join('\n')}
}
`
