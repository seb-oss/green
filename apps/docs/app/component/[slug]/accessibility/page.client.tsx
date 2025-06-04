// app/component/[slug]/accessibility/page.client.tsx
'use client'

import { ContentSection } from '../content'

interface AccessibilityClientProps {
  slug: string
}

export function AccessibilityClient({ slug }: AccessibilityClientProps) {
  return <ContentSection slug={slug} contentKey="accessibility" />
}
