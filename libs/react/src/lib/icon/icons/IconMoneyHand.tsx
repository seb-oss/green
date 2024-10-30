import React from 'react'
import { createComponent } from '@lit/react'

import { IconMoneyHand as Icon } from '@sebgroup/green-core/components/icon/icons/money-hand.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconMoneyHand = createComponent({
  tagName: getScopedTagName('gds-icon-money-hand'),
  elementClass: Icon,
  react: React,
})
