import React from 'react'
import { createComponent } from '@lit/react'
import { GdsPopover } from '@sebgroup/green-core/components/popover/index.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

import * as PopoverTransitionalStyles from '@sebgroup/green-core/components/popover/popover.trans.styles'
PopoverTransitionalStyles.register()

export const Popover = createComponent({
  tagName: getScopedTagName('gds-popover'),
  elementClass: GdsPopover,
  react: React,
})
