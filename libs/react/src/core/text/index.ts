import * as React from 'react'
import { createComponent } from '@lit/react'
import { getScopedTagName } from '@sebgroup/green-core/scoping'
import { GdsText } from '@sebgroup/green-core/components/content/text/text.js'

const tagName = getScopedTagName('gds-text')
//GdsText.define('gds-text')

const reactWrapper = createComponent({
  tagName,
  elementClass: GdsText,
  react: React,
  events: {},
  displayName: 'GdsText',
})

export default reactWrapper
