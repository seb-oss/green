import React from 'react'
import { createComponent } from '@lit/react'
import { IconTwitter as Icon } from '@sebgroup/green-core/components/icon/icons/twitter.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconTwitter = createComponent({
  tagName: getScopedTagName('gds-icon-twitter'),
  elementClass: Icon,
  react: React
})
