import React from 'react'
import { createComponent } from '@lit/react'

import { IconCupHot as Icon } from '@sebgroup/green-core/components/icon/icons/cup-hot.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconCupHot = createComponent({
  tagName: getScopedTagName('gds-icon-cup-hot'),
  elementClass: Icon,
  react: React,
})
