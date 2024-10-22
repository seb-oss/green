import React from 'react'
import { createComponent } from '@lit/react'
import { IconBrandBankid as Icon } from '@sebgroup/green-core/components/icon/icons/brand-bankid.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconBrandBankid = createComponent({
  tagName: getScopedTagName('gds-icon-brand-bankid'),
  elementClass: Icon,
  react: React,
})
