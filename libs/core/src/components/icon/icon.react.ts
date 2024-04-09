import { createComponent } from '@lit-labs/react'
import * as React from 'react'
import { GdsIcon } from './icon'

export const IconReact = createComponent({
  tagName: 'gds-icon',
  elementClass: GdsIcon,
  react: React,
})
