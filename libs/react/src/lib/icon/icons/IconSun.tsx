import React from 'react'
import { createComponent } from '@lit/react'
import { IconSun as Icon } from '@sebgroup/green-core/components/icon/icons/sun.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconSun = createComponent({
  tagName: getScopedTagName('gds-icon-sun'),
  elementClass: Icon,
  react: React,
})
