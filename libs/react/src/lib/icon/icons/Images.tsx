import React from 'react'
import { createComponent } from '@lit/react'
import { IconImages } from '@sebgroup/green-core/components/icon/icons/images'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const Images = createComponent({
  tagName: getScopedTagName('gds-icon-images'),
  elementClass: IconImages,
  react: React
})
