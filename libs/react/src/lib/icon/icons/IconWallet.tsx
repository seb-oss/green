import React from 'react'
import { createComponent } from '@lit/react'
import { IconWallet as Icon } from '@sebgroup/green-core/components/icon/icons/wallet.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconWallet = createComponent({
  tagName: getScopedTagName('gds-icon-wallet'),
  elementClass: Icon,
  react: React,
})
