import React from 'react'
import { createComponent } from '@lit/react'

import { GdsContainer } from '@sebgroup/green-core/component/container/container.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const Container = createComponent({
  tagName: getScopedTagName('gds-container'),
  elementClass: GdsContainer,
  react: React,
})
