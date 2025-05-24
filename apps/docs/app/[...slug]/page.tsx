// app/[...slug]/page.tsx
import { notFound } from 'next/navigation'

import { getPageContent } from './content'

export default async function CatchAllPage({
  params: { slug },
}: {
  params: { slug: string[] }
}) {
  if (slug[0] === 'component' || slug[0] === 'components') {
    notFound()
    return
  }

  try {
    // For pages, we expect a single segment
    if (slug.length !== 1) {
      notFound()
      return
    }

    const content = await getPageContent(slug[0])

    return (
      <div className="page-content">
        <h1>{content.title}</h1>
        {content.summary && <p className="summary">{content.summary}</p>}

        {content.content?.section.map((section, index) => (
          <div key={index} className="content-section">
            <h2>{section.title}</h2>
            <p>{section.description}</p>
          </div>
        ))}
      </div>
    )
  } catch (error) {
    notFound()
  }
}
