import React from 'react'
import { createComponent } from '@lit/react'
import { IconPageText } from '@sebgroup/green-core/components/icon/icons/page-text'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const PageText = createComponent({
  tagName: getScopedTagName('gds-icon-page-text'),
  elementClass: IconPageText,
  react: React
})
