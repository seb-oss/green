import React from 'react'
import { createComponent } from '@lit/react'
import { IconChevronGrabberVertical as Icon } from '@sebgroup/green-core/components/icon/icons/chevron-grabber-vertical'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconChevronGrabberVertical = createComponent({
  tagName: getScopedTagName('gds-icon-chevron-grabber-vertical'),
  elementClass: Icon,
  react: React
})
