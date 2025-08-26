'use client'

import * as Core from '@sebgroup/green-core/react'

export default function Playground() {
  return (
    <Core.GdsCard
      width="100%"
      height="80vh"
      flex-direction="row"
      gap="s"
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
          <Core.GdsButton
            size="small"
            rank="tertiary"
            justify-content="flex-start"
          >
            <Core.IconPencilSparkle slot="lead" />
            Compose
          </Core.GdsButton>
        </Core.GdsFlex>
        <Core.GdsDivider color="subtle-01" />
      </Core.GdsCard>
      <Core.GdsFlex
        padding="0"
        flex-direction="column"
        justify-content="space-between"
        align-items="center"
        gap="s"
        flex="1"
      >
        <Core.GdsDiv flex="1" width="100%">
          <Core.GdsGrid columns="4" gap="m" width="100%">
            <Core.GdsCard></Core.GdsCard>
            <Core.GdsCard></Core.GdsCard>
            <Core.GdsCard></Core.GdsCard>
            <Core.GdsCard></Core.GdsCard>
            <Core.GdsCard></Core.GdsCard>
            <Core.GdsCard></Core.GdsCard>
            <Core.GdsCard></Core.GdsCard>
            <Core.GdsCard></Core.GdsCard>
            <Core.GdsCard></Core.GdsCard>
            <Core.GdsCard></Core.GdsCard>
            <Core.GdsCard></Core.GdsCard>
            <Core.GdsCard></Core.GdsCard>
            <Core.GdsCard></Core.GdsCard>
            <Core.GdsCard></Core.GdsCard>
            <Core.GdsCard></Core.GdsCard>
            <Core.GdsCard></Core.GdsCard>
          </Core.GdsGrid>
        </Core.GdsDiv>
        <Core.GdsCard
          variant="secondary"
          width="100%"
          flex-direction="row"
          align-items="center"
        >
          <Core.GdsFlex flex="1" align-items="center" gap="s">
            Toolbar
          </Core.GdsFlex>
          <Core.GdsFlex align-items="center" gap="s">
            <Core.GdsButton rank="tertiary" size="small">
              <Core.IconMoon />
            </Core.GdsButton>
            <Core.GdsSegmentedControl
              size="small"
              value="edit"
              width="max-content"
            >
              <Core.GdsSegment value="edit">
                <Core.GdsFlex align-items="center" gap="xs">
                  <Core.IconPencilSign size="m" />
                  Edit
                </Core.GdsFlex>
              </Core.GdsSegment>
              <Core.GdsSegment>
                <Core.GdsFlex align-items="center" gap="xs">
                  <Core.IconEyeOpen size="m" />
                  Preview
                </Core.GdsFlex>
              </Core.GdsSegment>
            </Core.GdsSegmentedControl>
          </Core.GdsFlex>
        </Core.GdsCard>
      </Core.GdsFlex>
    </Core.GdsCard>
  )
}
