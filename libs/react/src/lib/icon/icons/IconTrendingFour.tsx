import React from 'react'
import { createComponent } from '@lit/react'
import { IconTrendingFour as Icon } from '@sebgroup/green-core/components/icon/icons/trending-four.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconTrendingFour = createComponent({
  tagName: getScopedTagName('gds-icon-trending-four'),
  elementClass: Icon,
  react: React,
})
