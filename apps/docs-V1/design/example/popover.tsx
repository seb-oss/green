'use client'

import React from 'react'
import { GdsButton, GdsFlex, GdsPopover, GdsText } from '$/import/components'
import { IconChevronBottom } from '$/import/icons'

const Popover = () => (
  <GdsPopover>
    <GdsButton rank="secondary" slot="trigger">
      Popover
      <IconChevronBottom slot="trail" />
    </GdsButton>
    <GdsFlex padding="xl">
      <GdsText>Popover content</GdsText>
    </GdsFlex>
  </GdsPopover>
)

export default Popover
