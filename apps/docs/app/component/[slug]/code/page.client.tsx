// app/component/[slug]/ux-text/page.client.tsx
'use client'

import { ContentSection } from '../content'

interface CodeClientProps {
  slug: string
}

export function CodeClient({ slug }: CodeClientProps) {
  return (
    <div id="component-code">
      <ContentSection slug={slug} contentKey="ux-text" />
    </div>
  )
}
