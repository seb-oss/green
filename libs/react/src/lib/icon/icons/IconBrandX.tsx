import React from 'react'
import { createComponent } from '@lit/react'
import { IconBrandX as Icon } from '@sebgroup/green-core/components/icon/icons/brand-x.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconBrandX = createComponent({
  tagName: getScopedTagName('gds-icon-brand-x'),
  elementClass: Icon,
  react: React,
})
