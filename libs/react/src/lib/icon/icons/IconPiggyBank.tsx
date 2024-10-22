import React from 'react'
import { createComponent } from '@lit/react'
import { IconPiggyBank as Icon } from '@sebgroup/green-core/components/icon/icons/piggy-bank.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconPiggyBank = createComponent({
  tagName: getScopedTagName('gds-icon-piggy-bank'),
  elementClass: Icon,
  react: React,
})
