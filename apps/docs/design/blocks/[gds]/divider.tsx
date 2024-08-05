import React from 'react'
import { createComponent } from '@lit/react'

import { GdsDivider } from '@sebgroup/green-core/component/divider/divider.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const Divider = createComponent({
  tagName: getScopedTagName('gds-divider'),
  elementClass: GdsDivider,
  react: React,
})
