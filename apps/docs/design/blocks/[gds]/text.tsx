import React from 'react'
import { createComponent } from '@lit/react'

import { GdsText } from '@sebgroup/green-core/component/text/text.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const Text = createComponent({
  tagName: getScopedTagName('gds-text'),
  elementClass: GdsText,
  react: React,
})
