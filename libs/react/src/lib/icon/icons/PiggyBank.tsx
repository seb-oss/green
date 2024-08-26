import React from 'react'
import { createComponent } from '@lit/react'
import { IconPiggyBank } from '@sebgroup/green-core/components/icon/icons/piggy-bank'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const PiggyBank = createComponent({
  tagName: getScopedTagName('gds-icon-piggy-bank'),
  elementClass: IconPiggyBank,
  react: React
})
