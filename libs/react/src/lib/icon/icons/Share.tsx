import React from 'react'
import { createComponent } from '@lit/react'
import { IconShare } from '@sebgroup/green-core/components/icon/icons/share'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const Share = createComponent({
  tagName: getScopedTagName('gds-icon-share'),
  elementClass: IconShare,
  react: React
})
