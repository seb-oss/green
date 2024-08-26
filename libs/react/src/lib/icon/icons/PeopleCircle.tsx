import React from 'react'
import { createComponent } from '@lit/react'
import { IconPeopleCircle } from '@sebgroup/green-core/components/icon/icons/people-circle'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const PeopleCircle = createComponent({
  tagName: getScopedTagName('gds-icon-people-circle'),
  elementClass: IconPeopleCircle,
  react: React
})
