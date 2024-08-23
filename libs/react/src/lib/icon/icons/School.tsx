import React from 'react'
import { createComponent } from '@lit/react'
import { IconSchool } from '@sebgroup/green-core/components/icon/icons/school'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const School = createComponent({
  tagName: getScopedTagName('gds-icon-school'),
  elementClass: IconSchool,
  react: React
})
