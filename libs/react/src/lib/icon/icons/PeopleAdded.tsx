import React from 'react'
import { createComponent } from '@lit/react'
import { IconPeopleAdded } from '@sebgroup/green-core/components/icon/icons/people-added'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const PeopleAdded = createComponent({
  tagName: getScopedTagName('gds-icon-people-added'),
  elementClass: IconPeopleAdded,
  react: React
})
