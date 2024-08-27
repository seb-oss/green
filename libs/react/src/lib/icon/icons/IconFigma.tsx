import React from 'react'
import { createComponent } from '@lit/react'
import { IconFigma as Icon } from '@sebgroup/green-core/components/icon/icons/figma'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconFigma = createComponent({
  tagName: getScopedTagName('gds-icon-figma'),
  elementClass: Icon,
  react: React
})
