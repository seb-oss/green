// app/component/[slug]/accessibility/page.tsx
import { AccessibilityClient } from './page.client'

interface PageProps {
  params: { slug: string }
}

export default function Page({ params }: PageProps) {
  return <AccessibilityClient slug={params.slug} />
}
