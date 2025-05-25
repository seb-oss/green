// app/component/[slug]/component-layout.tsx
'use client'

import { notFound } from 'next/navigation'

import { useContent } from '../../../settings/content'

interface ComponentLayoutProps {
  children: React.ReactNode
  slug: string
}

export default function ComponentLayout({
  children,
  slug,
}: ComponentLayoutProps) {
  const { isLoaded, actions } = useContent()

  if (!isLoaded) return null

  const component = actions.getComponent(slug)

  if (!component) {
    notFound()
  }

  return (
    <div>
      <header>
        <h1>{component.title}</h1>
        {component.summary && <p>{component.summary}</p>}
        {component.tags && (
          <div className="tags">
            {component.tags.map((tag) => (
              <span key={tag} className="tag">
                {tag}
              </span>
            ))}
          </div>
        )}
        {component.hero_snippet && (
          <div className="hero-snippet">{component.hero_snippet}</div>
        )}
      </header>

      {/* Pass the component data to children */}
      {children}
    </div>
  )
}
