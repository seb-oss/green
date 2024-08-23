import React from 'react'
import { createComponent } from '@lit/react'
import { IconBlock } from '@sebgroup/green-core/components/icon/icons/block'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const Block = createComponent({
  tagName: getScopedTagName('gds-icon-block'),
  elementClass: IconBlock,
  react: React
})
