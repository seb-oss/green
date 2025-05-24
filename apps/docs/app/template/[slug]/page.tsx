// app/template/[slug]/page.tsx
import * as Core from '@sebgroup/green-core/react'
import { getContent } from './content'

export default async function PreviewPage({
  params: { slug },
}: {
  params: { slug: string }
}) {
  const content = await getContent(slug)

  return (
    <div className="preview-content">
      <div dangerouslySetInnerHTML={{ __html: content.code }} />
    </div>
  )
}
