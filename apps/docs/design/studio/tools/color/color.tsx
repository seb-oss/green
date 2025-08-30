// color.tsx
import * as Core from '@sebgroup/green-core/react'
import { colorTokens } from './color.tokens'
import { ColorSubGroup, ColorToken } from './color.types'

// color.tsx
const ColorSwatch = ({
  token,
  group,
  level,
}: {
  token: ColorToken
  group: string
  level?: string
}) => {
  const getVarName = (theme: 'light' | 'dark') => {
    if (group === 'Background') {
      return `--gds-sys-color-${level?.toLowerCase()}-${token.name}`
    }
    return `--gds-sys-color-${group.toLowerCase()}-${token.name}`
  }

  const getColorMix = (value: string, alpha?: number) => {
    if (!alpha) return value
    // Convert alpha decimal to percentage
    const percentage = Math.round((1 - alpha) * 100)
    return `color-mix(in srgb, ${value}, transparent ${percentage}%)`
  }

  return (
    <Core.GdsFlex
      flex-direction="column"
      gap="xs"
      padding="m"
      border="1px solid var(--gds-ref-pallet-base-grey-200)"
      border-radius="m"
    >
      <Core.GdsFlex gap="m">
        <Core.GdsDiv
          width="48px"
          height="48px"
          border-radius="max"
          border-color="subtle-01"
          border-width="4xs"
          border-style="solid"
          style={{
            background: getColorMix(
              token.lightValue.$value,
              token.lightValue.alpha,
            ),
          }}
        />
        <Core.GdsDiv
          width="48px"
          height="48px"
          border-radius="max"
          border-color="subtle-01"
          border-width="4xs"
          border-style="solid"
          style={{
            background: getColorMix(
              token.darkValue.$value,
              token.darkValue.alpha,
            ),
          }}
        />
      </Core.GdsFlex>
      <Core.GdsText>{token.name}</Core.GdsText>
      <Core.GdsFlex gap="m">
        <Core.GdsText color="subtle-02">{getVarName('light')}</Core.GdsText>
      </Core.GdsFlex>
      <Core.GdsFlex gap="m">
        <Core.GdsText color="subtle-02">
          Light: {token.lightValue.$value}
          {token.lightValue.alpha ? ` (${token.lightValue.alpha})` : ''}
        </Core.GdsText>
        <Core.GdsText color="subtle-02">
          Dark: {token.darkValue.$value}
          {token.darkValue.alpha ? ` (${token.darkValue.alpha})` : ''}
        </Core.GdsText>
      </Core.GdsFlex>
    </Core.GdsFlex>
  )
}

export default function Color() {
  return (
    <Core.GdsFlex flex-direction="column" gap="xl" padding="xl">
      {colorTokens.map((group, index) => (
        <Core.GdsFlex key={index} flex-direction="column" gap="l">
          <Core.GdsText>{group.title}</Core.GdsText>
          {group.hasSubGroups ? (
            <Core.GdsFlex flex-direction="column" gap="m">
              {(group.tokens as ColorSubGroup[]).map((subGroup, subIndex) => (
                <Core.GdsFlex key={subIndex} flex-direction="column" gap="s">
                  <Core.GdsText>{subGroup.category}</Core.GdsText>
                  <Core.GdsGrid columns="4" gap="m">
                    {subGroup.tokens.map((token, tokenIndex) => (
                      <ColorSwatch
                        key={tokenIndex}
                        token={token}
                        group={group.title}
                        level={subGroup.category}
                      />
                    ))}
                  </Core.GdsGrid>
                </Core.GdsFlex>
              ))}
            </Core.GdsFlex>
          ) : (
            <Core.GdsGrid columns="4" gap="m">
              {(group.tokens as ColorToken[]).map((token, tokenIndex) => (
                <ColorSwatch
                  key={tokenIndex}
                  token={token}
                  group={group.title}
                />
              ))}
            </Core.GdsGrid>
          )}
        </Core.GdsFlex>
      ))}
    </Core.GdsFlex>
  )
}
