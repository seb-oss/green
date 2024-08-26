import React from 'react'
import { createComponent } from '@lit/react'
import { IconCircleQuestionmark } from '@sebgroup/green-core/components/icon/icons/circle-questionmark'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const CircleQuestionmark = createComponent({
  tagName: getScopedTagName('gds-icon-circle-questionmark'),
  elementClass: IconCircleQuestionmark,
  react: React
})
