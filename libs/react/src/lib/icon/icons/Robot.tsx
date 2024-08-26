import React from 'react'
import { createComponent } from '@lit/react'
import { IconRobot } from '@sebgroup/green-core/components/icon/icons/robot'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const Robot = createComponent({
  tagName: getScopedTagName('gds-icon-robot'),
  elementClass: IconRobot,
  react: React
})
