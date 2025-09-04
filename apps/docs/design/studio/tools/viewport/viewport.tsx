// design/studio/tools/viewport/viewport.tsx
'use client'

import { useMemo, useState } from 'react'

import * as Core from '@sebgroup/green-core/react'
import tokens from '@sebgroup/green-tokens/src/tokens/2023/tokens.base.json'
import * as Part from '../../parts'

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
    .sort((a, b) => Number(a.value) - Number(b.value)) // Sort by viewport size
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

      <Core.GdsFlex flex-direction="column" gap="0">
        <Part.Head
          columns={[
            { label: 'Token' },
            { label: 'Value' },
            { label: ' ' },
            { label: '' },
            { label: '' },
          ]}
        />

        {filteredTokens.map((token) => (
          <Core.GdsFlex
            key={token.name}
            padding="m l"
            border-width="0 0 4xs 0"
            border-color="subtle-01"
          >
            <Core.GdsGrid columns="5" gap="xl" align-items="center">
              <Core.GdsText text-transform="uppercase">
                {token.name}
              </Core.GdsText>
              <Core.GdsText>{token.value}px</Core.GdsText>
              <div></div>
              <div></div>
              <Part.Variable name={token.name} />
            </Core.GdsGrid>
          </Core.GdsFlex>
        ))}
      </Core.GdsFlex>
    </Core.GdsFlex>
  )
}
