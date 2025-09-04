// design/studio/tools/shadows/shadows.tsx
'use client'

import { useMemo, useState } from 'react'

import * as Core from '@sebgroup/green-core/react'
import tokens from '@sebgroup/green-tokens/src/tokens/2023/tokens.base.json'
import * as Part from '../../parts'

function getShadowSizes(): string[] {
  const shadowKeys = Object.keys(tokens.sys.shadow).filter(
    (key) => key !== '$type',
  )
  const uniqueSizes = new Set(shadowKeys.map((key) => key.split('-')[0]))

  return Array.from(uniqueSizes).sort()
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

      <Core.GdsFlex flex-direction="column" gap="0">
        <Part.Head
          columns={[
            { label: 'Token' },
            { label: 'Preview' },
            { label: '' },
            { label: '' },
            { label: '' },
          ]}
        />

        {filteredTokens.map((token) => (
          <Core.GdsFlex
            key={token}
            padding="m l"
            border-width="0 0 4xs 0"
            border-color="subtle-01"
          >
            <Core.GdsGrid columns="5" gap="xl" align-items="center">
              <Core.GdsText text-transform="uppercase">{token}</Core.GdsText>
              <Core.GdsCard variant="secondary" box-shadow={token} />
              <div></div>
              <div></div>
              <Part.Variable name={token} />
            </Core.GdsGrid>
          </Core.GdsFlex>
        ))}
      </Core.GdsFlex>
    </Core.GdsFlex>
  )
}
