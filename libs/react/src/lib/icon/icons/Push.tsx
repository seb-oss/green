import React from 'react'
import { createComponent } from '@lit/react'
import { IconPush } from '@sebgroup/green-core/components/icon/icons/push'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const Push = createComponent({
  tagName: getScopedTagName('gds-icon-push'),
  elementClass: IconPush,
  react: React
})
