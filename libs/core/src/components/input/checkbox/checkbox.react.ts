import { createComponent } from '@lit-labs/react'
import * as React from 'react'
import { GdsCheckbox } from './checkbox'

export const InputReact = createComponent({
  tagName: 'gds-checkbox',
  elementClass: GdsCheckbox,
  react: React,
})