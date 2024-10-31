import React from 'react'
import { createComponent } from '@lit/react'

import { IconBrandSpotify as Icon } from '@sebgroup/green-core/components/icon/icons/brand-spotify.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconBrandSpotify = createComponent({
  tagName: getScopedTagName('gds-icon-brand-spotify'),
  elementClass: Icon,
  react: React,
})
