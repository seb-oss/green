import React from 'react'
import { createComponent } from '@lit/react'
import { IconCirclePlaceholderOn } from '@sebgroup/green-core/components/icon/icons/circle-placeholder-on'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const CirclePlaceholderOn = createComponent({
  tagName: getScopedTagName('gds-icon-circle-placeholder-on'),
  elementClass: IconCirclePlaceholderOn,
  react: React
})
