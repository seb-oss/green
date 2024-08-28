import React from 'react'
import { createComponent } from '@lit/react'
import { IconRssFeed as Icon } from '@sebgroup/green-core/components/icon/icons/rss-feed.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconRssFeed = createComponent({
  tagName: getScopedTagName('gds-icon-rss-feed'),
  elementClass: Icon,
  react: React
})
