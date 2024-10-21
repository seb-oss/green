// badge.example.ts
import React from 'react'
import GdsMenuButton from '@sebgroup/green-react/src/core/menu-button'
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
