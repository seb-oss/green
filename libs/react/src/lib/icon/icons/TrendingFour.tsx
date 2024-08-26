import React from 'react'
import { createComponent } from '@lit/react'
import { IconTrendingFour } from '@sebgroup/green-core/components/icon/icons/trending-four'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const TrendingFour = createComponent({
  tagName: getScopedTagName('gds-icon-trending-four'),
  elementClass: IconTrendingFour,
  react: React
})
