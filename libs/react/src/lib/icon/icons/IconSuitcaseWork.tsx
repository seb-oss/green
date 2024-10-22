import React from 'react'
import { createComponent } from '@lit/react'

import { IconSuitcaseWork as Icon } from '@sebgroup/green-core/components/icon/icons/suitcase-work.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconSuitcaseWork = createComponent({
  tagName: getScopedTagName('gds-icon-suitcase-work'),
  elementClass: Icon,
  react: React,
})
