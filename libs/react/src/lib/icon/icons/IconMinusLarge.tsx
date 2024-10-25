import React from 'react'
import { createComponent } from '@lit/react'

import { IconMinusLarge as Icon } from '@sebgroup/green-core/components/icon/icons/minus-large.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconMinusLarge = createComponent({
  tagName: getScopedTagName('gds-icon-minus-large'),
  elementClass: Icon,
  react: React,
})
