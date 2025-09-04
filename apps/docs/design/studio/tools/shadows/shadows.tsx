// design/studio/tools/shadows/shadows.tsx
'use client'

import { useMemo, useState } from 'react'

import * as Core from '@sebgroup/green-core/react'
import tokens from '@sebgroup/green-tokens/src/tokens/2023/tokens.base.json'
import * as Part from '../../parts'
import * as Table from '../../table'

function getShadowSizes(): string[] {
  const shadowKeys = Object.entries(tokens.sys.shadow)
    .filter(([key]) => key !== '$type')
    .map(([key]) => key.split('-')[0])

  return Array.from(new Set(shadowKeys))
}

export default function Shadows() {
  const [search, setSearch] = useState('')
  const shadowTokens = useMemo(() => getShadowSizes(), [])

  const filteredTokens = useMemo(() => {
    if (!search) return shadowTokens
    return shadowTokens.filter((token) =>
      token.toLowerCase().includes(search.toLowerCase()),
    )
  }, [shadowTokens, search])

  return (
    <Core.GdsFlex flex-direction="column" gap="4xl" padding="xl">
      <Part.Header
        title="Shadows"
        description="System-wide shadow tokens for elevation and depth"
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
        <Core.GdsFlex flex-direction="column" gap="0">
          <Table.Head
            columns={[
              { label: 'Token' },
              { label: 'Preview' },
              { label: '' },
              { label: '' },
              { label: '' },
            ]}
          />

          {filteredTokens.map((token) => (
            <Table.Row
              key={token + 'shadow'}
              name={token}
              columns={[
                { type: 'name' },
                {
                  type: 'preview',
                  content: (
                    <Core.GdsCard variant="secondary" box-shadow={token} />
                  ),
                },
                { type: 'empty' },
                { type: 'empty' },
                { type: 'variable' },
              ]}
            />
          ))}
        </Core.GdsFlex>
      ) : (
        <Part.Empty query="shadow" />
      )}
    </Core.GdsFlex>
  )
}
