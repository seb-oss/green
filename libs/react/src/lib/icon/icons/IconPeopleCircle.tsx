import React from 'react'
import { createComponent } from '@lit/react'

import { IconPeopleCircle as Icon } from '@sebgroup/green-core/components/icon/icons/people-circle.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconPeopleCircle = createComponent({
  tagName: getScopedTagName('gds-icon-people-circle'),
  elementClass: Icon,
  react: React,
})
