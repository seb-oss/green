import React from 'react'
import { createComponent } from '@lit/react'

import { IconArrowInbox as Icon } from '@sebgroup/green-core/components/icon/icons/arrow-inbox.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconArrowInbox = createComponent({
  tagName: getScopedTagName('gds-icon-arrow-inbox'),
  elementClass: Icon,
  react: React,
})
