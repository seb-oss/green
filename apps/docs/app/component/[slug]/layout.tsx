import Link from 'next/link'

import { loadContent } from '../../../settings/content/loader'

export default async function ComponentLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { slug: string }
}) {
  const content = await loadContent()
  const component = content.components.find((c) => c.slug === params.slug)

  if (!component) {
    return <div>Component not found</div>
  }

  return (
    <div>
      <header>
        <h1>{component.title}</h1>
        {component.tags && (
          <div>
            {component.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        )}
        <nav>
          <Link href={`/component/${params.slug}`}>Overview</Link>
          {component['ux-text'] && (
            <Link href={`/component/${params.slug}/ux-text`}>UX Text</Link>
          )}
          {component.accessibility && (
            <Link href={`/component/${params.slug}/accessibility`}>
              Accessibility
            </Link>
          )}
        </nav>
      </header>
      {children}
    </div>
  )
}
