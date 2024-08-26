import React from 'react'
import { createComponent } from '@lit/react'
import { IconDollar } from '@sebgroup/green-core/components/icon/icons/dollar'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const Dollar = createComponent({
  tagName: getScopedTagName('gds-icon-dollar'),
  elementClass: IconDollar,
  react: React
})
