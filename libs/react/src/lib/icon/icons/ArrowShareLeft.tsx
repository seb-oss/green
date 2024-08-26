import React from 'react'
import { createComponent } from '@lit/react'
import { IconArrowShareLeft } from '@sebgroup/green-core/components/icon/icons/arrow-share-left'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const ArrowShareLeft = createComponent({
  tagName: getScopedTagName('gds-icon-arrow-share-left'),
  elementClass: IconArrowShareLeft,
  react: React
})
