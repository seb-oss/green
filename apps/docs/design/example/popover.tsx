import React from 'react'
import GdsFlex from '@sebgroup/green-react/src/core/flex'
import GdsText from '@sebgroup/green-react/src/core/text'
import GdsPopover from '@sebgroup/green-react/src/core/popover'
import GdsButton from '@sebgroup/green-react/src/core/button'
import { IconChevronBottom } from '@sebgroup/green-react/src/lib/icon/icons/IconChevronBottom'

const Popover = () => (
  <>
    <GdsPopover>
      <GdsButton rank="secondary" slot="trigger">
        Popover
        <IconChevronBottom slot="trail"></IconChevronBottom>
      </GdsButton>
      <GdsFlex padding="xl">
        <GdsText>Popover content</GdsText>
      </GdsFlex>
    </GdsPopover>
  </>
)

export default Popover
