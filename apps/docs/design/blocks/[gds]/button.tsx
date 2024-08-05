import React from 'react'
import { createComponent } from '@lit/react'

import { GdsButton } from '@sebgroup/green-core/component/button/index.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

// import * as ButtonStyles from '@sebgroup/green-core/components/button/button.trans.styles.js'
// ButtonStyles.register()

export const Button = createComponent({
  tagName: getScopedTagName('gds-button'),
  elementClass: GdsButton,
  react: React,
  events: { onClick: 'click' },
})
