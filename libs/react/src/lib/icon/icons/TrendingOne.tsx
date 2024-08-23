import React from 'react'
import { createComponent } from '@lit/react'
import { IconTrendingOne } from '@sebgroup/green-core/components/icon/icons/trending-one'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const TrendingOne = createComponent({
  tagName: getScopedTagName('gds-icon-trending-one'),
  elementClass: IconTrendingOne,
  react: React
})
