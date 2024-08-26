import React from 'react'
import { createComponent } from '@lit/react'
import { IconMoneybag } from '@sebgroup/green-core/components/icon/icons/moneybag'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const Moneybag = createComponent({
  tagName: getScopedTagName('gds-icon-moneybag'),
  elementClass: IconMoneybag,
  react: React
})
