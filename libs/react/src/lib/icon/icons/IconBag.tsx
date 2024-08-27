import React from 'react'
import { createComponent } from '@lit/react'
import { IconBag as Icon } from '@sebgroup/green-core/components/icon/icons/bag'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconBag = createComponent({
  tagName: getScopedTagName('gds-icon-bag'),
  elementClass: Icon,
  react: React
})
