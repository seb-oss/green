// app/component/[slug]/page.tsx
'use client'

import { useContent } from './content'
import { IconList } from './icon/icon.list'

// import { useIcons } from './icon/icon.service' // Convert icon service to hook

export default function OverviewPage({
  params: { slug },
}: {
  params: { slug: string }
}) {
  const { content, loading, error } = useContent(slug)
  // const { icons, loading: iconsLoading } = useIcons(slug === 'icon')

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error}</div>
  }

  if (slug === 'icon') {
    // if (iconsLoading) return <div>Loading icons...</div>
    return <div>{/* <IconList icons={icons || []} /> */}</div>
  }

  return (
    <div className="overview-content">
      {content?.overview?.map((section, index) => (
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
