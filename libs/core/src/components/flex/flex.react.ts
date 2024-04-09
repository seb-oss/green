import { createComponent } from '@lit-labs/react'
import * as React from 'react'
import { GdsFlex } from './flex'

export const FlexReact = createComponent({
  tagName: 'gds-flex',
  elementClass: GdsFlex,
  react: React,
})
