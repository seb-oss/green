import { createComponent } from '@lit-labs/react'
import * as React from 'react'
import { GdsForm } from './form'

export const FormReact = createComponent({
  tagName: 'gds-button',
  elementClass: GdsForm,
  react: React,
})
