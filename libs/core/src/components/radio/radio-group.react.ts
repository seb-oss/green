import { createComponent } from '@lit-labs/react'
import * as React from 'react'
import { GdsRadioGroup } from './radio-group'

export const RadioGroupReact = createComponent({
  tagName: 'gds-radio-group',
  elementClass: GdsRadioGroup,
  react: React,
})