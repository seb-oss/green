import React from 'react'
import { createComponent } from '@lit/react'
import { IconMoon } from '@sebgroup/green-core/components/icon/icons/moon'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const Moon = createComponent({
  tagName: getScopedTagName('gds-icon-moon'),
  elementClass: IconMoon,
  react: React
})
