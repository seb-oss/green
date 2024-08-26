import React from 'react'
import { createComponent } from '@lit/react'
import { IconPeopleAdd } from '@sebgroup/green-core/components/icon/icons/people-add'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const PeopleAdd = createComponent({
  tagName: getScopedTagName('gds-icon-people-add'),
  elementClass: IconPeopleAdd,
  react: React
})
