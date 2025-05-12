// app/component/[slug]/ux-text/page.tsx
import { getContent } from '../content'

export default async function UXTextPage({
  params: { slug },
}: {
  params: { slug: string }
}) {
  const content = await getContent(slug)

  return (
    <div className="ux-text-content">
      {content['ux-text']?.section.map((section, index) => (
        <div key={index} className="ux-text-section">
          <h2>{section.title}</h2>
          <p>{section.description}</p>
        </div>
      ))}
    </div>
  )
}
