import React from 'react'
import { createComponent } from '@lit/react'
import { IconPlusLarge } from '@sebgroup/green-core/components/icon/icons/plus-large'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const PlusLarge = createComponent({
  tagName: getScopedTagName('gds-icon-plus-large'),
  elementClass: IconPlusLarge,
  react: React
})
