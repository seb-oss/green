import React from 'react'
import { createComponent } from '@lit/react'

import { IconLightBulb as Icon } from '@sebgroup/green-core/components/icon/icons/light-bulb.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconLightBulb = createComponent({
  tagName: getScopedTagName('gds-icon-light-bulb'),
  elementClass: Icon,
  react: React,
})
