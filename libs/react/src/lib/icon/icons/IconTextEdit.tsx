import React from 'react'
import { createComponent } from '@lit/react'

import { IconTextEdit as Icon } from '@sebgroup/green-core/components/icon/icons/text-edit.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconTextEdit = createComponent({
  tagName: getScopedTagName('gds-icon-text-edit'),
  elementClass: Icon,
  react: React,
})
