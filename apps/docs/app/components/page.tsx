// app/components/page.tsx
import Link from 'next/link'

import { listComponents } from '../../hooks/mdx'

export default async function ComponentsPage() {
  const components = await listComponents()

  return (
    <div>
      <h1>Components</h1>
      <ul>
        {components.map((slug) => (
          <li key={slug}>
            <Link href={`/component/${slug}`}>{slug}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
