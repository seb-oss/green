import * as React from 'react'
import { createComponent } from '@lit/react'
import { getScopedTagName } from '@sebgroup/green-core/scoping'
import { GdsSignal } from '@sebgroup/green-core/primitives/signal/signal.js'

const tagName = getScopedTagName('gds-signal')
//GdsSignal.define('gds-signal')

const reactWrapper = createComponent({
  tagName,
  elementClass: GdsSignal,
  react: React,
  events: {},
  displayName: 'GdsSignal',
})

export default reactWrapper
