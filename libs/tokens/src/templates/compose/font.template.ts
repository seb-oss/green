function mapFontWeight(weight: string | number): string {
  switch (weight) {
    case '100':
    case 100:
      return 'FontWeight.Thin'
    case '200':
    case 200:
      return 'FontWeight.ExtraLight'
    case '300':
    case 300:
      return 'FontWeight.Light'
    case '400':
    case 400:
      return 'FontWeight.Normal'
    case '450':
    case 450:
      return 'FontWeight(450)'
    case '500':
    case 500:
      return 'FontWeight.Medium'
    case '600':
    case 600:
      return 'FontWeight.SemiBold'
    case '700':
    case 700:
      return 'FontWeight.Bold'
    case '800':
    case 800:
      return 'FontWeight.ExtraBold'
    case '900':
    case 900:
      return 'FontWeight.Black'
    default:
      return 'FontWeight.Normal'
  }
}

export default ({ allTokens, header, options }) => `${header}

package ${options.packageName ?? ''}

${options.import.map(/** @param {string} item */ (item) => `import ${item}`).join('\n')}

val GdsSansSerif = FontFamily(
${allTokens
  .map((token) => {
    const fontVariant = token.path[token.path.length - 1];
    const fontName = fontVariant === 'regular' ? 'seb_sans_serif' : `seb_sans_serif_${fontVariant}`;
    return `  Font(R.font.${fontName}, ${mapFontWeight(token.$value)}),`;
  })
  .join('\n')}
)
`
