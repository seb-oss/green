import React from 'react'
import { createComponent } from '@lit/react'
import { IconAppleMusic as Icon } from '@sebgroup/green-core/components/icon/icons/apple-music.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconAppleMusic = createComponent({
  tagName: getScopedTagName('gds-icon-apple-music'),
  elementClass: Icon,
  react: React
})
