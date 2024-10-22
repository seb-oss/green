import React from 'react'
import { createComponent } from '@lit/react'
import { IconBarsTwo as Icon } from '@sebgroup/green-core/components/icon/icons/bars-two.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconBarsTwo = createComponent({
  tagName: getScopedTagName('gds-icon-bars-two'),
  elementClass: Icon,
  react: React,
})
