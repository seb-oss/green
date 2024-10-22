import React from 'react'
import { createComponent } from '@lit/react'
import { IconCirclesThree as Icon } from '@sebgroup/green-core/components/icon/icons/circles-three.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconCirclesThree = createComponent({
  tagName: getScopedTagName('gds-icon-circles-three'),
  elementClass: Icon,
  react: React,
})
