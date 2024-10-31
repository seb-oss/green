import React from 'react'
import { createComponent } from '@lit/react'

import { IconLightBulbSimple as Icon } from '@sebgroup/green-core/components/icon/icons/light-bulb-simple.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconLightBulbSimple = createComponent({
  tagName: getScopedTagName('gds-icon-light-bulb-simple'),
  elementClass: Icon,
  react: React,
})
