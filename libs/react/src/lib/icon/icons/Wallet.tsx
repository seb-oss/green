import React from 'react'
import { createComponent } from '@lit/react'
import { IconWallet } from '@sebgroup/green-core/components/icon/icons/wallet'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const Wallet = createComponent({
  tagName: getScopedTagName('gds-icon-wallet'),
  elementClass: IconWallet,
  react: React
})
