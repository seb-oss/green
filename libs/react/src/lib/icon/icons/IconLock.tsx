import React from 'react'
import { createComponent } from '@lit/react'
import { IconLock as Icon } from '@sebgroup/green-core/components/icon/icons/lock.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconLock = createComponent({
  tagName: getScopedTagName('gds-icon-lock'),
  elementClass: Icon,
  react: React,
})
