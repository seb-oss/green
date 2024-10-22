import React from 'react'
import { createComponent } from '@lit/react'
import { IconBrandAppStore as Icon } from '@sebgroup/green-core/components/icon/icons/brand-app-store.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconBrandAppStore = createComponent({
  tagName: getScopedTagName('gds-icon-brand-app-store'),
  elementClass: Icon,
  react: React,
})
