import React from 'react'
import { createComponent } from '@lit/react'
import { IconSchool as Icon } from '@sebgroup/green-core/components/icon/icons/school.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconSchool = createComponent({
  tagName: getScopedTagName('gds-icon-school'),
  elementClass: Icon,
  react: React,
})
