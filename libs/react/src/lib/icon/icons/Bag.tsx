import React from 'react'
import { createComponent } from '@lit/react'
import { IconBag } from '@sebgroup/green-core/components/icon/icons/bag'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const Bag = createComponent({
  tagName: getScopedTagName('gds-icon-bag'),
  elementClass: IconBag,
  react: React
})
