import React from 'react'
import { createComponent } from '@lit/react'
import { IconBarcode } from '@sebgroup/green-core/components/icon/icons/barcode'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const Barcode = createComponent({
  tagName: getScopedTagName('gds-icon-barcode'),
  elementClass: IconBarcode,
  react: React
})
