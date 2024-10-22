import React from 'react'
import { createComponent } from '@lit/react'

import { IconTruck as Icon } from '@sebgroup/green-core/components/icon/icons/truck.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconTruck = createComponent({
  tagName: getScopedTagName('gds-icon-truck'),
  elementClass: Icon,
  react: React,
})
