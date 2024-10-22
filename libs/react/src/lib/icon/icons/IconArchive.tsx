import React from 'react'
import { createComponent } from '@lit/react'
import { IconArchive as Icon } from '@sebgroup/green-core/components/icon/icons/archive.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconArchive = createComponent({
  tagName: getScopedTagName('gds-icon-archive'),
  elementClass: Icon,
  react: React,
})
