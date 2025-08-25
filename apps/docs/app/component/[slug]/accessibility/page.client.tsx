// app/component/[slug]/accessibility/page.client.tsx
'use client'

import { ContentSection } from '../content'

interface AccessibilityClientProps {
  slug: string
}

export function AccessibilityClient({ slug }: AccessibilityClientProps) {
  return (
    <div id="component-accessibility">
      <ContentSection slug={slug} contentKey="accessibility" />
    </div>
  )
}
