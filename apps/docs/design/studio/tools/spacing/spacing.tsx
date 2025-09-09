// spacing.tsx
import { useMemo, useState } from 'react'

import * as Core from '@sebgroup/green-core/react'
import { ref } from '@sebgroup/green-tokens/src/tokens/2023/ref/space.ref.json'
import * as Part from '../../parts'
import { TokenGroup } from '../../settings/studio.types'
import * as Table from '../../table'

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
        width={`${value}px`}
        height="24px"
        background="neutral-03"
        border-radius="s"
      />
    )}
  </Core.GdsFlex>
)

export const spacingTokens: TokenGroup[] = [
  {
    title: 'Spacing',
    tokens: Object.entries(ref.space)
      .sort((a, b) => a[1].$value - b[1].$value)
      .map(([name, token]) => ({
        name,
        value: token.$value,
        type: token.$type,
      })),
  },
]

export default function Spacing() {
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
    navigator.clipboard.writeText(`${token.name}`)
  }

  return (
    <Core.GdsFlex flex-direction="column" gap="4xl" padding="xl">
      <Part.Header
        title="Spacing"
        description="spacing description"
        search={
          <Core.GdsInput
            plain
            width="100%"
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
            <Table.Head
              columns={[
                { label: 'Token' },
                { label: 'Value' },
                { label: 'Preview' },
                { label: '' },
                { label: '' },
              ]}
            />

            {group.tokens.map((token, index) => (
              <Table.Row
                key={token.name + index}
                name={token.name}
                columns={[
                  { type: 'name' },
                  { type: 'value', content: `${token.value}px` },
                  {
                    type: 'preview',
                    content: <SpaceVisualizer value={token.value as number} />,
                  },
                  { type: 'empty' },
                  { type: 'variable' },
                ]}
              />
            ))}
          </Core.GdsFlex>
        ))
      ) : (
        <Part.Empty query="spacing" />
      )}
    </Core.GdsFlex>
  )
}
