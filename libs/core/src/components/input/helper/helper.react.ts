import { createComponent } from '@lit-labs/react'
import * as React from 'react'
import { GdsInputHelper } from './helper'

export const InputHelperReact = createComponent({
  tagName: 'gds-input-helper',
  elementClass: GdsInputHelper,
  react: React,
})