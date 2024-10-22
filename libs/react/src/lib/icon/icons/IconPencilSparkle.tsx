import React from 'react'
import { createComponent } from '@lit/react'

import { IconPencilSparkle as Icon } from '@sebgroup/green-core/components/icon/icons/pencil-sparkle.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconPencilSparkle = createComponent({
  tagName: getScopedTagName('gds-icon-pencil-sparkle'),
  elementClass: Icon,
  react: React,
})
