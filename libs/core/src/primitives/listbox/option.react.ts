import { createComponent } from '@lit-labs/react'
import * as React from 'react'
import { GdsOption } from './option'

export const GdsOptionReact = createComponent({
  tagName: 'gds-option',
  elementClass: GdsOption,
  react: React,
})
