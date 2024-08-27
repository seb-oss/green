import React from 'react'
import { createComponent } from '@lit/react'
import { IconChrome as Icon } from '@sebgroup/green-core/components/icon/icons/chrome'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconChrome = createComponent({
  tagName: getScopedTagName('gds-icon-chrome'),
  elementClass: Icon,
  react: React
})
