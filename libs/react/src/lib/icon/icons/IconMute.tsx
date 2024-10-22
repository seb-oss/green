import React from 'react'
import { createComponent } from '@lit/react'
import { IconMute as Icon } from '@sebgroup/green-core/components/icon/icons/mute.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconMute = createComponent({
  tagName: getScopedTagName('gds-icon-mute'),
  elementClass: Icon,
  react: React,
})
