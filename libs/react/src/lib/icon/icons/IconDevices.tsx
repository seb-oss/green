import React from 'react'
import { createComponent } from '@lit/react'

import { IconDevices as Icon } from '@sebgroup/green-core/components/icon/icons/devices.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconDevices = createComponent({
  tagName: getScopedTagName('gds-icon-devices'),
  elementClass: Icon,
  react: React,
})
