import React from 'react'
import { createComponent } from '@lit/react'
import { IconCall as Icon } from '@sebgroup/green-core/components/icon/icons/call.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconCall = createComponent({
  tagName: getScopedTagName('gds-icon-call'),
  elementClass: Icon,
  react: React,
})
