import React from 'react'
import { createComponent } from '@lit/react'
import { IconBank as Icon } from '@sebgroup/green-core/components/icon/icons/bank.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconBank = createComponent({
  tagName: getScopedTagName('gds-icon-bank'),
  elementClass: Icon,
  react: React,
})
