import React from 'react'
import { createComponent } from '@lit/react'
import { IconMapPin } from '@sebgroup/green-core/components/icon/icons/map-pin'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const MapPin = createComponent({
  tagName: getScopedTagName('gds-icon-map-pin'),
  elementClass: IconMapPin,
  react: React
})
