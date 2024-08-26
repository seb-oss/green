import React from 'react'
import { createComponent } from '@lit/react'
import { IconChargingStation } from '@sebgroup/green-core/components/icon/icons/charging-station'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const ChargingStation = createComponent({
  tagName: getScopedTagName('gds-icon-charging-station'),
  elementClass: IconChargingStation,
  react: React
})
