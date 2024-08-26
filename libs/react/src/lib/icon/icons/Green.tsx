import React from 'react'
import { createComponent } from '@lit/react'
import { IconGreen } from '@sebgroup/green-core/components/icon/icons/green'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const Green = createComponent({
  tagName: getScopedTagName('gds-icon-green'),
  elementClass: IconGreen,
  react: React
})
