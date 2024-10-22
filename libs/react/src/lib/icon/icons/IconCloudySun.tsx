import React from 'react'
import { createComponent } from '@lit/react'
import { IconCloudySun as Icon } from '@sebgroup/green-core/components/icon/icons/cloudy-sun.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconCloudySun = createComponent({
  tagName: getScopedTagName('gds-icon-cloudy-sun'),
  elementClass: Icon,
  react: React,
})
