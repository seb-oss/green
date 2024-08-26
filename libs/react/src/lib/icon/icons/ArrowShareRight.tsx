import React from 'react'
import { createComponent } from '@lit/react'
import { IconArrowShareRight } from '@sebgroup/green-core/components/icon/icons/arrow-share-right'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const ArrowShareRight = createComponent({
  tagName: getScopedTagName('gds-icon-arrow-share-right'),
  elementClass: IconArrowShareRight,
  react: React
})
