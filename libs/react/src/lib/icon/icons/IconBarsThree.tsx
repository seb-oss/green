import React from 'react'
import { createComponent } from '@lit/react'

import { IconBarsThree as Icon } from '@sebgroup/green-core/components/icon/icons/bars-three.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconBarsThree = createComponent({
  tagName: getScopedTagName('gds-icon-bars-three'),
  elementClass: Icon,
  react: React,
})
