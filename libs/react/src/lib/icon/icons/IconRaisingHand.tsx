import React from 'react'
import { createComponent } from '@lit/react'

import { IconRaisingHand as Icon } from '@sebgroup/green-core/components/icon/icons/raising-hand.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconRaisingHand = createComponent({
  tagName: getScopedTagName('gds-icon-raising-hand'),
  elementClass: Icon,
  react: React,
})
