import React from 'react'
import { createComponent } from '@lit/react'
import { IconTag } from '@sebgroup/green-core/components/icon/icons/tag'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const Tag = createComponent({
  tagName: getScopedTagName('gds-icon-tag'),
  elementClass: IconTag,
  react: React
})
