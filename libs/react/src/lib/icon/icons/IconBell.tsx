import React from 'react'
import { createComponent } from '@lit/react'
import { IconBell as Icon } from '@sebgroup/green-core/components/icon/icons/bell.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconBell = createComponent({
  tagName: getScopedTagName('gds-icon-bell'),
  elementClass: Icon,
  react: React,
})
