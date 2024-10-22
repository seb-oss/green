import React from 'react'
import { createComponent } from '@lit/react'

import { IconAirplaneUp as Icon } from '@sebgroup/green-core/components/icon/icons/airplane-up.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconAirplaneUp = createComponent({
  tagName: getScopedTagName('gds-icon-airplane-up'),
  elementClass: Icon,
  react: React,
})
