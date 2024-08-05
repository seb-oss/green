import React from 'react'
import { createComponent } from '@lit/react'

import { GdsFlex } from '@sebgroup/green-core/component/flex/flex.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const Flex = createComponent({
  tagName: getScopedTagName('gds-flex'),
  elementClass: GdsFlex,
  react: React,
})
