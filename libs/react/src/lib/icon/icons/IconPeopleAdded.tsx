import React from 'react'
import { createComponent } from '@lit/react'
import { IconPeopleAdded as Icon } from '@sebgroup/green-core/components/icon/icons/people-added.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconPeopleAdded = createComponent({
  tagName: getScopedTagName('gds-icon-people-added'),
  elementClass: Icon,
  react: React,
})
