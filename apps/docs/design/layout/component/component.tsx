'use client'

import { ComponentContent } from '@/apps/docs/settings/content/types'

import './component.css'

interface ComponentProps {
  component: ComponentContent
}

export function Component({ component }: ComponentProps) {
  return (
    <article className="component">
      <span>component stuff</span>
    </article>
  )
}
