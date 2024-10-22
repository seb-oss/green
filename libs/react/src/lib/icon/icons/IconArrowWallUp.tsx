import React from 'react'
import { createComponent } from '@lit/react'
import { IconArrowWallUp as Icon } from '@sebgroup/green-core/components/icon/icons/arrow-wall-up.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconArrowWallUp = createComponent({
  tagName: getScopedTagName('gds-icon-arrow-wall-up'),
  elementClass: Icon,
  react: React,
})
