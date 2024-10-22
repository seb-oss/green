import React from 'react'
import { createComponent } from '@lit/react'
import { IconReceiptBill as Icon } from '@sebgroup/green-core/components/icon/icons/receipt-bill.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconReceiptBill = createComponent({
  tagName: getScopedTagName('gds-icon-receipt-bill'),
  elementClass: Icon,
  react: React,
})
