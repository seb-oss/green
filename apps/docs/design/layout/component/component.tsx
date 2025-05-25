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
      {component.title && (
        <h1 className="component-title">{component.title}</h1>
      )}
    </article>
  )
}
