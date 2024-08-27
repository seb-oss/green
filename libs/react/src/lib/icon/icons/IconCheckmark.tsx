import React from 'react'
import { createComponent } from '@lit/react'
import { IconCheckmark as Icon } from '@sebgroup/green-core/components/icon/icons/checkmark'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconCheckmark = createComponent({
  tagName: getScopedTagName('gds-icon-checkmark'),
  elementClass: Icon,
  react: React
})
