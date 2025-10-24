import { lowercaseFirstLetter } from '../utils/index.ts'

type Token = {
  $type: 'typography'
  $value: {
    fontFamily: string
    fontWeight: number
    fontSize: number
    lineHeight: number
  }
  filePath: string
  isSource: boolean
  original: {
    $type: 'typography'
    $value: {
      fontFamily: string
      fontWeight: number
      fontSize: number
      lineHeight: number
    }
  }
  name: string
  attributes: {
    category: string
    type: string
    item: string
  }
  path: string[]
  key: string
}

const groupByWeight = (tokens: Token[]) => {
  const grouped: Record<number, Token[]> = {
    700: [],
    500: [],
    450: [],
    400: [],
    300: [],
  }

  tokens.forEach((token) => {
    const weight: number = token['$value'].fontWeight
    if (weight) {
      grouped[weight].push(token)
    }
  })

  return {
    bold: grouped[700],
    medium: grouped[500],
    book: grouped[450],
    regular: grouped[400],
    light: grouped[300],
  }
}

const validateTokens = (tokens: Token[]) => {
  tokens.forEach((token, idx) => {
    if (
      !token.name ||
      !token.$value ||
      typeof token.$value.fontSize !== 'number' ||
      typeof token.$value.fontWeight !== 'number' ||
      typeof token.$value.fontFamily !== 'string' ||
      typeof token.$value.lineHeight !== 'number' ||
      !token.attributes ||
      typeof token.attributes['ios-text-style'] !== 'string'
    ) {
      throw new Error(
        `Invalid token at index ${idx}: Missing required properties.`,
      )
    }
  })
}

export default ({ file, header, options, allTokens }: any) => {
  validateTokens(allTokens)
  return `
import SwiftUI
import UIKit

public enum Typography {
${allTokens.map((token: any) => `   case ${lowercaseFirstLetter(token.name.replace('sysText', ''))}`).join('\n')}
}

extension Typography {
    var size: CGFloat {
        switch self {
${allTokens.map((token: any) => `            case .${lowercaseFirstLetter(token.name.replace('sysText', ''))}: ${token['$value'].fontSize}`).join('\n')}
        }
    }

    var textStyle: Font.TextStyle {
        switch self {
${allTokens.map((token: any) => `            case .${lowercaseFirstLetter(token.name.replace('sysText', ''))}: .${token.attributes['ios-text-style']}`).join('\n')}
        }
    }

  var weight: Typography.Weight {
    switch self {
${Object.entries(groupByWeight(allTokens))
  .map(([weight, arr]) =>
    arr.length
      ? `       case ${arr.map((token: any) => `.${lowercaseFirstLetter(token.name.replace('sysText', ''))}`).join(', ')}:
            return .${weight}\n`
      : '',
  )
  .join('')}    }
  }
}

extension Typography: CaseIterable {}
`
}
