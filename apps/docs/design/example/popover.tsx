// eslint-disable-next-line
'use client'

import React from 'react'
import dynamic from 'next/dynamic'

// import { GdsButton } from '@sebgroup/green-react/core/button'
// import { GdsFlex } from '@sebgroup/green-react/core/flex'
// import { GdsPopover } from '@sebgroup/green-react/core/popover'
// import { GdsText } from '@sebgroup/green-react/core/text'
// import { IconChevronBottom } from '@sebgroup/green-react/src/lib/icon/icons/IconChevronBottom'

const GdsFlex = dynamic(() => import('@sebgroup/green-react/src/core/flex'), {
  ssr: false,
})

const GdsButton = dynamic(
  () => import('@sebgroup/green-react/src/core/button'),
  {
    ssr: false,
  },
)

const GdsPopover = dynamic(
  () => import('@sebgroup/green-react/src/core/popover'),
  {
    ssr: false,
  },
)

const GdsText = dynamic(() => import('@sebgroup/green-react/src/core/text'), {
  ssr: false,
})

const IconChevronBottom = dynamic(
  () =>
    import('@sebgroup/green-react/src/lib/icon/icons/IconChevronBottom').then(
      (mod) => mod.IconChevronBottom,
    ),
  {
    ssr: false,
  },
)

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
