import React from 'react'
import { createComponent } from '@lit/react'

import { IconPaperclip as Icon } from '@sebgroup/green-core/components/icon/icons/paperclip.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconPaperclip = createComponent({
  tagName: getScopedTagName('gds-icon-paperclip'),
  elementClass: Icon,
  react: React,
})
