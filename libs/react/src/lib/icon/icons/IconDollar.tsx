import React from 'react'
import { createComponent } from '@lit/react'
import { IconDollar as Icon } from '@sebgroup/green-core/components/icon/icons/dollar.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconDollar = createComponent({
  tagName: getScopedTagName('gds-icon-dollar'),
  elementClass: Icon,
  react: React,
})
