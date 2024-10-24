import React from 'react'
import { createComponent } from '@lit/react'

import { IconVerticalAlignmentRight as Icon } from '@sebgroup/green-core/components/icon/icons/vertical-alignment-right.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconVerticalAlignmentRight = createComponent({
  tagName: getScopedTagName('gds-icon-vertical-alignment-right'),
  elementClass: Icon,
  react: React,
})
