import React from 'react'
import { createComponent } from '@lit/react'
import { IconPlusLarge as Icon } from '@sebgroup/green-core/components/icon/icons/plus-large.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconPlusLarge = createComponent({
  tagName: getScopedTagName('gds-icon-plus-large'),
  elementClass: Icon,
  react: React,
})
