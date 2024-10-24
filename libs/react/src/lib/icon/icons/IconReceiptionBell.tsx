import React from 'react'
import { createComponent } from '@lit/react'

import { IconReceiptionBell as Icon } from '@sebgroup/green-core/components/icon/icons/receiption-bell.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconReceiptionBell = createComponent({
  tagName: getScopedTagName('gds-icon-receiption-bell'),
  elementClass: Icon,
  react: React,
})
