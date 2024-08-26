import React from 'react'
import { createComponent } from '@lit/react'
import { IconCloudUpload } from '@sebgroup/green-core/components/icon/icons/cloud-upload'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const CloudUpload = createComponent({
  tagName: getScopedTagName('gds-icon-cloud-upload'),
  elementClass: IconCloudUpload,
  react: React
})
