import { createComponent } from '@lit-labs/react'
import * as React from 'react'
import { GdsGrid } from './grid'

export const GridReact = createComponent({
  tagName: 'gds-grid',
  elementClass: GdsGrid,
  react: React,
})
