import React from 'react'
import { createComponent } from '@lit/react'
import { IconTextEdit } from '@sebgroup/green-core/components/icon/icons/text-edit'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const TextEdit = createComponent({
  tagName: getScopedTagName('gds-icon-text-edit'),
  elementClass: IconTextEdit,
  react: React
})
