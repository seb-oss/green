import React from 'react'
import { createComponent } from '@lit/react'
import { IconPlusSmall } from '@sebgroup/green-core/components/icon/icons/plus-small'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const PlusSmall = createComponent({
  tagName: getScopedTagName('gds-icon-plus-small'),
  elementClass: IconPlusSmall,
  react: React
})
