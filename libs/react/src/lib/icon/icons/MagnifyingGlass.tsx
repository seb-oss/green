import React from 'react'
import { createComponent } from '@lit/react'
import { IconMagnifyingGlass } from '@sebgroup/green-core/components/icon/icons/magnifying-glass'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const MagnifyingGlass = createComponent({
  tagName: getScopedTagName('gds-icon-magnifying-glass'),
  elementClass: IconMagnifyingGlass,
  react: React
})
