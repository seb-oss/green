// app/studio/[tool]/icons/[icon]/page.tsx
'use client'

import Studio from '../../../../../design/studio/studio'

interface PageProps {
  params: Promise<{ tool: string }>
}

export default function ToolPage({ params }: PageProps) {
  return <Studio page="icons" />
}
