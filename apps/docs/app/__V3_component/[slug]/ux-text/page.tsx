// app/component/[slug]/ux-text/page.tsx
'use client'

import { useContent } from '../content'

export default function UXTextPage({
  params: { slug },
}: {
  params: { slug: string }
}) {
  const { content, loading, error } = useContent(slug)

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>

  return (
    <div className="ux-text-content">
      {content?.['ux-text']?.section.map((section, index) => (
        <div key={index} className="ux-text-section">
          <h2>{section.title}</h2>
          <p>{section.description}</p>
        </div>
      ))}
    </div>
  )
}
