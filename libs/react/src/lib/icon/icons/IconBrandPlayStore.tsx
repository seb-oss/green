import React from 'react'
import { createComponent } from '@lit/react'
import { IconBrandPlayStore as Icon } from '@sebgroup/green-core/components/icon/icons/brand-play-store.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconBrandPlayStore = createComponent({
  tagName: getScopedTagName('gds-icon-brand-play-store'),
  elementClass: Icon,
  react: React,
})
