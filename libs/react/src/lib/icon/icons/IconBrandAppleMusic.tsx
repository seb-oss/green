import React from 'react'
import { createComponent } from '@lit/react'

import { IconBrandAppleMusic as Icon } from '@sebgroup/green-core/components/icon/icons/brand-apple-music.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconBrandAppleMusic = createComponent({
  tagName: getScopedTagName('gds-icon-brand-apple-music'),
  elementClass: Icon,
  react: React,
})
