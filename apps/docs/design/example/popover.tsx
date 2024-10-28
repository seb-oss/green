'use client'

import React from 'react'
import dynamic from 'next/dynamic'

const GdsFlex = dynamic(
  () => import('@sebgroup/green-react/core/flex').then((mod) => mod.GdsFlex),
  {
    ssr: false,
  },
)

const GdsButton = dynamic(
  () =>
    import('@sebgroup/green-react/core/button').then((mod) => mod.GdsButton),
  {
    ssr: false,
  },
)

const GdsPopover = dynamic(
  () =>
    import('@sebgroup/green-react/core/popover').then((mod) => mod.GdsPopover),
  {
    ssr: false,
  },
)

const GdsText = dynamic(
  () => import('@sebgroup/green-react/core/text').then((mod) => mod.GdsText),
  {
    ssr: false,
  },
)

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
