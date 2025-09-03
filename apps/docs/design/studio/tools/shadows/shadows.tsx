// design/studio/tools/shadows/shadows.tsx
'use client'

import { useMemo, useState } from 'react'

import * as Core from '@sebgroup/green-core/react'
import tokens from '@sebgroup/green-tokens/src/tokens/2023/tokens.base.json'
import * as Part from '../../parts'

interface ShadowValue {
  color: string
  offsetX: string
  offsetY: string
  blur: string
  spread: string
}

interface ShadowToken {
  name: string
  value: {
    primary: ShadowValue
    secondary: ShadowValue
  }
}

function formatShadowTokens(): ShadowToken[] {
  const shadows = tokens.sys.shadow
  const sizes = ['s', 'm', 'l', 'xl']

  return sizes.map((size) => ({
    name: size,
    value: {
      primary: shadows[`${size}-01`].$value as ShadowValue,
      secondary: shadows[`${size}-02`].$value as ShadowValue,
    },
  }))
}

export default function Shadows() {
  const [search, setSearch] = useState('')
  const shadowTokens = useMemo(() => formatShadowTokens(), [])

  const filteredTokens = useMemo(() => {
    if (!search) return shadowTokens
    return shadowTokens.filter((token) =>
      token.name.toLowerCase().includes(search.toLowerCase()),
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
        <Core.GdsCard>
          <Core.GdsGrid columns="5" gap="xl">
            <Core.GdsText>Token</Core.GdsText>
            <Core.GdsText>Preview</Core.GdsText>
            <Core.GdsText></Core.GdsText>
            <Core.GdsText></Core.GdsText>
            <Core.GdsText></Core.GdsText>
          </Core.GdsGrid>
        </Core.GdsCard>
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
              <Core.GdsCard variant="secondary" box-shadow={token.name} />
              <div></div>
              <div></div>
              {false && (
                <>
                  <Core.GdsText color="neutral-02">
                    {`${token.value.primary.offsetX} ${token.value.primary.offsetY} ${token.value.primary.blur} ${token.value.primary.spread} ${token.value.primary.color}`}
                  </Core.GdsText>
                  <Core.GdsText color="neutral-02">
                    {`${token.value.secondary.offsetX} ${token.value.secondary.offsetY} ${token.value.secondary.blur} ${token.value.secondary.spread} ${token.value.secondary.color}`}
                  </Core.GdsText>
                </>
              )}
              <Part.Variable name={token.name} />
            </Core.GdsGrid>
          </Core.GdsFlex>
        ))}
      </Core.GdsFlex>
    </Core.GdsFlex>
  )
}
