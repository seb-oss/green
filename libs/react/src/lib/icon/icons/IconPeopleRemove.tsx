import React from 'react'
import { createComponent } from '@lit/react'
import { IconPeopleRemove as Icon } from '@sebgroup/green-core/components/icon/icons/people-remove.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconPeopleRemove = createComponent({
  tagName: getScopedTagName('gds-icon-people-remove'),
  elementClass: Icon,
  react: React,
})
