import React from 'react'
import { createComponent } from '@lit/react'
import { IconPeople } from '@sebgroup/green-core/components/icon/icons/people'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const People = createComponent({
  tagName: getScopedTagName('gds-icon-people'),
  elementClass: IconPeople,
  react: React
})
