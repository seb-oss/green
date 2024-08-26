import React from 'react'
import { createComponent } from '@lit/react'
import { IconMoneyHand } from '@sebgroup/green-core/components/icon/icons/money-hand'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const MoneyHand = createComponent({
  tagName: getScopedTagName('gds-icon-money-hand'),
  elementClass: IconMoneyHand,
  react: React
})
