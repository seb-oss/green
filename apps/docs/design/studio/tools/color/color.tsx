// color.tsx
import * as Core from '@sebgroup/green-core/react'
import { colorTokens } from './color.tokens'
import { ColorSubGroup, ColorToken } from './color.types'

const ColorSwatch = ({ token }: { token: ColorToken }) => {
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
          border-radius="s"
          style={{
            background: `rgba(var(--color-${token.name}-rgb), ${
              token.lightValue.alpha || 1
            })`,
          }}
        />
        <Core.GdsDiv
          width="48px"
          height="48px"
          border-radius="s"
          background="var(--gds-ref-pallet-base-grey-900)"
          style={{
            background: `rgba(var(--color-${token.name}-rgb), ${
              token.darkValue.alpha || 1
            })`,
          }}
        />
      </Core.GdsFlex>
      <Core.GdsText text-transform="uppercase">{token.name}</Core.GdsText>
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
                      <ColorSwatch key={tokenIndex} token={token} />
                    ))}
                  </Core.GdsGrid>
                </Core.GdsFlex>
              ))}
            </Core.GdsFlex>
          ) : (
            <Core.GdsGrid columns="4" gap="m">
              {(group.tokens as ColorToken[]).map((token, tokenIndex) => (
                <ColorSwatch key={tokenIndex} token={token} />
              ))}
            </Core.GdsGrid>
          )}
        </Core.GdsFlex>
      ))}
    </Core.GdsFlex>
  )
}
