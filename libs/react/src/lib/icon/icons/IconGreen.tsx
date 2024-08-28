import React from 'react'
import { createComponent } from '@lit/react'
import { IconGreen as Icon } from '@sebgroup/green-core/components/icon/icons/green.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconGreen = createComponent({
  tagName: getScopedTagName('gds-icon-green'),
  elementClass: Icon,
  react: React
})
