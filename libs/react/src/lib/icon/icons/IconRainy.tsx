import React from 'react'
import { createComponent } from '@lit/react'
import { IconRainy as Icon } from '@sebgroup/green-core/components/icon/icons/rainy.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconRainy = createComponent({
  tagName: getScopedTagName('gds-icon-rainy'),
  elementClass: Icon,
  react: React,
})
