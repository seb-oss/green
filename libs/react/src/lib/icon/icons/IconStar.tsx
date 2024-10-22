import React from 'react'
import { createComponent } from '@lit/react'
import { IconStar as Icon } from '@sebgroup/green-core/components/icon/icons/star.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconStar = createComponent({
  tagName: getScopedTagName('gds-icon-star'),
  elementClass: Icon,
  react: React,
})
