import React from 'react'
import { createComponent } from '@lit/react'
import { IconSquareGridCircle as Icon } from '@sebgroup/green-core/components/icon/icons/square-grid-circle.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconSquareGridCircle = createComponent({
  tagName: getScopedTagName('gds-icon-square-grid-circle'),
  elementClass: Icon,
  react: React,
})
