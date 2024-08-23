import React from 'react'
import { createComponent } from '@lit/react'
import { IconPhone } from '@sebgroup/green-core/components/icon/icons/phone'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const Phone = createComponent({
  tagName: getScopedTagName('gds-icon-phone'),
  elementClass: IconPhone,
  react: React
})
