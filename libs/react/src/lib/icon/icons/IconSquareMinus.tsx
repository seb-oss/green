import React from 'react'
import { createComponent } from '@lit/react'
import { IconSquareMinus as Icon } from '@sebgroup/green-core/components/icon/icons/square-minus.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconSquareMinus = createComponent({
  tagName: getScopedTagName('gds-icon-square-minus'),
  elementClass: Icon,
  react: React,
})
