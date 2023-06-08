import { createComponent } from '@lit-labs/react'
import * as React from 'react'
import { GdsDropdown } from './dropdown'

export const GdsDropdownReact = createComponent({
  tagName: 'gds-dropdown',
  elementClass: GdsDropdown,
  react: React,
})
