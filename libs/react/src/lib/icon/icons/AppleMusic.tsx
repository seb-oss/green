import React from 'react'
import { createComponent } from '@lit/react'
import { IconAppleMusic } from '@sebgroup/green-core/components/icon/icons/apple-music'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const AppleMusic = createComponent({
  tagName: getScopedTagName('gds-icon-apple-music'),
  elementClass: IconAppleMusic,
  react: React
})
