'use client'

import { GdsMenuButton } from '$/import/components'
import { IconMagnifyingGlass } from '$/import/icons'

const MenuButton = () => (
  <GdsMenuButton>
    <IconMagnifyingGlass slot="lead" />
    Search
  </GdsMenuButton>
)

export default MenuButton
