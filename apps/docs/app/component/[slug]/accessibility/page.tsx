// app/component/[slug]/accessibility/page.tsx
'use client'

import { useContent } from '../content'

export default function AccessibilityPage({
  params: { slug },
}: {
  params: { slug: string }
}) {
  const { content, loading, error } = useContent(slug)

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>

  return (
    <div className="accessibility-content">
      {content?.accessibility?.section.map((section, index) => (
        <div key={index} className="accessibility-section">
          <h2>{section.title}</h2>
          <p>{section.description}</p>
        </div>
      ))}
    </div>
  )
}
