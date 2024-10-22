import React from 'react'
import { createComponent } from '@lit/react'
import { IconBrandFigma as Icon } from '@sebgroup/green-core/components/icon/icons/brand-figma.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconBrandFigma = createComponent({
  tagName: getScopedTagName('gds-icon-brand-figma'),
  elementClass: Icon,
  react: React,
})
