// design/studio/tools/radius/radius.tsx
'use client'

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

export const radiusTokens: TokenGroup[] = [
  {
    title: 'Radius',
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
    if (!search) return radiusTokens

    return radiusTokens
      .map((group) => ({
        ...group,
        tokens: group.tokens.filter((token) => calculateScore(token, search)),
      }))
      .filter((group) => group.tokens.length > 0)
  }, [search])

  return (
    <Core.GdsFlex flex-direction="column" gap="4xl" padding="xl">
      <Part.Header
        title="Border Radius"
        description="Border radius tokens for consistent component shapes"
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

      <Core.GdsFlex flex-direction="column" gap="0">
        <Table.Head
          columns={[
            { label: 'Token' },
            { label: 'Value' },
            { label: 'Preview' },
            { label: '' },
            { label: '' },
          ]}
        />

        {filteredTokens.map((group) => (
          <Core.GdsFlex key={group.title} flex-direction="column" gap="0">
            {group.tokens.map((token, index) => (
              <Table.Row
                key={token.name + index}
                name={token.name}
                columns={[
                  { type: 'name' },
                  { type: 'value', content: `${token.value}px` },
                  {
                    type: 'preview',
                    content: (
                      <Core.GdsCard
                        width="64px"
                        height="64px"
                        variant="secondary"
                        border-radius={token.name}
                      />
                    ),
                  },
                  { type: 'empty' },
                  { type: 'variable' },
                ]}
              />
            ))}
          </Core.GdsFlex>
        ))}
      </Core.GdsFlex>
    </Core.GdsFlex>
  )
}
