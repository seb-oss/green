import React from 'react'
import { createComponent } from '@lit/react'

import { IconChecklist as Icon } from '@sebgroup/green-core/components/icon/icons/checklist.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconChecklist = createComponent({
  tagName: getScopedTagName('gds-icon-checklist'),
  elementClass: Icon,
  react: React,
})
