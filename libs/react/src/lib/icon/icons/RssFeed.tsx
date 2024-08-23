import React from 'react'
import { createComponent } from '@lit/react'
import { IconRssFeed } from '@sebgroup/green-core/components/icon/icons/rss-feed'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const RssFeed = createComponent({
  tagName: getScopedTagName('gds-icon-rss-feed'),
  elementClass: IconRssFeed,
  react: React
})
