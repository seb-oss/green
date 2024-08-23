import React from 'react'
import { createComponent } from '@lit/react'
import { IconPoop } from '@sebgroup/green-core/components/icon/icons/poop'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const Poop = createComponent({
  tagName: getScopedTagName('gds-icon-poop'),
  elementClass: IconPoop,
  react: React
})
