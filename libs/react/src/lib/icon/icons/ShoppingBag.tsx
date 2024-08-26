import React from 'react'
import { createComponent } from '@lit/react'
import { IconShoppingBag } from '@sebgroup/green-core/components/icon/icons/shopping-bag'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const ShoppingBag = createComponent({
  tagName: getScopedTagName('gds-icon-shopping-bag'),
  elementClass: IconShoppingBag,
  react: React
})
