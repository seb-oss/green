import React from 'react'
import { createComponent } from '@lit/react'
import { IconMacbookAir as Icon } from '@sebgroup/green-core/components/icon/icons/macbook-air.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconMacbookAir = createComponent({
  tagName: getScopedTagName('gds-icon-macbook-air'),
  elementClass: Icon,
  react: React,
})
