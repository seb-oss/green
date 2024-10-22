import React from 'react'
import { createComponent } from '@lit/react'
import { IconArrowWallRight as Icon } from '@sebgroup/green-core/components/icon/icons/arrow-wall-right.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconArrowWallRight = createComponent({
  tagName: getScopedTagName('gds-icon-arrow-wall-right'),
  elementClass: Icon,
  react: React,
})
