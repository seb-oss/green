import React from 'react'
import { createComponent } from '@lit/react'
import { IconPeopleCopy as Icon } from '@sebgroup/green-core/components/icon/icons/people-copy.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconPeopleCopy = createComponent({
  tagName: getScopedTagName('gds-icon-people-copy'),
  elementClass: Icon,
  react: React,
})
