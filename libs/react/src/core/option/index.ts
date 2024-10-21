import * as React from 'react'
import { createComponent } from '@lit/react'
import { getScopedTagName } from '@sebgroup/green-core/scoping'
import { GdsOption } from '@sebgroup/green-core/primitives/listbox/option.js'

const tagName = getScopedTagName('gds-option')
//GdsOption.define('gds-option')

const reactWrapper = createComponent({
  tagName,
  elementClass: GdsOption,
  react: React,
  events: {},
  displayName: 'GdsOption',
})

export default reactWrapper
