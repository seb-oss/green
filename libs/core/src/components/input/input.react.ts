import { createComponent } from '@lit-labs/react'
import * as React from 'react'
import { GdsInput } from './input'

export const FormReact = createComponent({
  tagName: 'gds-button',
  elementClass: GdsInput,
  react: React,
})