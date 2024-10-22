'use client'

import React from 'react'
import { GdsContextMenu } from '@sebgroup/green-react/core/context-menu'
import { GdsMenuItem } from '@sebgroup/green-react/core/menu-item'

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
