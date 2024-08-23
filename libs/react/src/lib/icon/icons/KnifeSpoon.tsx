import React from 'react'
import { createComponent } from '@lit/react'
import { IconKnifeSpoon } from '@sebgroup/green-core/components/icon/icons/knife-spoon'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const KnifeSpoon = createComponent({
  tagName: getScopedTagName('gds-icon-knife-spoon'),
  elementClass: IconKnifeSpoon,
  react: React
})
