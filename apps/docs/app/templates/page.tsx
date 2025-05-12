// app/templates/page.tsx
import Link from 'next/link'

interface Template {
  title: string
  slug: string
  path: string
  related_components: string[]
}

interface TemplatesResponse {
  templates: Template[]
  total: number
  lastUpdated: string
}

async function getTemplates() {
  const response = await fetch('https://api.seb.io/templates.json')
  if (!response.ok) throw new Error('Failed to fetch templates')
  return response.json() as Promise<TemplatesResponse>
}

export default async function Templates() {
  const { templates } = await getTemplates()

  return (
    <div className="templates-page">
      <header className="templates-header">
        <h1>Templates</h1>
        <p>Ready-to-use templates built with Green Design System components.</p>
      </header>

      <div className="templates-grid">
        {templates.map((template) => (
          <article key={template.slug} className="template-card">
            <h2>{template.title}</h2>

            {template.related_components.length > 0 && (
              <div className="template-components">
                <h3>Related Components</h3>
                <ul className="component-tags">
                  {template.related_components.map((component) => (
                    <li key={component}>
                      <Link href={`/component/${component.toLowerCase()}`}>
                        {component}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="template-actions">
              <Link
                href={`/template/${template.slug}`}
                className="button primary"
              >
                View Template
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
