import React from 'react'
import { createComponent } from '@lit/react'
import { IconPin } from '@sebgroup/green-core/components/icon/icons/pin'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const Pin = createComponent({
  tagName: getScopedTagName('gds-icon-pin'),
  elementClass: IconPin,
  react: React
})
