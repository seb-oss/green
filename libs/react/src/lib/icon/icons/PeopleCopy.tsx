import React from 'react'
import { createComponent } from '@lit/react'
import { IconPeopleCopy } from '@sebgroup/green-core/components/icon/icons/people-copy'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const PeopleCopy = createComponent({
  tagName: getScopedTagName('gds-icon-people-copy'),
  elementClass: IconPeopleCopy,
  react: React
})
