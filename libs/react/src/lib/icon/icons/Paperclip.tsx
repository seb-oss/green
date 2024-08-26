import React from 'react'
import { createComponent } from '@lit/react'
import { IconPaperclip } from '@sebgroup/green-core/components/icon/icons/paperclip'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const Paperclip = createComponent({
  tagName: getScopedTagName('gds-icon-paperclip'),
  elementClass: IconPaperclip,
  react: React
})
