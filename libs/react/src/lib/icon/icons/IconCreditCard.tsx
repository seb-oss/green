import React from 'react'
import { createComponent } from '@lit/react'
import { IconCreditCard as Icon } from '@sebgroup/green-core/components/icon/icons/credit-card.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconCreditCard = createComponent({
  tagName: getScopedTagName('gds-icon-credit-card'),
  elementClass: Icon,
  react: React,
})
