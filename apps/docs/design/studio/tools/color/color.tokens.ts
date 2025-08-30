// color.tokens.ts
import backgroundDark from '@sebgroup/green-tokens/src/tokens/2023/background.dark.json'
import backgroundLight from '@sebgroup/green-tokens/src/tokens/2023/background.light.json'
import borderDark from '@sebgroup/green-tokens/src/tokens/2023/border.dark.json'
import borderLight from '@sebgroup/green-tokens/src/tokens/2023/border.light.json'
import contentDark from '@sebgroup/green-tokens/src/tokens/2023/content.dark.json'
import contentLight from '@sebgroup/green-tokens/src/tokens/2023/content.light.json'
import stateDark from '@sebgroup/green-tokens/src/tokens/2023/state.dark.json'
import stateLight from '@sebgroup/green-tokens/src/tokens/2023/state.light.json'
import {
  ColorGroup,
  ColorSubGroup,
  ColorToken,
  ColorValue,
} from './color.types'

const filterTokens = (obj: Record<string, any>): Record<string, ColorValue> => {
  const result: Record<string, ColorValue> = {}
  Object.entries(obj).forEach(([key, value]) => {
    if (key !== '$type' && typeof value === 'object') {
      result[key] = value as ColorValue
    }
  })
  return result
}

const processColorGroup = (
  lightTokens: Record<string, any>,
  darkTokens: Record<string, any>,
  category: string,
): ColorToken[] => {
  const filteredLightTokens = filterTokens(lightTokens)
  const filteredDarkTokens = filterTokens(darkTokens)

  return Object.entries(filteredLightTokens).map(([name, lightValue]) => ({
    name,
    lightValue,
    darkValue: filteredDarkTokens[name],
    category,
  }))
}

const createColorTokens = (): ColorGroup[] => {
  const groups: ColorGroup[] = [
    {
      title: 'Background',
      hasSubGroups: true,
      tokens: [
        {
          category: 'L1',
          tokens: processColorGroup(
            backgroundLight.sys.color.L1,
            backgroundDark.sys.color.L1,
            'L1',
          ),
        },
        {
          category: 'L2',
          tokens: processColorGroup(
            backgroundLight.sys.color.L2,
            backgroundDark.sys.color.L2,
            'L2',
          ),
        },
        {
          category: 'L3',
          tokens: processColorGroup(
            backgroundLight.sys.color.L3,
            backgroundDark.sys.color.L3,
            'L3',
          ),
        },
      ] as ColorSubGroup[],
    },
    {
      title: 'Border',
      tokens: processColorGroup(
        borderLight.sys.color.border,
        borderDark.sys.color.border,
        'border',
      ),
    },
    {
      title: 'Content',
      tokens: processColorGroup(
        contentLight.sys.color.content,
        contentDark.sys.color.content,
        'content',
      ),
    },
    {
      title: 'State',
      tokens: processColorGroup(
        stateLight.sys.color.state,
        stateDark.sys.color.state,
        'state',
      ),
    },
  ]

  return groups
}

export const colorTokens = createColorTokens()
