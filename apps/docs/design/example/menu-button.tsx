// eslint-disable-next-line
'use client'

import React from 'react'
import dynamic from 'next/dynamic'

// import { GdsMenuButton } from '@sebgroup/green-react/core/menu-button'
// import { IconMagnifyingGlass } from '@sebgroup/green-react/src/lib/icon/icons/IconMagnifyingGlass'

const GdsMenuButton = dynamic(
  () => import('@sebgroup/green-react/src/core/menu-button'),
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
