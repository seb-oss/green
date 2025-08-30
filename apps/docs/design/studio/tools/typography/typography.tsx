// typography.tsx
import * as Core from '@sebgroup/green-core/react'
import { typographyTokens } from './typography.tokens'

export default function Typography() {
  return (
    <Core.GdsFlex flex-direction="column" gap="xl" padding="xl">
      <Core.GdsText>Typography Scale</Core.GdsText>
      {typographyTokens.map((group, index) => (
        <Core.GdsFlex key={index} flex-direction="column" gap="l">
          <Core.GdsText>{group.title}</Core.GdsText>
          <Core.GdsFlex flex-direction="column" gap="m">
            {group.tokens.map((token: any, tokenIndex) => (
              <Core.GdsFlex
                key={tokenIndex}
                flex-direction="column"
                gap="s"
                padding="m"
                border="1px solid var(--gds-ref-pallet-base-grey-200)"
                border-radius="m"
              >
                <Core.GdsText style={token.style}>{token.name}</Core.GdsText>
                <Core.GdsFlex gap="m">
                  <Core.GdsText color="subtle-02">
                    Size: {token.style.fontSize}px
                  </Core.GdsText>
                  <Core.GdsText color="subtle-02">
                    Line Height: {token.style.lineHeight}
                  </Core.GdsText>
                  <Core.GdsText color="subtle-02">
                    Weight: {token.style.fontWeight}
                  </Core.GdsText>
                  {token.style.fontStyle !== 'normal' && (
                    <Core.GdsText color="subtle-02">
                      Style: {token.style.fontStyle}
                    </Core.GdsText>
                  )}
                </Core.GdsFlex>
              </Core.GdsFlex>
            ))}
          </Core.GdsFlex>
        </Core.GdsFlex>
      ))}
    </Core.GdsFlex>
  )
}
