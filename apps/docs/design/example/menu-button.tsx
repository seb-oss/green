'use client'

import React from 'react'
import { GdsMenuButton } from '@sebgroup/green-react/core/menu-button'
import { IconMagnifyingGlass } from '@sebgroup/green-react/src/lib/icon/icons/IconMagnifyingGlass'

const MenuButton = () => (
  <>
    <GdsMenuButton>
      <IconMagnifyingGlass slot="lead"></IconMagnifyingGlass>
      Search
    </GdsMenuButton>
  </>
)

export default MenuButton
