import React from 'react'
import { createComponent } from '@lit/react'

import { IconMagnifyingGlass as Icon } from '@sebgroup/green-core/components/icon/icons/magnifying-glass.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconMagnifyingGlass = createComponent({
  tagName: getScopedTagName('gds-icon-magnifying-glass'),
  elementClass: Icon,
  react: React,
})
