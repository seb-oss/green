import React from 'react'
import { createComponent } from '@lit/react'
import { IconHeart as Icon } from '@sebgroup/green-core/components/icon/icons/heart.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconHeart = createComponent({
  tagName: getScopedTagName('gds-icon-heart'),
  elementClass: Icon,
  react: React,
})
