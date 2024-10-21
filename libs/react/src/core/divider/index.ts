import * as React from 'react'
import { createComponent } from '@lit/react'
import { getScopedTagName } from '@sebgroup/green-core/scoping'
import { GdsDivider } from '@sebgroup/green-core/components/content/divider/divider.js'

const tagName = getScopedTagName('gds-divider')
//GdsDivider.define('gds-divider')

const reactWrapper = createComponent({
  tagName,
  elementClass: GdsDivider,
  react: React,
  events: {},
  displayName: 'GdsDivider',
})

export default reactWrapper
