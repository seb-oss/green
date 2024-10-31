import React from 'react'
import { createComponent } from '@lit/react'

import { IconSeb as Icon } from '@sebgroup/green-core/components/icon/icons/seb.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

/** @deprecated - Use `IconBrandSeb` instead */
export const IconSeb = createComponent({
  tagName: getScopedTagName('gds-icon-seb'),
  elementClass: Icon,
  react: React,
})
