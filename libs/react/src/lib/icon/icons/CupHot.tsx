import React from 'react'
import { createComponent } from '@lit/react'
import { IconCupHot } from '@sebgroup/green-core/components/icon/icons/cup-hot'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const CupHot = createComponent({
  tagName: getScopedTagName('gds-icon-cup-hot'),
  elementClass: IconCupHot,
  react: React
})
