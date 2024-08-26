import React from 'react'
import { createComponent } from '@lit/react'
import { IconMegaphone } from '@sebgroup/green-core/components/icon/icons/megaphone'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const Megaphone = createComponent({
  tagName: getScopedTagName('gds-icon-megaphone'),
  elementClass: IconMegaphone,
  react: React
})
