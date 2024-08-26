import React from 'react'
import { createComponent } from '@lit/react'
import { IconMute } from '@sebgroup/green-core/components/icon/icons/mute'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const Mute = createComponent({
  tagName: getScopedTagName('gds-icon-mute'),
  elementClass: IconMute,
  react: React
})
