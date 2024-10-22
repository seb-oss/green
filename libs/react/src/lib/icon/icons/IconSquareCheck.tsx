import React from 'react'
import { createComponent } from '@lit/react'

import { IconSquareCheck as Icon } from '@sebgroup/green-core/components/icon/icons/square-check.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconSquareCheck = createComponent({
  tagName: getScopedTagName('gds-icon-square-check'),
  elementClass: Icon,
  react: React,
})
