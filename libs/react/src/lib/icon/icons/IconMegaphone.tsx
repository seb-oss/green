import React from 'react'
import { createComponent } from '@lit/react'
import { IconMegaphone as Icon } from '@sebgroup/green-core/components/icon/icons/megaphone.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconMegaphone = createComponent({
  tagName: getScopedTagName('gds-icon-megaphone'),
  elementClass: Icon,
  react: React,
})
