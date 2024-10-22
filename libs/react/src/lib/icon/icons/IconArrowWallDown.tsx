import React from 'react'
import { createComponent } from '@lit/react'
import { IconArrowWallDown as Icon } from '@sebgroup/green-core/components/icon/icons/arrow-wall-down.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconArrowWallDown = createComponent({
  tagName: getScopedTagName('gds-icon-arrow-wall-down'),
  elementClass: Icon,
  react: React,
})
