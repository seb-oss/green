import React from 'react'
import { createComponent } from '@lit/react'

import { IconArrowWallLeft as Icon } from '@sebgroup/green-core/components/icon/icons/arrow-wall-left.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconArrowWallLeft = createComponent({
  tagName: getScopedTagName('gds-icon-arrow-wall-left'),
  elementClass: Icon,
  react: React,
})
