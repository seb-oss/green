import React from 'react'
import { createComponent } from '@lit/react'
import { IconCircleQuestionmark as Icon } from '@sebgroup/green-core/components/icon/icons/circle-questionmark.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconCircleQuestionmark = createComponent({
  tagName: getScopedTagName('gds-icon-circle-questionmark'),
  elementClass: Icon,
  react: React,
})
