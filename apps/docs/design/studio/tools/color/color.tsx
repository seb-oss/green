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
      flex-direction="row"
      align-items="center"
      padding="s l"
      border-width="0 0 4xs 0"
      border-color="subtle-01"
    >
      <Core.GdsGrid columns="5" align-items="center" gap="xl">
        {level && <Core.GdsText>{level}</Core.GdsText>}
        <Core.GdsFlex align-items="center" gap="s">
          <Core.GdsDiv
            width="32px"
            height="32px"
            border-radius="max"
            border-color="inverse"
            border-width="3xs"
            border-style="solid"
            box-shadow="m"
            style={{
              background: getColorMix(
                token.lightValue.$value,
                token.lightValue.alpha,
              ),
            }}
          />
          <Core.GdsDiv
            width="32px"
            height="32px"
            border-radius="max"
            border-color="inverse"
            border-width="3xs"
            border-style="solid"
            box-shadow="m"
            style={{
              background: getColorMix(
                token.darkValue.$value,
                token.darkValue.alpha,
              ),
            }}
          />
        </Core.GdsFlex>
        <Core.GdsText>{token.name}</Core.GdsText>
        <Core.GdsText color="subtle-02">
          {token.lightValue.$value}
          {token.lightValue.alpha ? ` / ${token.lightValue.alpha}` : ''}
        </Core.GdsText>
        <Core.GdsText color="subtle-02">
          {token.darkValue.$value}
          {token.darkValue.alpha ? ` / ${token.darkValue.alpha}` : ''}
        </Core.GdsText>
      </Core.GdsGrid>
    </Core.GdsFlex>
  )
}

export default function Color() {
  return (
    <Core.GdsFlex flex-direction="column" gap="4xl" padding="xl">
      {colorTokens.map((group, index) => (
        <Core.GdsFlex key={index} flex-direction="column" gap="4xl">
          <Core.GdsText>{group.title}</Core.GdsText>
          {group.hasSubGroups ? (
            <Core.GdsFlex flex-direction="column" gap="6xl">
              {(group.tokens as ColorSubGroup[]).map((subGroup, subIndex) => (
                <Core.GdsFlex
                  key={subIndex}
                  flex-direction="column"
                  gap="xl"
                  data-level={subGroup.category}
                >
                  <Core.GdsCard
                    flex-direction="row"
                    justify-content="space-between"
                  >
                    <Core.GdsGrid columns="5" align-items="center" gap="xl">
                      <Core.GdsText>Level</Core.GdsText>
                      <Core.GdsText>Example</Core.GdsText>
                      <Core.GdsText>Variable name</Core.GdsText>
                      <Core.GdsText>Light</Core.GdsText>
                      <Core.GdsText>Dark</Core.GdsText>
                    </Core.GdsGrid>
                  </Core.GdsCard>
                  <Core.GdsFlex
                    flex-direction="column"
                    data-subgroup={subGroup.category}
                  >
                    {subGroup.tokens.map((token, tokenIndex) => (
                      <ColorSwatch
                        key={tokenIndex}
                        token={token}
                        group={group.title}
                        level={subGroup.category}
                      />
                    ))}
                  </Core.GdsFlex>
                </Core.GdsFlex>
              ))}
            </Core.GdsFlex>
          ) : (
            <Core.GdsGrid columns="1" gap="m">
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
