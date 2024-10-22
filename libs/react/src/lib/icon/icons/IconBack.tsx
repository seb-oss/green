import React from 'react'
import { createComponent } from '@lit/react'
import { IconBack as Icon } from '@sebgroup/green-core/components/icon/icons/back.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconBack = createComponent({
  tagName: getScopedTagName('gds-icon-back'),
  elementClass: Icon,
  react: React,
})
