// spacing.tsx
import { useMemo, useState } from 'react'

import * as Core from '@sebgroup/green-core/react'
import { ref } from '@sebgroup/green-tokens/src/tokens/2023/ref/space.ref.json'
import * as Part from '../../parts'
import { TokenGroup } from '../../settings/studio.types'

function calculateScore(token: any, query: string): boolean {
  const searchString =
    `${token.name} ${token.value}px ${token.type}`.toLowerCase()
  return searchString.includes(query.toLowerCase())
}

const SpaceVisualizer = ({ value }: { value: number }) => (
  <Core.GdsFlex align-items="center" gap="m">
    {value === 999 ? (
      <Core.GdsDiv
        width="100%"
        height="24px"
        background="neutral-03"
        border-radius="s"
      />
    ) : (
      <Core.GdsDiv
        width="40px"
        height="40px"
        background="neutral-02"
        box-shadow="l"
      />
    )}
  </Core.GdsFlex>
)

export const spacingTokens: TokenGroup[] = [
  {
    title: 'Shadows',
    tokens: Object.entries(ref.space)
      .sort((a, b) => a[1].$value - b[1].$value)
      .map(([name, token]) => ({
        name,
        value: token.$value,
        type: token.$type,
      })),
  },
]

export default function Radius() {
  const [search, setSearch] = useState('')

  const filteredTokens = useMemo(() => {
    if (!search) return spacingTokens

    return spacingTokens
      .map((group) => ({
        ...group,
        tokens: group.tokens.filter((token) => calculateScore(token, search)),
      }))
      .filter((group) => group.tokens.length > 0)
  }, [search])

  const handleCopyClick = (token: any) => {
    navigator.clipboard.writeText(`var(--gds-ref-space-${token.name})`)
  }

  return (
    <Core.GdsFlex flex-direction="column" gap="6xl" padding="xl">
      <Part.Header
        title="Shadows"
        description="shadows description"
        search={
          <Core.GdsInput
            plain
            value={search}
            onInput={(e) => setSearch((e.target as HTMLInputElement).value)}
            clearable
          >
            <Core.IconMagnifyingGlass slot="lead" />
          </Core.GdsInput>
        }
      />

      {filteredTokens.length > 0 ? (
        filteredTokens.map((group, index) => (
          <Core.GdsFlex key={index} flex-direction="column" gap="0">
            <Core.GdsCard padding="l">
              <Core.GdsGrid
                columns="4"
                gap="l"
                align-items="center"
                justify-content="flex-start"
              >
                <Core.GdsText>Variable</Core.GdsText>
                <Core.GdsText>Value</Core.GdsText>
                <Core.GdsText>Preview</Core.GdsText>
                <Core.GdsText></Core.GdsText>
              </Core.GdsGrid>
            </Core.GdsCard>

            {group.tokens.map((token, tokenIndex) => (
              <Core.GdsFlex
                key={tokenIndex}
                padding="m l"
                border-width="0 0 4xs 0"
                border-color="subtle-01"
              >
                <Core.GdsGrid
                  columns="4"
                  gap="l"
                  align-items="center"
                  justify-content="flex-start"
                >
                  <Core.GdsCard
                    justify-content="center"
                    align-items="center"
                    padding="0"
                    border-radius="xs"
                    height="40px"
                    width="40px"
                    variant="secondary"
                  >
                    <Core.GdsText
                      width="6ch"
                      text-align="center"
                      text-transform="uppercase"
                    >
                      {token.name}
                    </Core.GdsText>
                  </Core.GdsCard>
                  <Core.GdsText color="neutral-02">
                    {token.value}px
                  </Core.GdsText>
                  <SpaceVisualizer value={token.value as number} />
                  <Core.GdsFlex
                    align-items="center"
                    gap="s"
                    margin="0 0 0 auto"
                  >
                    <Core.GdsButton
                      size="xs"
                      rank="tertiary"
                      onClick={() => handleCopyClick(token)}
                    >
                      <Core.IconCopy size="s" />
                    </Core.GdsButton>
                  </Core.GdsFlex>
                </Core.GdsGrid>
              </Core.GdsFlex>
            ))}
          </Core.GdsFlex>
        ))
      ) : (
        <Core.GdsCard
          justify-content="center"
          align-items="center"
          height="40vh"
          padding="2xl"
        >
          <Core.IconMagnifyingGlass size="xl" />
          <Core.GdsText color="subtle-02">
            No radius tokens found matching your search
          </Core.GdsText>
        </Core.GdsCard>
      )}
    </Core.GdsFlex>
  )
}
