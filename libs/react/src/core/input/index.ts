import * as React from 'react'
import { createComponent } from '@lit/react'
import { getScopedTagName } from '@sebgroup/green-core/scoping'
import { GdsInput } from '@sebgroup/green-core/components/input/input.js'

const tagName = getScopedTagName('gds-input')
//GdsInput.define('gds-input')

const reactWrapper = createComponent({
  tagName,
  elementClass: GdsInput,
  react: React,
  events: {},
  displayName: 'GdsInput',
})

export default reactWrapper
