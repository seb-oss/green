import React from 'react'
import { createComponent } from '@lit/react'
import { IconCar } from '@sebgroup/green-core/components/icon/icons/car'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const Car = createComponent({
  tagName: getScopedTagName('gds-icon-car'),
  elementClass: IconCar,
  react: React
})
