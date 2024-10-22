import React from 'react'
import { createComponent } from '@lit/react'
import { IconSquareInfo as Icon } from '@sebgroup/green-core/components/icon/icons/square-info.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconSquareInfo = createComponent({
  tagName: getScopedTagName('gds-icon-square-info'),
  elementClass: Icon,
  react: React,
})
