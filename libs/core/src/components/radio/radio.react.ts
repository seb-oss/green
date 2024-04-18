import { createComponent } from '@lit-labs/react'
import * as React from 'react'
import { GdsRadio } from './radio'

export const RadioReact = createComponent({
  tagName: 'gds-radio',
  elementClass: GdsRadio,
  react: React,
})
