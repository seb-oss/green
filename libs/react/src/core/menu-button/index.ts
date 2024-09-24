import * as React from 'react'
import { createComponent } from '@lit/react'
import { getScopedTagName } from '@sebgroup/green-core/scoping'
import { MenuButton } from '@sebgroup/green-core/components/menu-button/menu-button.js'

const tagName = getScopedTagName('gds-menu-button')
//MenuButton.define('gds-menu-button')

const reactWrapper = createComponent({
  tagName,
  elementClass: MenuButton,
  react: React,
  events: {
    onClick: 'click'
  },
  displayName: 'MenuButton'
})

export default reactWrapper
