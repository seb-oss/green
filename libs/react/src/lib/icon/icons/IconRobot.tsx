import React from 'react'
import { createComponent } from '@lit/react'
import { IconRobot as Icon } from '@sebgroup/green-core/components/icon/icons/robot.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconRobot = createComponent({
  tagName: getScopedTagName('gds-icon-robot'),
  elementClass: Icon,
  react: React,
})
