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
    </div>
  )
}
