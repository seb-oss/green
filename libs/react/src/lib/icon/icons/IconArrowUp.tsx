import React from 'react'
import { createComponent } from '@lit/react'
import { IconArrowUp as Icon } from '@sebgroup/green-core/components/icon/icons/arrow-up.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconArrowUp = createComponent({
  tagName: getScopedTagName('gds-icon-arrow-up'),
  elementClass: Icon,
  react: React,
})
