import React from 'react'
import { createComponent } from '@lit/react'
import { IconBank } from '@sebgroup/green-core/components/icon/icons/bank'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const Bank = createComponent({
  tagName: getScopedTagName('gds-icon-bank'),
  elementClass: IconBank,
  react: React
})
