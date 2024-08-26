import React from 'react'
import { createComponent } from '@lit/react'
import { IconTree } from '@sebgroup/green-core/components/icon/icons/tree'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const Tree = createComponent({
  tagName: getScopedTagName('gds-icon-tree'),
  elementClass: IconTree,
  react: React
})
