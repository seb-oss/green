import React from 'react'
import { createComponent } from '@lit/react'

import { IconChargingStation as Icon } from '@sebgroup/green-core/components/icon/icons/charging-station.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconChargingStation = createComponent({
  tagName: getScopedTagName('gds-icon-charging-station'),
  elementClass: Icon,
  react: React,
})
