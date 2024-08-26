import React from 'react'
import { createComponent } from '@lit/react'
import { IconBankid } from '@sebgroup/green-core/components/icon/icons/bankid'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const Bankid = createComponent({
  tagName: getScopedTagName('gds-icon-bankid'),
  elementClass: IconBankid,
  react: React
})
