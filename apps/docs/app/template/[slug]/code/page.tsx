// app/template/[slug]/code/page.tsx
import Link from 'next/link'

import { getContent } from '../content'
import { CodeTextArea } from './CodeTextArea'

export default async function CodePage({
  params: { slug },
}: {
  params: { slug: string }
}) {
  const content = await getContent(slug)

  return (
    <div className="code-content">
      <CodeTextArea code={content.code} />

      {content.related_components.length > 0 && (
        <div className="related-components">
          <h2>Related Components</h2>
          <ul>
            {content.related_components.map((component) => (
              <li key={component}>
                <Link href={`/component/${component.toLowerCase()}`}>
                  {component}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
