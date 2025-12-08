// table/table.presets.tsx
'use client'

import * as Core from '@sebgroup/green-core/react'
import { useTableBuilder } from './table.core'

export default function TablePresets() {
  const { loadPreset } = useTableBuilder()

  const presets = [
    {
      id: 'users',
      title: 'Users Table',
      description: 'Complete user management table with all features',
      columns: [
        'ID',
        'Name',
        'Email',
        'Role',
        'Status',
        'Department',
        'Amount',
      ],
    },
    {
      id: 'feedback',
      title: 'Feedback Table',
      description: 'Simple feedback collection table',
      columns: ['Name', 'Feedback', 'Department', 'Status'],
    },
  ]

  return (
    <Core.GdsFlex flex-direction="column" gap="m">
      <Core.GdsText font="heading-s">Choose a Preset</Core.GdsText>

      {presets.map((preset) => (
        <Core.GdsCard
          key={preset.id}
          variant="tertiary"
          padding="m"
          border-radius="m"
        >
          <Core.GdsFlex flex-direction="column" gap="s">
            <Core.GdsText font-weight="bold">{preset.title}</Core.GdsText>
            <Core.GdsText font-size="detail" color="secondary">
              {preset.description}
            </Core.GdsText>

            <Core.GdsFlex gap="2xs" flex-wrap="wrap">
              {preset.columns.map((col) => (
                <Core.GdsBadge key={col} size="small">
                  {col}
                </Core.GdsBadge>
              ))}
            </Core.GdsFlex>

            <Core.GdsButton
              size="small"
              onClick={() => loadPreset(preset.id as 'users' | 'feedback')}
            >
              Load Preset
            </Core.GdsButton>
          </Core.GdsFlex>
        </Core.GdsCard>
      ))}

      <Core.GdsDivider />

      <Core.GdsCard variant="tertiary" padding="m" border-radius="m">
        <Core.GdsFlex flex-direction="column" gap="s">
          <Core.GdsText font-weight="bold">Custom Table</Core.GdsText>
          <Core.GdsText font-size="detail" color="secondary">
            Start from scratch and build your own table
          </Core.GdsText>
          <Core.GdsButton
            size="small"
            rank="secondary"
            onClick={() => loadPreset('custom' as any)}
          >
            Start Custom
          </Core.GdsButton>
        </Core.GdsFlex>
      </Core.GdsCard>
    </Core.GdsFlex>
  )
}
