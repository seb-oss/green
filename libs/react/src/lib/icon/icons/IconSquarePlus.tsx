import React from 'react'
import { createComponent } from '@lit/react'
import { IconSquarePlus as Icon } from '@sebgroup/green-core/components/icon/icons/square-plus.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconSquarePlus = createComponent({
  tagName: getScopedTagName('gds-icon-square-plus'),
  elementClass: Icon,
  react: React,
})
