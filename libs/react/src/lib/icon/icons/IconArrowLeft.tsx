import React from 'react'
import { createComponent } from '@lit/react'
import { IconArrowLeft as Icon } from '@sebgroup/green-core/components/icon/icons/arrow-left.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconArrowLeft = createComponent({
  tagName: getScopedTagName('gds-icon-arrow-left'),
  elementClass: Icon,
  react: React,
})
