import React from 'react'
import { createComponent } from '@lit/react'
import { IconGithub as Icon } from '@sebgroup/green-core/components/icon/icons/github'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconGithub = createComponent({
  tagName: getScopedTagName('gds-icon-github'),
  elementClass: Icon,
  react: React
})
