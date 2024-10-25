import React from 'react'
import { createComponent } from '@lit/react'

import { IconPowerPlant as Icon } from '@sebgroup/green-core/components/icon/icons/power-plant.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconPowerPlant = createComponent({
  tagName: getScopedTagName('gds-icon-power-plant'),
  elementClass: Icon,
  react: React,
})
