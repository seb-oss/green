import React from 'react'
import { createComponent } from '@lit/react'
import { IconHistory } from '@sebgroup/green-core/components/icon/icons/history'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const History = createComponent({
  tagName: getScopedTagName('gds-icon-history'),
  elementClass: IconHistory,
  react: React
})
