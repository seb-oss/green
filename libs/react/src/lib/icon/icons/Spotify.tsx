import React from 'react'
import { createComponent } from '@lit/react'
import { IconSpotify } from '@sebgroup/green-core/components/icon/icons/spotify'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const Spotify = createComponent({
  tagName: getScopedTagName('gds-icon-spotify'),
  elementClass: IconSpotify,
  react: React
})
