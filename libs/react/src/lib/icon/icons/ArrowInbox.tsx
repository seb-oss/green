import React from 'react'
import { createComponent } from '@lit/react'
import { IconArrowInbox } from '@sebgroup/green-core/components/icon/icons/arrow-inbox'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const ArrowInbox = createComponent({
  tagName: getScopedTagName('gds-icon-arrow-inbox'),
  elementClass: IconArrowInbox,
  react: React
})
