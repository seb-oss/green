import React from 'react'
import { createComponent } from '@lit/react'

import { IconCrossLarge as Icon } from '@sebgroup/green-core/components/icon/icons/cross-large.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconCrossLarge = createComponent({
  tagName: getScopedTagName('gds-icon-cross-large'),
  elementClass: Icon,
  react: React,
})
