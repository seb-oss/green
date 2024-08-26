import React from 'react'
import { createComponent } from '@lit/react'
import { IconLightBulbSimple } from '@sebgroup/green-core/components/icon/icons/light-bulb-simple'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const LightBulbSimple = createComponent({
  tagName: getScopedTagName('gds-icon-light-bulb-simple'),
  elementClass: IconLightBulbSimple,
  react: React
})
