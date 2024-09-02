import React from 'react'
import { createComponent } from '@lit/react'
import { IconBankid as Icon } from '@sebgroup/green-core/components/icon/icons/bankid'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconBankid = createComponent({
  tagName: getScopedTagName('gds-icon-bankid'),
  elementClass: Icon,
  react: React
})
