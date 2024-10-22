import React from 'react'
import { createComponent } from '@lit/react'

import { IconCircleInfo as Icon } from '@sebgroup/green-core/components/icon/icons/circle-info.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconCircleInfo = createComponent({
  tagName: getScopedTagName('gds-icon-circle-info'),
  elementClass: Icon,
  react: React,
})
