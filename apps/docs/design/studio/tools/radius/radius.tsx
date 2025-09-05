// design/studio/tools/radius/radius.tsx
'use client'

import { useMemo, useState } from 'react'

import * as Core from '@sebgroup/green-core/react'
import density from '@sebgroup/green-tokens/src/tokens/2023/density.comfortable.json'
import { ref } from '@sebgroup/green-tokens/src/tokens/2023/ref/space.ref.json'
import * as Part from '../../parts'
import { Token } from '../../settings/studio.types'
import * as Table from '../../table'

interface RadiusToken {
  $value: string
}

interface SpaceRefToken {
  $value: number
  $type: string
}

interface SpaceTokens {
  [key: string]: SpaceRefToken
}

function getRadiusTokens(): Token[] {
  return Object.entries(density.sys.radius)
    .filter(([key]) => key !== '$type')
    .map(([name, token]) => {
      const spaceKey = (token as RadiusToken).$value
        .replace('{ref.space.', '')
        .replace('}', '')

      const spaceValue = (ref.space as SpaceTokens)[spaceKey].$value

      return {
        name,
        value: spaceValue,
        type: 'dimension',
      }
    })
}

export default function Radius() {
  const [search, setSearch] = useState('')
  const radiusTokens = useMemo(() => getRadiusTokens(), [])

  const filteredTokens = useMemo(() => {
    if (!search) return radiusTokens
    return radiusTokens.filter((token) =>
      token.name.toLowerCase().includes(search.toLowerCase()),
    )
  }, [radiusTokens, search])

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
      {filteredTokens.length > 0 ? (
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

          {filteredTokens.map((token, index) => (
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
                      width="40px"
                      min-height="40px"
                      border="2xs"
                      border-width="2xs 0 0 2xs"
                      padding="0"
                      variant="secondary"
                      border-color="strong "
                      border-radius={`${token.name} 0 0 0`}
                    />
                  ),
                },
                { type: 'empty' },
                { type: 'variable' },
              ]}
            />
          ))}
        </Core.GdsFlex>
      ) : (
        <Part.Empty query="radius" />
      )}
    </Core.GdsFlex>
  )
}
