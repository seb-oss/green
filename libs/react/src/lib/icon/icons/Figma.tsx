import React from 'react'
import { createComponent } from '@lit/react'
import { IconFigma } from '@sebgroup/green-core/components/icon/icons/figma'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const Figma = createComponent({
  tagName: getScopedTagName('gds-icon-figma'),
  elementClass: IconFigma,
  react: React
})
