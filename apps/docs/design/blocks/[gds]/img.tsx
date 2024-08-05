import React from 'react'
import { createComponent } from '@lit/react'

import { GdsImg } from '@sebgroup/green-core/component/img/img.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const Img = createComponent({
  tagName: getScopedTagName('gds-img'),
  elementClass: GdsImg,
  react: React,
})
