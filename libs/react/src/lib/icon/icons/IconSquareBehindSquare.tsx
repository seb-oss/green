import React from 'react'
import { createComponent } from '@lit/react'
import { IconSquareBehindSquare as Icon } from '@sebgroup/green-core/components/icon/icons/square-behind-square.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconSquareBehindSquare = createComponent({
  tagName: getScopedTagName('gds-icon-square-behind-square'),
  elementClass: Icon,
  react: React,
})
