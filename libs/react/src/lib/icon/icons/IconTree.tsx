import React from 'react'
import { createComponent } from '@lit/react'

import { IconTree as Icon } from '@sebgroup/green-core/components/icon/icons/tree.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconTree = createComponent({
  tagName: getScopedTagName('gds-icon-tree'),
  elementClass: Icon,
  react: React,
})
