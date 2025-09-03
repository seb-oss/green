// app/studio/[tool]/icons/[icon]/page.tsx
'use client'

import { use } from 'react'

import { Page } from '../../../../../design/studio/settings/studio.types'
import Studio from '../../../../../design/studio/studio'

interface PageProps {
  params: Promise<{ tool: string; icon: string }>
}

// Add this function to generate all possible icon paths
export async function generateStaticParams() {
  // Fetch the icons list from your API or data source
  const response = await fetch(
    'https://api.seb.io/components/icon/icon.list.json',
  )
  const icons = await response.json()

  // Generate params for each icon
  return Object.keys(icons).map((iconId) => ({
    tool: 'icons',
    icon: iconId,
  }))
}

export default function IconDetailPage({ params }: PageProps) {
  const { tool, icon } = use(params)
  return <Studio page={tool as Page} icon={icon} />
}
