import React from 'react'
import { createComponent } from '@lit/react'
import { IconCheckmark } from '@sebgroup/green-core/components/icon/icons/checkmark'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const Checkmark = createComponent({
  tagName: getScopedTagName('gds-icon-checkmark'),
  elementClass: IconCheckmark,
  react: React
})
