import React from 'react'
import { createComponent } from '@lit/react'
import { IconDevices } from '@sebgroup/green-core/components/icon/icons/devices'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const Devices = createComponent({
  tagName: getScopedTagName('gds-icon-devices'),
  elementClass: IconDevices,
  react: React
})
