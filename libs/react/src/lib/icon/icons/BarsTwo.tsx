import React from 'react'
import { createComponent } from '@lit/react'
import { IconBarsTwo } from '@sebgroup/green-core/components/icon/icons/bars-two'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const BarsTwo = createComponent({
  tagName: getScopedTagName('gds-icon-bars-two'),
  elementClass: IconBarsTwo,
  react: React
})
