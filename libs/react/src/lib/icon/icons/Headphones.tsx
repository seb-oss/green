import React from 'react'
import { createComponent } from '@lit/react'
import { IconHeadphones } from '@sebgroup/green-core/components/icon/icons/headphones'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const Headphones = createComponent({
  tagName: getScopedTagName('gds-icon-headphones'),
  elementClass: IconHeadphones,
  react: React
})
