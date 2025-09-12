import React from 'react'
import { createComponent } from '@lit/react'

import { GdsPopover } from '@sebgroup/green-core/components/popover/popover.component'
import * as PopoverTransitionalStyles from '@sebgroup/green-core/components/popover/popover.trans.styles'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

GdsPopover.define()
PopoverTransitionalStyles.register()

/**
 * @deprecated Please use the `gds-popover` web component from green-core instead
 */
export const Popover = createComponent({
  tagName: getScopedTagName('gds-popover'),
  elementClass: GdsPopover,
  react: React,
})
