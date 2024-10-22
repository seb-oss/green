import React from 'react'
import { createComponent } from '@lit/react'
import { IconMapPin as Icon } from '@sebgroup/green-core/components/icon/icons/map-pin.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconMapPin = createComponent({
  tagName: getScopedTagName('gds-icon-map-pin'),
  elementClass: Icon,
  react: React,
})
