import React from 'react'
import { createComponent } from '@lit/react'
import { IconMoon as Icon } from '@sebgroup/green-core/components/icon/icons/moon.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconMoon = createComponent({
  tagName: getScopedTagName('gds-icon-moon'),
  elementClass: Icon,
  react: React,
})
