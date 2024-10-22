import React from 'react'
import { createComponent } from '@lit/react'
import { IconPlusSmall as Icon } from '@sebgroup/green-core/components/icon/icons/plus-small.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconPlusSmall = createComponent({
  tagName: getScopedTagName('gds-icon-plus-small'),
  elementClass: Icon,
  react: React,
})
