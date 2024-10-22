import React from 'react'
import { createComponent } from '@lit/react'
import { IconHeadphones as Icon } from '@sebgroup/green-core/components/icon/icons/headphones.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconHeadphones = createComponent({
  tagName: getScopedTagName('gds-icon-headphones'),
  elementClass: Icon,
  react: React,
})
