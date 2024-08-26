import React from 'react'
import { createComponent } from '@lit/react'
import { IconBanknote } from '@sebgroup/green-core/components/icon/icons/banknote'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const Banknote = createComponent({
  tagName: getScopedTagName('gds-icon-banknote'),
  elementClass: IconBanknote,
  react: React
})
