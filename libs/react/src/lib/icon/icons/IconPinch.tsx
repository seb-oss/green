import React from 'react'
import { createComponent } from '@lit/react'
import { IconPinch as Icon } from '@sebgroup/green-core/components/icon/icons/pinch.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconPinch = createComponent({
  tagName: getScopedTagName('gds-icon-pinch'),
  elementClass: Icon,
  react: React,
})
