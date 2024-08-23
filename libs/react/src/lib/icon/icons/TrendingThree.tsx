import React from 'react'
import { createComponent } from '@lit/react'
import { IconTrendingThree } from '@sebgroup/green-core/components/icon/icons/trending-three'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const TrendingThree = createComponent({
  tagName: getScopedTagName('gds-icon-trending-three'),
  elementClass: IconTrendingThree,
  react: React
})
