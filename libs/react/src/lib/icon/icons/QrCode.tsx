import React from 'react'
import { createComponent } from '@lit/react'
import { IconQrCode } from '@sebgroup/green-core/components/icon/icons/qr-code'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const QrCode = createComponent({
  tagName: getScopedTagName('gds-icon-qr-code'),
  elementClass: IconQrCode,
  react: React
})
