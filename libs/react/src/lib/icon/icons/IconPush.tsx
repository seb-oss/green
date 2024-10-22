import React from 'react'
import { createComponent } from '@lit/react'
import { IconPush as Icon } from '@sebgroup/green-core/components/icon/icons/push.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconPush = createComponent({
  tagName: getScopedTagName('gds-icon-push'),
  elementClass: Icon,
  react: React,
})
