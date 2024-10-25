import React from 'react'
import { createComponent } from '@lit/react'

import { IconPeopleAdd as Icon } from '@sebgroup/green-core/components/icon/icons/people-add.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconPeopleAdd = createComponent({
  tagName: getScopedTagName('gds-icon-people-add'),
  elementClass: Icon,
  react: React,
})
