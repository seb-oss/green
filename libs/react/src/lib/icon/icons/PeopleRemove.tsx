import React from 'react'
import { createComponent } from '@lit/react'
import { IconPeopleRemove } from '@sebgroup/green-core/components/icon/icons/people-remove'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const PeopleRemove = createComponent({
  tagName: getScopedTagName('gds-icon-people-remove'),
  elementClass: IconPeopleRemove,
  react: React
})
