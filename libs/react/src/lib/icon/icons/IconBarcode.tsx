import React from 'react'
import { createComponent } from '@lit/react'
import { IconBarcode as Icon } from '@sebgroup/green-core/components/icon/icons/barcode.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconBarcode = createComponent({
  tagName: getScopedTagName('gds-icon-barcode'),
  elementClass: Icon,
  react: React,
})
