import React from 'react'
import { createComponent } from '@lit/react'
import { IconPinch } from '@sebgroup/green-core/components/icon/icons/pinch'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const Pinch = createComponent({
  tagName: getScopedTagName('gds-icon-pinch'),
  elementClass: IconPinch,
  react: React
})
