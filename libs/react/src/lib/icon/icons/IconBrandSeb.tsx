import React from 'react'
import { createComponent } from '@lit/react'
import { IconBrandSeb as Icon } from '@sebgroup/green-core/components/icon/icons/brand-seb.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconBrandSeb = createComponent({
  tagName: getScopedTagName('gds-icon-brand-seb'),
  elementClass: Icon,
  react: React,
})
