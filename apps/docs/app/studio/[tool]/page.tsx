// app/studio/[tool]/page.tsx
'use client'

import { use } from 'react'

import { Page } from '../../../design/studio/settings/studio.types'
import Studio from '../../../design/studio/studio'

interface PageProps {
  params: Promise<{ tool: string }>
}

export default function ToolPage({ params }: PageProps) {
  const { tool } = use(params)
  return <Studio page={tool as Page} />
}
