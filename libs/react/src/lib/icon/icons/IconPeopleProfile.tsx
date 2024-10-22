import React from 'react'
import { createComponent } from '@lit/react'
import { IconPeopleProfile as Icon } from '@sebgroup/green-core/components/icon/icons/people-profile.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconPeopleProfile = createComponent({
  tagName: getScopedTagName('gds-icon-people-profile'),
  elementClass: Icon,
  react: React,
})
