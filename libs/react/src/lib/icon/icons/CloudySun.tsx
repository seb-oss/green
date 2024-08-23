import React from 'react'
import { createComponent } from '@lit/react'
import { IconCloudySun } from '@sebgroup/green-core/components/icon/icons/cloudy-sun'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const CloudySun = createComponent({
  tagName: getScopedTagName('gds-icon-cloudy-sun'),
  elementClass: IconCloudySun,
  react: React
})
