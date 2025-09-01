// typography.tsx
import * as Core from '@sebgroup/green-core/react'
import { typographyTokens } from './typography.tokens'

export default function Typography() {
  return (
    <Core.GdsFlex flex-direction="column" gap="6xl" padding="xl">
      <Core.GdsText>Typography Scale</Core.GdsText>
      {typographyTokens.map((group, index) => (
        <Core.GdsFlex key={index} flex-direction="column" gap="l">
          <Core.GdsText text-transform="uppercase" color="neutral-02">
            {group.title}
          </Core.GdsText>
          <Core.GdsFlex flex-direction="column" gap="m">
            {group.tokens.map((token: any, tokenIndex) => (
              <Core.GdsFlex
                key={tokenIndex}
                flex-direction="column"
                gap="s"
                padding="0"
                border-width="0 0 4xs 0"
                border-color="subtle-01"
              >
                <Core.GdsText style={token.style}>{token.name}</Core.GdsText>
                <Core.GdsFlex
                  gap="xl"
                  align-items="center"
                  justify-content="space-between"
                >
                  <Core.GdsFlex align-items="center" gap="l">
                    <Core.GdsText color="neutral-02">
                      Size: {token.style.fontSize}px
                    </Core.GdsText>
                    <Core.GdsText color="neutral-02">
                      Line Height: {token.style.lineHeight}
                    </Core.GdsText>
                    <Core.GdsText color="neutral-02">
                      Weight: {token.style.fontWeight}
                    </Core.GdsText>
                    {token.style.fontStyle !== 'normal' && (
                      <Core.GdsText color="neutral-02">
                        Style: {token.style.fontStyle}
                      </Core.GdsText>
                    )}
                  </Core.GdsFlex>

                  <Core.GdsFlex
                    flex-direction="row"
                    align-items="center"
                    padding="2xs 2xs 2xs m"
                    gap="s"
                  >
                    <Core.GdsText color="neutral-01">{token.name}</Core.GdsText>
                    <Core.GdsButton size="xs" rank="secondary">
                      <Core.IconCopy size="s" />
                    </Core.GdsButton>
                  </Core.GdsFlex>
                </Core.GdsFlex>
              </Core.GdsFlex>
            ))}
          </Core.GdsFlex>
        </Core.GdsFlex>
      ))}
    </Core.GdsFlex>
  )
}
