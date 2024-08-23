import React from 'react'
import { createComponent } from '@lit/react'
import { IconTrendingTwo } from '@sebgroup/green-core/components/icon/icons/trending-two'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const TrendingTwo = createComponent({
  tagName: getScopedTagName('gds-icon-trending-two'),
  elementClass: IconTrendingTwo,
  react: React
})
