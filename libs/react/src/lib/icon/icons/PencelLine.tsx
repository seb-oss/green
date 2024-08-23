import React from 'react'
import { createComponent } from '@lit/react'
import { IconPencelLine } from '@sebgroup/green-core/components/icon/icons/pencel-line'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const PencelLine = createComponent({
  tagName: getScopedTagName('gds-icon-pencel-line'),
  elementClass: IconPencelLine,
  react: React
})
