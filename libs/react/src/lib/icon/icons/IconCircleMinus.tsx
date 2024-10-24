import React from 'react'
import { createComponent } from '@lit/react'

import { IconCircleMinus as Icon } from '@sebgroup/green-core/components/icon/icons/circle-minus.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconCircleMinus = createComponent({
  tagName: getScopedTagName('gds-icon-circle-minus'),
  elementClass: Icon,
  react: React,
})
