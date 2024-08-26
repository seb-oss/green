import React from 'react'
import { createComponent } from '@lit/react'
import { IconAirplaneUp } from '@sebgroup/green-core/components/icon/icons/airplane-up'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const AirplaneUp = createComponent({
  tagName: getScopedTagName('gds-icon-airplane-up'),
  elementClass: IconAirplaneUp,
  react: React
})
