// app/component/[slug]/page.tsx
'use client'

import { use } from 'react'

import { useContent } from '../../../settings/content'

interface ComponentPageProps {
  params: Promise<{
    slug: string
  }>
}

export default function ComponentPage({ params }: ComponentPageProps) {
  const { slug } = use(params)
  const { isLoaded, actions } = useContent()

  if (!isLoaded) return null

  const component = actions.getComponent(slug)

  if (!component?.overview) return null

  return (
    <div className="component-overview">
      {component.overview.map((section, index) => (
        <div key={index} className="overview-column">
          {section.column.map((col, colIndex) => (
            <div key={colIndex} className="overview-section">
              <h2>{col.title}</h2>
              <p>{col.description}</p>
              {col.column_title_tag && (
                <div className="title-tag">{col.column_title_tag}</div>
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}
