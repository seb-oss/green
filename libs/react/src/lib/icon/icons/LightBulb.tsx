import React from 'react'
import { createComponent } from '@lit/react'
import { IconLightBulb } from '@sebgroup/green-core/components/icon/icons/light-bulb'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const LightBulb = createComponent({
  tagName: getScopedTagName('gds-icon-light-bulb'),
  elementClass: IconLightBulb,
  react: React
})
