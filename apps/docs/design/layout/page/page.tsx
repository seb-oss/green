// layout/components/page.tsx
'use client'

import { LAYOUT_UTILS } from '../config'

import type { PageProps } from '../types'

import './page.css'

export function Page({
  children,
  className,
  content,
  title,
  slug,
  variant = 'page',
  layout = 'page',
  ...rest
}: PageProps) {
  const classes = [LAYOUT_UTILS.page(variant, layout), className]
    .filter(Boolean)
    .join(' ')

  return (
    <article className={classes} data-slug={slug} {...rest}>
      {content}
      {children}
    </article>
  )
}
