import React from 'react'
import { createComponent } from '@lit/react'

import { IconBrandInstagram as Icon } from '@sebgroup/green-core/components/icon/icons/brand-instagram.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconBrandInstagram = createComponent({
  tagName: getScopedTagName('gds-icon-brand-instagram'),
  elementClass: Icon,
  react: React,
})
