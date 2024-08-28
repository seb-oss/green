import React from 'react'
import { createComponent } from '@lit/react'
import { IconSpotify as Icon } from '@sebgroup/green-core/components/icon/icons/spotify.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconSpotify = createComponent({
  tagName: getScopedTagName('gds-icon-spotify'),
  elementClass: Icon,
  react: React
})
