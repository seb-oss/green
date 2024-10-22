import React from 'react'
import { createComponent } from '@lit/react'

import { IconDotGridTwo as Icon } from '@sebgroup/green-core/components/icon/icons/dot-grid-two.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconDotGridTwo = createComponent({
  tagName: getScopedTagName('gds-icon-dot-grid-two'),
  elementClass: Icon,
  react: React,
})
