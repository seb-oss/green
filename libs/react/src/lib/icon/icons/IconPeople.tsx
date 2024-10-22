import React from 'react'
import { createComponent } from '@lit/react'
import { IconPeople as Icon } from '@sebgroup/green-core/components/icon/icons/people.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconPeople = createComponent({
  tagName: getScopedTagName('gds-icon-people'),
  elementClass: Icon,
  react: React,
})
