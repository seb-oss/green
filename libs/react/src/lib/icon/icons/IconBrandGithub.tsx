import React from 'react'
import { createComponent } from '@lit/react'

import { IconBrandGithub as Icon } from '@sebgroup/green-core/components/icon/icons/brand-github.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconBrandGithub = createComponent({
  tagName: getScopedTagName('gds-icon-brand-github'),
  elementClass: Icon,
  react: React,
})
