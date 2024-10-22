import React from 'react'
import { createComponent } from '@lit/react'
import { IconLaw as Icon } from '@sebgroup/green-core/components/icon/icons/law.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconLaw = createComponent({
  tagName: getScopedTagName('gds-icon-law'),
  elementClass: Icon,
  react: React,
})
