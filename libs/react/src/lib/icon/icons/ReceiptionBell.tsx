import React from 'react'
import { createComponent } from '@lit/react'
import { IconReceiptionBell } from '@sebgroup/green-core/components/icon/icons/receiption-bell'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const ReceiptionBell = createComponent({
  tagName: getScopedTagName('gds-icon-receiption-bell'),
  elementClass: IconReceiptionBell,
  react: React
})
