'use client'

import { useState } from 'react'

import * as Core from '@sebgroup/green-core/react'
import TableCode from './table.code'
import TableEdit from './table.edit'
import TablePresets from './table.presets'
import TablePreview from './table.preview'
import { TableProvider } from './table.provider'
import TableSettings from './table.settings'

function TableContent() {
  const [leftTab, setLeftTab] = useState<'presets' | 'edit' | 'settings'>(
    'presets',
  )
  const [rightTab, setRightTab] = useState<'preview' | 'code'>('preview')
  const [showLeft, setShowLeft] = useState(true)
  const [fullscreen, setFullscreen] = useState(false)

  return (
    <Core.GdsGrid
      columns={!showLeft ? '1' : '1; m{2}'}
      gap={fullscreen ? '0' : 'xs'}
      min-height="100vh"
      padding="0"
      width="100%"
    >
      {/* Left Panel */}
      <Core.GdsCard
        background="none"
        display={showLeft ? 'flex' : 'none'}
        flex-direction="column"
        gap={fullscreen ? '3xs' : '2xs'}
        position="relative"
        min-width="100%"
        padding="0"
        border-radius={fullscreen ? '0' : 'l'}
        order="1; s{0}"
      >
        <Core.GdsFlex
          align-items="center"
          gap="s"
          width="100%"
          height="3xl"
          padding={fullscreen ? '0' : '0'}
          justify-content="space-between"
        >
          <Core.GdsSegmentedControl
            width="max-content"
            value={leftTab}
            size="small"
            onchange={(e: Event) => {
              const target = e.target as HTMLSelectElement
              setLeftTab(target.value as any)
            }}
          >
            <Core.GdsSegment value="presets">Presets</Core.GdsSegment>
            <Core.GdsSegment value="edit">Edit</Core.GdsSegment>
            <Core.GdsSegment value="settings">Settings</Core.GdsSegment>
          </Core.GdsSegmentedControl>
        </Core.GdsFlex>

        {leftTab === 'presets' && <TablePresets />}
        <Core.GdsCard
          display={leftTab === 'presets' ? 'none' : 'flex'}
          variant="secondary"
          height="100%"
          min-height="50vh"
          overflow="auto"
          border-color="subtle-01"
          padding="m"
          border-radius={fullscreen ? 'xs' : 'm'}
          position="relative"
          width="100%"
        >
          {leftTab === 'edit' && <TableEdit />}
          {leftTab === 'settings' && <TableSettings />}
        </Core.GdsCard>
      </Core.GdsCard>

      {/* Right Panel */}
      <Core.GdsCard
        background="none"
        align-items="center"
        gap={fullscreen ? '3xs' : '2xs'}
        padding="0"
        border-radius={fullscreen ? '0' : 'l'}
      >
        <Core.GdsFlex
          align-items="center"
          gap={fullscreen ? '0' : 's'}
          justify-content="flex-end"
          width="100%"
          height="3xl"
          padding={fullscreen ? '0' : '0 m'}
        >
          <Core.GdsButton
            rank="tertiary"
            size="small"
            onClick={() => setFullscreen(!fullscreen)}
          >
            <Core.IconFullscreen size="m" />
          </Core.GdsButton>

          <Core.GdsSegmentedControl
            width="max-content"
            value={rightTab}
            size="small"
            onchange={(e: Event) => {
              const target = e.target as HTMLSelectElement
              setRightTab(target.value as any)
            }}
          >
            <Core.GdsSegment value="preview">
              <Core.GdsFlex>
                <Core.IconEyeOpen />
              </Core.GdsFlex>
            </Core.GdsSegment>
            <Core.GdsSegment value="code">
              <Core.GdsFlex>
                <Core.IconCodeBrackets />
              </Core.GdsFlex>
            </Core.GdsSegment>
          </Core.GdsSegmentedControl>

          {/*     <Core.GdsButton
            rank="tertiary"
            size="small"
            onClick={() => setShowLeft(!showLeft)}
          >
            <Core.IconCodeBrackets size="m" />
          </Core.GdsButton> */}
        </Core.GdsFlex>

        {rightTab === 'preview' ? <TablePreview /> : <TableCode />}
      </Core.GdsCard>
    </Core.GdsGrid>
  )
}

export default function Table() {
  return (
    <TableProvider>
      <Core.GdsTheme>
        <TableContent />
      </Core.GdsTheme>
    </TableProvider>
  )
}
