import React from 'react'
import { createComponent } from '@lit/react'
import { IconUmbrellaSecurity } from '@sebgroup/green-core/components/icon/icons/umbrella-security'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const UmbrellaSecurity = createComponent({
  tagName: getScopedTagName('gds-icon-umbrella-security'),
  elementClass: IconUmbrellaSecurity,
  react: React
})
