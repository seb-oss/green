import React from 'react'
import { createComponent } from '@lit/react'

import { IconCar as Icon } from '@sebgroup/green-core/components/icon/icons/car.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconCar = createComponent({
  tagName: getScopedTagName('gds-icon-car'),
  elementClass: Icon,
  react: React,
})
