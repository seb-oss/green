// app/studio/[...slug]/page.client.tsx
'use client'

import { Page } from '../../../design/studio/settings/studio.types'
import Studio from '../../../design/studio/studio'

interface StudioClientProps {
  tool: string
  selectedIcon?: string
}

export default function StudioClient({
  tool,
  selectedIcon,
}: StudioClientProps) {
  return <Studio page={tool as Page} icon={selectedIcon} />
}
