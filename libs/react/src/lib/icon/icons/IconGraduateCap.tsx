import React from 'react'
import { createComponent } from '@lit/react'

import { IconGraduateCap as Icon } from '@sebgroup/green-core/components/icon/icons/graduate-cap.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconGraduateCap = createComponent({
  tagName: getScopedTagName('gds-icon-graduate-cap'),
  elementClass: Icon,
  react: React,
})
