import React from 'react'
import { createComponent } from '@lit/react'
import { IconPin as Icon } from '@sebgroup/green-core/components/icon/icons/pin.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconPin = createComponent({
  tagName: getScopedTagName('gds-icon-pin'),
  elementClass: Icon,
  react: React,
})
