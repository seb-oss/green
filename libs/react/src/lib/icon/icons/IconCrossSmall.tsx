import React from 'react'
import { createComponent } from '@lit/react'

import { IconCrossSmall as Icon } from '@sebgroup/green-core/components/icon/icons/cross-small.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconCrossSmall = createComponent({
  tagName: getScopedTagName('gds-icon-cross-small'),
  elementClass: Icon,
  react: React,
})
