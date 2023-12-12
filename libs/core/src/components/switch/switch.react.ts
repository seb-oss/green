import { createComponent } from '@lit-labs/react'
import * as React from 'react'
import { GdsSwitch } from './switch'

export const SwitchReact = createComponent({
  tagName: 'gds-switch',
  elementClass: GdsSwitch,
  react: React,
})