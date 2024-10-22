import React from 'react'
import { createComponent } from '@lit/react'

import { IconSquarePlaceholder as Icon } from '@sebgroup/green-core/components/icon/icons/square-placeholder.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconSquarePlaceholder = createComponent({
  tagName: getScopedTagName('gds-icon-square-placeholder'),
  elementClass: Icon,
  react: React,
})
