import React from 'react'
import { createComponent } from '@lit/react'
import { IconShoppingBag as Icon } from '@sebgroup/green-core/components/icon/icons/shopping-bag.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconShoppingBag = createComponent({
  tagName: getScopedTagName('gds-icon-shopping-bag'),
  elementClass: Icon,
  react: React,
})
