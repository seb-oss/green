import React from 'react'
import { createComponent } from '@lit/react'
import { IconBrandRssFeed as Icon } from '@sebgroup/green-core/components/icon/icons/brand-rss-feed.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconBrandRssFeed = createComponent({
  tagName: getScopedTagName('gds-icon-brand-rss-feed'),
  elementClass: Icon,
  react: React,
})
