import React from 'react'
import { createComponent } from '@lit/react'
import { IconArrowShareRight as Icon } from '@sebgroup/green-core/components/icon/icons/arrow-share-right.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconArrowShareRight = createComponent({
  tagName: getScopedTagName('gds-icon-arrow-share-right'),
  elementClass: Icon,
  react: React,
})
