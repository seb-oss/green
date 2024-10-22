import React from 'react'
import { createComponent } from '@lit/react'
import { IconTrendingThree as Icon } from '@sebgroup/green-core/components/icon/icons/trending-three.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconTrendingThree = createComponent({
  tagName: getScopedTagName('gds-icon-trending-three'),
  elementClass: Icon,
  react: React,
})
