import * as React from 'react'
import { createComponent } from '@lit/react'
import { getScopedTagName } from '@sebgroup/green-core/scoping'
import { GdsMenuItem } from '@sebgroup/green-core/primitives/menu/menu-item'

const tagName = getScopedTagName('gds-menu-item')
//GdsMenuItem.define('gds-menu-item')

const reactWrapper = createComponent({
  tagName,
  elementClass: GdsMenuItem,
  react: React,
  events: {},
  displayName: 'GdsMenuItem',
})

export default reactWrapper
