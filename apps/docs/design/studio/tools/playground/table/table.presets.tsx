'use client'

import { useMemo, useState } from 'react'

import * as Core from '@sebgroup/green-core/react'
import { useTable } from './table.provider'

const PRESETS = [
  { id: 'users', title: 'Users', description: '100 users with 5 columns' },
  {
    id: 'feedback',
    title: 'Feedback',
    description: '50 feedback entries with 4 columns',
  },
]

export default function TablePresets() {
  const { setActivePreset } = useTable()
  const [searchQuery, setSearchQuery] = useState('')

  const filteredPresets = useMemo(() => {
    if (!searchQuery) return PRESETS
    return PRESETS.filter(
      (p) =>
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase()),
    )
  }, [searchQuery])

  return (
    <Core.GdsCard
      variant="secondary"
      flex-direction="column"
      gap="m"
      border-radius="m"
      max-height="100vh"
      overflow="auto"
      padding="m"
    >
      <Core.GdsFlex flex-direction="column" gap="xs">
        <Core.GdsInput
          clearable
          plain
          value={searchQuery}
          oninput={(e: Event) => {
            const target = e.target as HTMLInputElement
            setSearchQuery(target.value)
          }}
        >
          <Core.IconMagnifyingGlass slot="lead" />
        </Core.GdsInput>

        <Core.GdsFlex
          justify-content="space-between"
          align-items="center"
          padding="2xs s"
        >
          <Core.GdsText font="detail-regular-xs" color="neutral-02">
            {searchQuery
              ? `Found ${filteredPresets.length} preset${filteredPresets.length !== 1 ? 's' : ''}`
              : `${PRESETS.length} total presets`}
          </Core.GdsText>
        </Core.GdsFlex>
      </Core.GdsFlex>

      <Core.GdsFlex flex-direction="column" gap="m">
        {filteredPresets.length === 0 && (
          <Core.GdsText color="neutral-02" text-align="center" padding="xl">
            No presets found matching &quot;{searchQuery}&quot;
          </Core.GdsText>
        )}

        {filteredPresets.map((preset) => (
          <Core.GdsCardPattern01
            key={preset.id}
            title={preset.title}
            excerpt={preset.description}
          >
            <Core.GdsButton
              width="max-content"
              rank="secondary"
              size="small"
              slot="footer"
              onClick={() =>
                setActivePreset(preset.id as 'users' | 'feedback' | 'custom')
              }
            >
              <Core.IconPencilWave slot="lead" size="s" />
              Load
            </Core.GdsButton>
          </Core.GdsCardPattern01>
        ))}
        <Core.GdsCardPattern01
          key="custom"
          title="Custom"
          excerpt="Build your own table from scratch"
          variant="neutral-02"
          outlined
        >
          <Core.GdsButton
            width="max-content"
            rank="secondary"
            variant="notice"
            size="small"
            slot="footer"
            onClick={() => setActivePreset('custom')}
          >
            <Core.IconPencilSparkle slot="lead" size="s" />
            Customize
          </Core.GdsButton>
        </Core.GdsCardPattern01>
      </Core.GdsFlex>
    </Core.GdsCard>
  )
}
