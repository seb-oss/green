import React from 'react'
import { createComponent } from '@lit/react'
import { IconHeartBeat } from '@sebgroup/green-core/components/icon/icons/heart-beat'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const HeartBeat = createComponent({
  tagName: getScopedTagName('gds-icon-heart-beat'),
  elementClass: IconHeartBeat,
  react: React
})
