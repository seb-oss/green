// table/table.tsx
'use client'

import { useState } from 'react'

import * as Core from '@sebgroup/green-core/react'
import TableConfigurator from './table.config'
import { TableBuilderProvider, useTableBuilder } from './table.core'
import { FEEDBACK_PRESET, USERS_PRESET } from './table.data'
import TablePresets from './table.presents'
import TablePreview from './table.preview'

function TableBuilderContent() {
  const { config } = useTableBuilder()
  const [activeTab, setActiveTab] = useState<'presets' | 'configure'>('presets')
  const [showCode, setShowCode] = useState(true)

  return (
    <Core.GdsGrid
      columns={showCode ? '1; m{2}' : '1'}
      gap="m"
      padding="m"
      min-height="100vh"
    >
      {/* Left Panel */}
      <Core.GdsFlex
        flex-direction="column"
        gap="s"
        display={showCode ? 'flex' : 'none'}
      >
        <Core.GdsSegmentedControl
          size="small"
          width="100%"
          value={activeTab}
          onchange={(e: Event) => {
            const target = e.target as HTMLSelectElement
            setActiveTab(target.value as 'presets' | 'configure')
          }}
        >
          <Core.GdsSegment value="presets">Presets</Core.GdsSegment>
          <Core.GdsSegment value="configure">Configure</Core.GdsSegment>
        </Core.GdsSegmentedControl>

        <Core.GdsCard
          variant="secondary"
          padding="m"
          height="calc(100vh - 10rem)"
          overflow="auto"
        >
          {activeTab === 'presets' ? <TablePresets /> : <TableConfigurator />}
        </Core.GdsCard>
      </Core.GdsFlex>

      {/* Right Panel - Preview */}
      <Core.GdsFlex flex-direction="column" gap="s">
        <Core.GdsFlex align-items="center" justify-content="space-between">
          <Core.GdsText font="heading-s">Preview</Core.GdsText>
          <Core.GdsFlex gap="s">
            <Core.GdsButton
              rank="tertiary"
              size="small"
              onClick={() => setShowCode(!showCode)}
            >
              <Core.IconCodeBrackets size="m" />
            </Core.GdsButton>
            <Core.GdsButton
              rank="tertiary"
              size="small"
              onClick={() =>
                navigator.clipboard.writeText(window.location.href)
              }
            >
              <Core.IconChainLink size="m" />
              Copy URL
            </Core.GdsButton>
          </Core.GdsFlex>
        </Core.GdsFlex>

        <Core.GdsCard
          variant="secondary"
          padding="m"
          height="calc(100vh - 10rem)"
          overflow="auto"
        >
          <TablePreview />
        </Core.GdsCard>
      </Core.GdsFlex>
    </Core.GdsGrid>
  )
}

export default function TableBuilder() {
  return (
    <TableBuilderProvider>
      <Core.GdsTheme>
        <TableBuilderContent />
      </Core.GdsTheme>
    </TableBuilderProvider>
  )
}
