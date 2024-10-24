import React from 'react'
import { createComponent } from '@lit/react'

import { IconBrush as Icon } from '@sebgroup/green-core/components/icon/icons/brush.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconBrush = createComponent({
  tagName: getScopedTagName('gds-icon-brush'),
  elementClass: Icon,
  react: React,
})
