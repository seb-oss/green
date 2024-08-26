import React from 'react'
import { createComponent } from '@lit/react'
import { IconGraduateCap } from '@sebgroup/green-core/components/icon/icons/graduate-cap'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const GraduateCap = createComponent({
  tagName: getScopedTagName('gds-icon-graduate-cap'),
  elementClass: IconGraduateCap,
  react: React
})
