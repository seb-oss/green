import React from 'react'
import { createComponent } from '@lit/react'
import { IconTwitter } from '@sebgroup/green-core/components/icon/icons/twitter'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const Twitter = createComponent({
  tagName: getScopedTagName('gds-icon-twitter'),
  elementClass: IconTwitter,
  react: React
})
