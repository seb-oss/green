import React from 'react'
import { createComponent } from '@lit/react'

import { IconBrandFacebook as Icon } from '@sebgroup/green-core/components/icon/icons/brand-facebook.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconBrandFacebook = createComponent({
  tagName: getScopedTagName('gds-icon-brand-facebook'),
  elementClass: Icon,
  react: React,
})
