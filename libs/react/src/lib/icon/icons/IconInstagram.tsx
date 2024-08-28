import React from 'react'
import { createComponent } from '@lit/react'
import { IconInstagram as Icon } from '@sebgroup/green-core/components/icon/icons/instagram'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconInstagram = createComponent({
  tagName: getScopedTagName('gds-icon-instagram'),
  elementClass: Icon,
  react: React
})
