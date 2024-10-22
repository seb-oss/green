import React from 'react'
import { createComponent } from '@lit/react'
import { IconStore as Icon } from '@sebgroup/green-core/components/icon/icons/store.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconStore = createComponent({
  tagName: getScopedTagName('gds-icon-store'),
  elementClass: Icon,
  react: React,
})
