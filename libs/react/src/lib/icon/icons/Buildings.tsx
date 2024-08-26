import React from 'react'
import { createComponent } from '@lit/react'
import { IconBuildings } from '@sebgroup/green-core/components/icon/icons/buildings'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const Buildings = createComponent({
  tagName: getScopedTagName('gds-icon-buildings'),
  elementClass: IconBuildings,
  react: React
})
