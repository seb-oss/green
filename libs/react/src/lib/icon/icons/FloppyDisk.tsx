import React from 'react'
import { createComponent } from '@lit/react'
import { IconFloppyDisk } from '@sebgroup/green-core/components/icon/icons/floppy-disk'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const FloppyDisk = createComponent({
  tagName: getScopedTagName('gds-icon-floppy-disk'),
  elementClass: IconFloppyDisk,
  react: React
})
