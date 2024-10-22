import React from 'react'
import { createComponent } from '@lit/react'

import { IconBuildings as Icon } from '@sebgroup/green-core/components/icon/icons/buildings.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconBuildings = createComponent({
  tagName: getScopedTagName('gds-icon-buildings'),
  elementClass: Icon,
  react: React,
})
