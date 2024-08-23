import React from 'react'
import { createComponent } from '@lit/react'
import { IconArrowsRepeat } from '@sebgroup/green-core/components/icon/icons/arrows-repeat'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const ArrowsRepeat = createComponent({
  tagName: getScopedTagName('gds-icon-arrows-repeat'),
  elementClass: IconArrowsRepeat,
  react: React
})
