import React from 'react'
import { createComponent } from '@lit/react'
import { IconTrendingTwo as Icon } from '@sebgroup/green-core/components/icon/icons/trending-two.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconTrendingTwo = createComponent({
  tagName: getScopedTagName('gds-icon-trending-two'),
  elementClass: Icon,
  react: React,
})
