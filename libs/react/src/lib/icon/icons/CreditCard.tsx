import React from 'react'
import { createComponent } from '@lit/react'
import { IconCreditCard } from '@sebgroup/green-core/components/icon/icons/credit-card'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const CreditCard = createComponent({
  tagName: getScopedTagName('gds-icon-credit-card'),
  elementClass: IconCreditCard,
  react: React
})
