import React from 'react'
import { createComponent } from '@lit/react'
import { IconPencelLine as Icon } from '@sebgroup/green-core/components/icon/icons/pencel-line'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconPencelLine = createComponent({
  tagName: getScopedTagName('gds-icon-pencel-line'),
  elementClass: Icon,
  react: React
})
