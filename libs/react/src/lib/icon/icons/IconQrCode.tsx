import React from 'react'
import { createComponent } from '@lit/react'

import { IconQrCode as Icon } from '@sebgroup/green-core/components/icon/icons/qr-code.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconQrCode = createComponent({
  tagName: getScopedTagName('gds-icon-qr-code'),
  elementClass: Icon,
  react: React,
})
