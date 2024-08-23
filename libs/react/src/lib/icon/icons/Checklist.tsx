import React from 'react'
import { createComponent } from '@lit/react'
import { IconChecklist } from '@sebgroup/green-core/components/icon/icons/checklist'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const Checklist = createComponent({
  tagName: getScopedTagName('gds-icon-checklist'),
  elementClass: IconChecklist,
  react: React
})
