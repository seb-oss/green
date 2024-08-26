import React from 'react'
import { createComponent } from '@lit/react'
import { IconReceiptBill } from '@sebgroup/green-core/components/icon/icons/receipt-bill'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const ReceiptBill = createComponent({
  tagName: getScopedTagName('gds-icon-receipt-bill'),
  elementClass: IconReceiptBill,
  react: React
})
