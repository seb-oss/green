import React from 'react'
import { createComponent } from '@lit/react'
import { IconCircleMinus } from '@sebgroup/green-core/components/icon/icons/circle-minus'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const CircleMinus = createComponent({
  tagName: getScopedTagName('gds-icon-circle-minus'),
  elementClass: IconCircleMinus,
  react: React
})
