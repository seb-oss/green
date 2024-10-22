import React from 'react'
import { createComponent } from '@lit/react'
import { IconArrowShareLeft as Icon } from '@sebgroup/green-core/components/icon/icons/arrow-share-left.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconArrowShareLeft = createComponent({
  tagName: getScopedTagName('gds-icon-arrow-share-left'),
  elementClass: Icon,
  react: React,
})
