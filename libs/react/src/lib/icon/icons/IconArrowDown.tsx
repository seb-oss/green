import React from 'react'
import { createComponent } from '@lit/react'
import { IconArrowDown as Icon } from '@sebgroup/green-core/components/icon/icons/arrow-down'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconArrowDown = createComponent({
  tagName: getScopedTagName('gds-icon-arrow-down'),
  elementClass: Icon,
  react: React
})
