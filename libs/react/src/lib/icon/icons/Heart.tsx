import React from 'react'
import { createComponent } from '@lit/react'
import { IconHeart } from '@sebgroup/green-core/components/icon/icons/heart'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const Heart = createComponent({
  tagName: getScopedTagName('gds-icon-heart'),
  elementClass: IconHeart,
  react: React
})
