'use client'

import React from 'react'
import dynamic from 'next/dynamic'

const GdsMenuButton = dynamic(
  () =>
    import('@sebgroup/green-react/core/menu-button').then(
      (mod) => mod.GdsMenuButton,
    ),
  {
    ssr: false,
  },
)

const IconMagnifyingGlass = dynamic(
  () =>
    import('@sebgroup/green-react/src/lib/icon/icons/IconMagnifyingGlass').then(
      (mod) => mod.IconMagnifyingGlass,
    ),
  {
    ssr: false,
  },
)

const MenuButton = () => (
  <>
    <GdsMenuButton>
      <IconMagnifyingGlass slot="lead"></IconMagnifyingGlass>
      Search
    </GdsMenuButton>
  </>
)

export default MenuButton
