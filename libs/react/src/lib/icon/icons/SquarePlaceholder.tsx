import React from 'react'
import { createComponent } from '@lit/react'
import { IconSquarePlaceholder } from '@sebgroup/green-core/components/icon/icons/square-placeholder'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const SquarePlaceholder = createComponent({
  tagName: getScopedTagName('gds-icon-square-placeholder'),
  elementClass: IconSquarePlaceholder,
  react: React
})
