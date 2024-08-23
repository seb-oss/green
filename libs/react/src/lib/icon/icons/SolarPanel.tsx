import React from 'react'
import { createComponent } from '@lit/react'
import { IconSolarPanel } from '@sebgroup/green-core/components/icon/icons/solar-panel'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const SolarPanel = createComponent({
  tagName: getScopedTagName('gds-icon-solar-panel'),
  elementClass: IconSolarPanel,
  react: React
})
