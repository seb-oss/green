import React from 'react'
import { createComponent } from '@lit/react'
import { IconPowerPlant } from '@sebgroup/green-core/components/icon/icons/power-plant'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const PowerPlant = createComponent({
  tagName: getScopedTagName('gds-icon-power-plant'),
  elementClass: IconPowerPlant,
  react: React
})
