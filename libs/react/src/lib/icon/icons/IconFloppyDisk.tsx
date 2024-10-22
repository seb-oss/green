import React from 'react'
import { createComponent } from '@lit/react'

import { IconFloppyDisk as Icon } from '@sebgroup/green-core/components/icon/icons/floppy-disk.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconFloppyDisk = createComponent({
  tagName: getScopedTagName('gds-icon-floppy-disk'),
  elementClass: Icon,
  react: React,
})
