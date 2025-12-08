'use client'

import { useMemo, useState } from 'react'

import * as Core from '@sebgroup/green-core/react'
import { useTable } from './table.provider'

export default function TablePresets() {
  const { setActivePreset } = useTable()
  const [searchQuery, setSearchQuery] = useState('')

  const presets = [
    { id: 'users', title: 'Users', description: '100 users with 5 columns' },
    {
      id: 'feedback',
      title: 'Feedback',
      description: '50 feedback entries with 4 columns',
    },
  ]

  const filteredPresets = useMemo(() => {
    if (!searchQuery) return presets
    return presets.filter(
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
              : `${presets.length} total presets`}
          </Core.GdsText>
        </Core.GdsFlex>
      </Core.GdsFlex>

      <Core.GdsFlex flex-direction="column" gap="m">
        {filteredPresets.length === 0 && (
          <Core.GdsText color="neutral-02" text-align="center" padding="xl">
            No presets found matching "{searchQuery}"
          </Core.GdsText>
        )}

        {filteredPresets.map((preset) => (
          <Core.GdsFlex
            key={preset.id}
            flex-direction="column"
            align-items="flex-end"
            gap="xs"
          >
            <Core.GdsCard
              variant="tertiary"
              padding="m"
              border-radius="l"
              width="100%"
            >
              <Core.GdsFlex flex-direction="column" gap="s">
                <Core.GdsText font-weight="bold">{preset.title}</Core.GdsText>
                <Core.GdsText font-size="detail" color="secondary">
                  {preset.description}
                </Core.GdsText>
              </Core.GdsFlex>
            </Core.GdsCard>
            <Core.GdsButton
              width="max-content"
              rank="tertiary"
              size="small"
              onClick={() => setActivePreset(preset.id as any)}
            >
              <Core.IconPencilWave slot="lead" size="s" />
              Load
            </Core.GdsButton>
          </Core.GdsFlex>
        ))}

        <Core.GdsDivider />

        <Core.GdsFlex flex-direction="column" align-items="flex-end" gap="xs">
          <Core.GdsCard
            variant="tertiary"
            padding="m"
            border-radius="l"
            width="100%"
          >
            <Core.GdsFlex flex-direction="column" gap="s">
              <Core.GdsText font-weight="bold">Custom</Core.GdsText>
              <Core.GdsText font-size="detail" color="secondary">
                Build your own table from scratch
              </Core.GdsText>
            </Core.GdsFlex>
          </Core.GdsCard>
          <Core.GdsButton
            width="max-content"
            rank="tertiary"
            size="small"
            onClick={() => setActivePreset('custom')}
          >
            <Core.IconPencilWave slot="lead" size="s" />
            Start Custom
          </Core.GdsButton>
        </Core.GdsFlex>
      </Core.GdsFlex>
    </Core.GdsCard>
  )
}
