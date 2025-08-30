// color.tokens.ts
import backgroundDark from '@sebgroup/green-tokens/src/tokens/2023/background.dark.json'
import backgroundLight from '@sebgroup/green-tokens/src/tokens/2023/background.light.json'
import borderDark from '@sebgroup/green-tokens/src/tokens/2023/border.dark.json'
import borderLight from '@sebgroup/green-tokens/src/tokens/2023/border.light.json'
import contentDark from '@sebgroup/green-tokens/src/tokens/2023/content.dark.json'
import contentLight from '@sebgroup/green-tokens/src/tokens/2023/content.light.json'
import blueRef from '@sebgroup/green-tokens/src/tokens/2023/ref/blue.ref.json'
import copperRef from '@sebgroup/green-tokens/src/tokens/2023/ref/copper.ref.json'
import greenRef from '@sebgroup/green-tokens/src/tokens/2023/ref/green.ref.json'
import neutralRef from '@sebgroup/green-tokens/src/tokens/2023/ref/neutral.ref.json'
import orangeRef from '@sebgroup/green-tokens/src/tokens/2023/ref/orange.ref.json'
import redRef from '@sebgroup/green-tokens/src/tokens/2023/ref/red.ref.json'
import yellowRef from '@sebgroup/green-tokens/src/tokens/2023/ref/yellow.ref.json'
import stateDark from '@sebgroup/green-tokens/src/tokens/2023/state.dark.json'
import stateLight from '@sebgroup/green-tokens/src/tokens/2023/state.light.json'
import {
  ColorGroup,
  ColorRefs,
  ColorSubGroup,
  ColorToken,
  ColorValue,
  RefColor,
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

const resolveColorRef = (refValue: string): string => {
  const refMatch = refValue.match(/\{ref\.color\.([^.]+)\.?([^}]*)\}/)
  if (!refMatch) return refValue

  const [_, color, shade] = refMatch
  const colorRefs: ColorRefs = {
    blue: blueRef.ref.color.blue,
    red: redRef.ref.color.red,
    green: greenRef.ref.color.green,
    orange: orangeRef.ref.color.orange,
    yellow: yellowRef.ref.color.yellow,
    copper: copperRef.ref.color.copper,
    black: neutralRef.ref.color.black,
    white: neutralRef.ref.color.white,
    grey: neutralRef.ref.color.grey,
  }

  // Handle direct color values (black and white)
  if (!shade && colorRefs[color] && '$value' in colorRefs[color]) {
    return (colorRefs[color] as RefColor).$value
  }

  // Handle shaded colors
  const colorGroup = colorRefs[color] as { [shade: string]: RefColor }
  return colorGroup?.[shade]?.$value || refValue
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
    lightValue: {
      ...lightValue,
      $value: resolveColorRef(lightValue.$value),
    },
    darkValue: {
      ...filteredDarkTokens[name],
      $value: resolveColorRef(filteredDarkTokens[name].$value),
    },
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
