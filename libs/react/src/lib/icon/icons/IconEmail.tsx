import React from 'react'
import { createComponent } from '@lit/react'
import { IconEmail as Icon } from '@sebgroup/green-core/components/icon/icons/email.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconEmail = createComponent({
  tagName: getScopedTagName('gds-icon-email'),
  elementClass: Icon,
  react: React,
})
