// layout/components/page.tsx
'use client'

import { GdsCard, GdsFlex, GdsText } from '@sebgroup/green-core/react'
import { useContentContext } from '../../../settings/content'
import { LAYOUT_UTILS } from '../config'

import type { PageProps } from '../types'

import './home.css'

export function Home({
  children,
  className,
  content,
  title,
  slug,
  variant = 'page',
  layout = 'home',
  ...rest
}: PageProps) {
  const { actions } = useContentContext()
  const homeContent = actions.getPage('home')

  const classes = [LAYOUT_UTILS.page(variant, layout), className]
    .filter(Boolean)
    .join(' ')

  return (
    <article className={classes} data-slug={slug} {...rest}>
      <GdsFlex flex-direction="column" gap="xl">
        <GdsText tag="h1">{homeContent?.title}</GdsText>
        <GdsText
          tag="p"
          font-size="heading-s"
          line-height="heading-s"
          color="secondary"
          max-width="80ch"
        >
          {homeContent?.summary}
        </GdsText>
        <GdsCard height="60vh"></GdsCard>
        {children}
      </GdsFlex>
    </article>
  )
}
