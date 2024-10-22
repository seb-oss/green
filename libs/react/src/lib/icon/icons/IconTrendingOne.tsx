import React from 'react'
import { createComponent } from '@lit/react'
import { IconTrendingOne as Icon } from '@sebgroup/green-core/components/icon/icons/trending-one.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconTrendingOne = createComponent({
  tagName: getScopedTagName('gds-icon-trending-one'),
  elementClass: Icon,
  react: React,
})
