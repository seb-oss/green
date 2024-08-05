import React from 'react'
import { createComponent } from '@lit/react'

import { GdsGrid } from '@sebgroup/green-core/component/grid/grid.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const Grid = createComponent({
  tagName: getScopedTagName('gds-grid'),
  elementClass: GdsGrid,
  react: React,
})
