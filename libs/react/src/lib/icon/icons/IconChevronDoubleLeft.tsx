import React from 'react'
import { createComponent } from '@lit/react'
import { IconChevronDoubleLeft as Icon } from '@sebgroup/green-core/components/icon/icons/chevron-double-left.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconChevronDoubleLeft = createComponent({
  tagName: getScopedTagName('gds-icon-chevron-double-left'),
  elementClass: Icon,
  react: React,
})
