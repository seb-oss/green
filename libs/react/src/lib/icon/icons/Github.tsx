import React from 'react'
import { createComponent } from '@lit/react'
import { IconGithub } from '@sebgroup/green-core/components/icon/icons/github'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const Github = createComponent({
  tagName: getScopedTagName('gds-icon-github'),
  elementClass: IconGithub,
  react: React
})
