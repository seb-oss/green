import React from 'react'
import { createComponent } from '@lit/react'
import { IconPageText as Icon } from '@sebgroup/green-core/components/icon/icons/page-text.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconPageText = createComponent({
  tagName: getScopedTagName('gds-icon-page-text'),
  elementClass: Icon,
  react: React,
})
