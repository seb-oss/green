// typography.tokens.ts

import { sys } from '@sebgroup/green-tokens/src/tokens/2023/tokens.typography.json'
import { TokenGroup } from '../../settings/studio.types'

// Helper function to categorize typography tokens
const categorizeTypography = (tokens: Record<string, any>): TokenGroup[] => {
  const categories: Record<string, any[]> = {
    Display: [],
    Heading: [],
    Preamble: [],
    Body: [],
    Detail: [],
  }

  Object.entries(tokens).forEach(([name, token]) => {
    if (token.$type === 'typography') {
      const category = name.split('-')[0]
      if (categories[category.charAt(0).toUpperCase() + category.slice(1)]) {
        categories[category.charAt(0).toUpperCase() + category.slice(1)].push({
          name,
          value: `${token.$value.fontSize}/${token.$value.lineHeight}`,
          type: token.$type,
          style: {
            fontSize: token.$value.fontSize,
            lineHeight: `${token.$value.lineHeight}px`,
            fontWeight: token.$value.fontWeight
              .replace('{sys.text.weight.', '')
              .replace('}', ''),
            fontStyle: token.$value.fontStyle || 'normal',
          },
        })
      }
    }
  })

  // Sort tokens within each category by size
  Object.keys(categories).forEach((category) => {
    categories[category].sort((a, b) => {
      const aSize = parseInt(a.value.split('/')[0])
      const bSize = parseInt(b.value.split('/')[0])
      return bSize - aSize
    })
  })

  return Object.entries(categories)
    .filter(([_, tokens]) => tokens.length > 0)
    .map(([title, tokens]) => ({
      title,
      tokens,
    }))
}

export const typographyTokens: TokenGroup[] = categorizeTypography(sys.text)
