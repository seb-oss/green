import React from 'react'
import { createComponent } from '@lit/react'
import { IconBrandLinkedin as Icon } from '@sebgroup/green-core/components/icon/icons/brand-linkedin.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconBrandLinkedin = createComponent({
  tagName: getScopedTagName('gds-icon-brand-linkedin'),
  elementClass: Icon,
  react: React,
})
