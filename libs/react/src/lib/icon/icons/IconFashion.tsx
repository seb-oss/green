import React from 'react'
import { createComponent } from '@lit/react'

import { IconFashion as Icon } from '@sebgroup/green-core/components/icon/icons/fashion.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconFashion = createComponent({
  tagName: getScopedTagName('gds-icon-fashion'),
  elementClass: Icon,
  react: React,
})
