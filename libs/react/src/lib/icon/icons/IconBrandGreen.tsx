import React from 'react'
import { createComponent } from '@lit/react'
import { IconBrandGreen as Icon } from '@sebgroup/green-core/components/icon/icons/brand-green.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconBrandGreen = createComponent({
  tagName: getScopedTagName('gds-icon-brand-green'),
  elementClass: Icon,
  react: React,
})
