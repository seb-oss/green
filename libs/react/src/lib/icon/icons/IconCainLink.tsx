import React from 'react'
import { createComponent } from '@lit/react'
import { IconCainLink as Icon } from '@sebgroup/green-core/components/icon/icons/cain-link.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconCainLink = createComponent({
  tagName: getScopedTagName('gds-icon-cain-link'),
  elementClass: Icon,
  react: React,
})
