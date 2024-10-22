import React from 'react'
import { createComponent } from '@lit/react'
import { IconPrinter as Icon } from '@sebgroup/green-core/components/icon/icons/printer.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconPrinter = createComponent({
  tagName: getScopedTagName('gds-icon-printer'),
  elementClass: Icon,
  react: React,
})
