import React from 'react'
import { createComponent } from '@lit/react'
import { IconChrome } from '@sebgroup/green-core/components/icon/icons/chrome'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const Chrome = createComponent({
  tagName: getScopedTagName('gds-icon-chrome'),
  elementClass: IconChrome,
  react: React
})
