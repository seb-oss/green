'use client'

import * as Core from '@sebgroup/green-core/react'

export default function Playground() {
  return (
    <Core.GdsCard
      width="100%"
      height="80vh"
      flex-direction="row"
      gap="xl"
      border-color="subtle-01"
      background="none"
      data-pattern
      padding="xs"
      border-radius="m"
    >
      <Core.GdsCard variant="secondary" width="280px" gap="s" padding="0">
        <Core.GdsFlex flex-direction="column" padding="l m" gap="s">
          <Core.GdsButton
            size="small"
            rank="tertiary"
            justify-content="flex-start"
          >
            <Core.IconBrush slot="lead" />
            Color
          </Core.GdsButton>
          <Core.GdsButton
            size="small"
            rank="tertiary"
            justify-content="flex-start"
          >
            <Core.IconTextEdit slot="lead" />
            Typography
          </Core.GdsButton>
          <Core.GdsButton
            size="small"
            rank="tertiary"
            justify-content="flex-start"
          >
            <Core.IconFullscreen slot="lead" />
            Spacing
          </Core.GdsButton>
          <Core.GdsButton
            size="small"
            rank="tertiary"
            justify-content="flex-start"
          >
            <Core.IconSquareGridCircle slot="lead" />
            Grid
          </Core.GdsButton>
        </Core.GdsFlex>
        <Core.GdsDivider color="subtle-01" />
      </Core.GdsCard>
      <Core.GdsFlex padding="s">
        <span>playground contents</span>
      </Core.GdsFlex>
    </Core.GdsCard>
  )
}
