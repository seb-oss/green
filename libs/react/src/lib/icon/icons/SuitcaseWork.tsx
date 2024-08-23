import React from 'react'
import { createComponent } from '@lit/react'
import { IconSuitcaseWork } from '@sebgroup/green-core/components/icon/icons/suitcase-work'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const SuitcaseWork = createComponent({
  tagName: getScopedTagName('gds-icon-suitcase-work'),
  elementClass: IconSuitcaseWork,
  react: React
})
