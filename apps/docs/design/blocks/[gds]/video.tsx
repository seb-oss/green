import React from 'react'
import { createComponent } from '@lit/react'

import { GdsVideo } from '@sebgroup/green-core/component/video/video.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const Video = createComponent({
  tagName: getScopedTagName('gds-video'),
  elementClass: GdsVideo,
  react: React,
})
