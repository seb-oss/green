import React from 'react'
import { createComponent } from '@lit/react'
import { IconPrinter } from '@sebgroup/green-core/components/icon/icons/printer'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const Printer = createComponent({
  tagName: getScopedTagName('gds-icon-printer'),
  elementClass: IconPrinter,
  react: React
})
