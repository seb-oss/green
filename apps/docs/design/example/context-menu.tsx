'use client'

import React from 'react'
import dynamic from 'next/dynamic'

// import { GdsContextMenu } from '@sebgroup/green-react/core/context-menu'
// import { GdsMenuItem } from '@sebgroup/green-react/core/menu-item'

const GdsContextMenu = dynamic(
  () => import('@sebgroup/green-react/src/core/context-menu'),
  {
    ssr: false,
  },
)

const GdsMenuItem = dynamic(
  () => import('@sebgroup/green-react/src/core/menu-item'),
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
