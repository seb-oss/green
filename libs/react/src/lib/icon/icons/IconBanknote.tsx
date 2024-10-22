import React from 'react'
import { createComponent } from '@lit/react'
import { IconBanknote as Icon } from '@sebgroup/green-core/components/icon/icons/banknote.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconBanknote = createComponent({
  tagName: getScopedTagName('gds-icon-banknote'),
  elementClass: Icon,
  react: React,
})
