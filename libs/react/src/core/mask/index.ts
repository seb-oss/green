import * as React from 'react'
import { createComponent } from '@lit/react'
import { getScopedTagName } from '@sebgroup/green-core/scoping'
import { GdsMask } from '@sebgroup/green-core/components/layout/mask/mask.js'

const tagName = getScopedTagName('gds-mask')
//GdsMask.define('gds-mask')

const reactWrapper = createComponent({
  tagName,
  elementClass: GdsMask,
  react: React,
  events: {},
  displayName: 'GdsMask',
})

export default reactWrapper
