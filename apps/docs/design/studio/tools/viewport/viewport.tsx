// design/studio/tools/viewport/viewport.tsx
'use client'

import { useMemo, useState } from 'react'

import * as Core from '@sebgroup/green-core/react'
import tokens from '@sebgroup/green-tokens/src/tokens/2023/tokens.base.json'
import * as Part from '../../parts'
import * as Table from '../../table'

interface ViewportToken {
  name: string
  value: string
}

function getViewportTokens(): ViewportToken[] {
  return Object.entries(tokens.sys.viewport)
    .map(([name, token]) => ({
      name,
      value: token.$value,
    }))
    .sort((a, b) => Number(a.value) - Number(b.value))
}

export default function Viewport() {
  const [search, setSearch] = useState('')
  const viewportTokens = useMemo(() => getViewportTokens(), [])

  const filteredTokens = useMemo(() => {
    if (!search) return viewportTokens
    return viewportTokens.filter((token) =>
      token.name.toLowerCase().includes(search.toLowerCase()),
    )
  }, [viewportTokens, search])

  return (
    <Core.GdsFlex flex-direction="column" gap="4xl" padding="xl">
      <Part.Header
        title="Viewport"
        description="Viewport breakpoint tokens for responsive design"
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
              { label: 'Value' },
              { label: '' },
              { label: '' },
              { label: '' },
            ]}
          />
          {filteredTokens.map((token, index) => (
            <Table.Row
              key={token.name + index}
              name={token.name}
              columns={[
                { type: 'name', content: token.name },
                { type: 'value', content: `${token.value}px` },
                {
                  type: 'empty',
                },
                { type: 'empty' },
                { type: 'variable' },
              ]}
            />
          ))}
        </Core.GdsFlex>
      ) : (
        <Part.Empty query="viewport" />
      )}
    </Core.GdsFlex>
  )
}
