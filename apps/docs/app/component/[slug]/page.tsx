// app/component/[slug]/page.tsx
import { getContent } from './content'

export default async function OverviewPage({
  params: { slug },
}: {
  params: { slug: string }
}) {
  const content = await getContent(slug)

  return (
    <div className="overview-content">
      {content.overview?.map((section, index) => (
        <div key={index} className="overview-section">
          {section.column.map((col, colIndex) => (
            <div key={colIndex} className="column">
              {col.column_title_tag === 'H2' ? (
                <h2>{col.title}</h2>
              ) : (
                <h3>{col.title}</h3>
              )}
              <p>{col.description}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}
