// app/component/[slug]/ux-text/page.client.tsx
'use client'

import { ContentSection } from '../content'

interface UXTextClientProps {
  slug: string
}

export function UXTextClient({ slug }: UXTextClientProps) {
  return (
    <div id="component-ux-text">
      <ContentSection slug={slug} contentKey="ux-text" />
    </div>
  )
}
