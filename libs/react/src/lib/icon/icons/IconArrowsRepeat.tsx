import React from 'react'
import { createComponent } from '@lit/react'
import { IconArrowsRepeat as Icon } from '@sebgroup/green-core/components/icon/icons/arrows-repeat'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconArrowsRepeat = createComponent({
  tagName: getScopedTagName('gds-icon-arrows-repeat'),
  elementClass: Icon,
  react: React
})
