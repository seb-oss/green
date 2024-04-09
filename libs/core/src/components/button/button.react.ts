import { createComponent } from '@lit-labs/react'
import * as React from 'react'
import { GdsButton } from './button'

export const ButtonReact = createComponent({
  tagName: 'gds-button',
  elementClass: GdsButton,
  react: React,
})
