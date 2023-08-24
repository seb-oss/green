import { createComponent } from '@lit-labs/react'
import * as React from 'react'
import { GdsInput } from './input'

export const InputReact = createComponent({
  tagName: 'gds-input',
  elementClass: GdsInput,
  react: React,
})