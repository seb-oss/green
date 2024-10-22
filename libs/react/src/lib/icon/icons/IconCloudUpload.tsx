import React from 'react'
import { createComponent } from '@lit/react'
import { IconCloudUpload as Icon } from '@sebgroup/green-core/components/icon/icons/cloud-upload.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconCloudUpload = createComponent({
  tagName: getScopedTagName('gds-icon-cloud-upload'),
  elementClass: Icon,
  react: React,
})
