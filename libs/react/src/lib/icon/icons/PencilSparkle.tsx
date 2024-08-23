import React from 'react'
import { createComponent } from '@lit/react'
import { IconPencilSparkle } from '@sebgroup/green-core/components/icon/icons/pencil-sparkle'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const PencilSparkle = createComponent({
  tagName: getScopedTagName('gds-icon-pencil-sparkle'),
  elementClass: IconPencilSparkle,
  react: React
})
