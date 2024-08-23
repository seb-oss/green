import React from 'react'
import { createComponent } from '@lit/react'
import { IconTruck } from '@sebgroup/green-core/components/icon/icons/truck'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const Truck = createComponent({
  tagName: getScopedTagName('gds-icon-truck'),
  elementClass: IconTruck,
  react: React
})
