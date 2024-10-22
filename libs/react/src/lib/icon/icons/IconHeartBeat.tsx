import React from 'react'
import { createComponent } from '@lit/react'
import { IconHeartBeat as Icon } from '@sebgroup/green-core/components/icon/icons/heart-beat.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconHeartBeat = createComponent({
  tagName: getScopedTagName('gds-icon-heart-beat'),
  elementClass: Icon,
  react: React,
})
