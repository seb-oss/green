import React from 'react'
import { createComponent } from '@lit/react'

import { IconCircleX as Icon } from '@sebgroup/green-core/components/icon/icons/circle-x.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconCircleX = createComponent({
  tagName: getScopedTagName('gds-icon-circle-x'),
  elementClass: Icon,
  react: React,
})
