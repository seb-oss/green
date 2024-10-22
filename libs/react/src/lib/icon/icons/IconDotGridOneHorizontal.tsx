import React from 'react'
import { createComponent } from '@lit/react'

import { IconDotGridOneHorizontal as Icon } from '@sebgroup/green-core/components/icon/icons/dot-grid-one-horizontal.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconDotGridOneHorizontal = createComponent({
  tagName: getScopedTagName('gds-icon-dot-grid-one-horizontal'),
  elementClass: Icon,
  react: React,
})
