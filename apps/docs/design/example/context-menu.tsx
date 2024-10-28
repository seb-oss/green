'use client'

import React from 'react'
import dynamic from 'next/dynamic'

const GdsContextMenu = dynamic(
  () =>
    import('@sebgroup/green-react/core/context-menu').then(
      (mod) => mod.GdsContextMenu,
    ),
  {
    ssr: false,
  },
)

const GdsMenuItem = dynamic(
  () =>
    import('@sebgroup/green-react/core/menu-item').then(
      (mod) => mod.GdsMenuItem,
    ),
  {
    ssr: false,
  },
)

const ContextMenu = () => (
  <>
    <GdsContextMenu>
      <GdsMenuItem>Action 1</GdsMenuItem>
      <GdsMenuItem>Action 2</GdsMenuItem>
      <GdsMenuItem>Action 3</GdsMenuItem>
    </GdsContextMenu>
  </>
)

export default ContextMenu
